import type {
  Properties,
  FeatureCollection,
  Feature,
  Point,
  Polygon,
} from '@turf/turf'
import { getNumberFromConfig } from '@/services/configService'
import { featureCollection, point, polygon } from '@turf/helpers'

import type { Matrix } from '@/services/roofInteractionHelper'

import * as fs from 'fs'
import * as path from 'path'

// A grid is a one cell in a matrix. It is represented by its row and column
export type Grid = [number, number]

// A solar panel representation that show which grid are covered by the solar panel
export type SolarPanelGrid = Grid[]

// Helper function
// Write FeatureCollection or Feature to a file, for debugging
export function writeFeature(
  outputFileName: string,
  feature: FeatureCollection | Feature,
  debug: boolean = false
) {
  if (debug) {
    fs.writeFileSync(
      path.join(__dirname, outputFileName),
      JSON.stringify(feature)
    )
  }
}

// Create solar panel from a starting grid (vertical 2x4, horizontal 4x2)
// Example, from a grid [1, 0] and horizontal, we will get a list of these solar panel
// [1, 0] [2, 0] [3, 0] [4, 0]
// [1, 1] [2, 1] [3, 1] [4, 1]
function createSolarPanelGrid(
  startingGrid: Grid,
  horizontal: boolean = true
): SolarPanelGrid {
  const solarPanelGrid: SolarPanelGrid = []
  const heightSolarPanel = getNumberFromConfig('grid.height_solar_panel')
  const widthSolarPanel = getNumberFromConfig('grid.width_solar_panel')
  const length = horizontal ? widthSolarPanel : heightSolarPanel
  const width = horizontal ? heightSolarPanel : widthSolarPanel

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < width; j++) {
      solarPanelGrid.push([startingGrid[0] + i, startingGrid[1] + j])
    }
  }

  return solarPanelGrid
}

// Check if the grid on the solar panel are all usable
// Usable grid means it has a usable = True
// In the real situation, not usable = outside the roof area/polygon or excluded by the user (e.g. there is a obstacle)
function isAllSolarPanelGridUsable(
  matrix: Matrix,
  solarPanelGrid: SolarPanelGrid
) {
  for (let i = 0; i < solarPanelGrid.length; i++) {
    if (matrix[solarPanelGrid[i][0]][solarPanelGrid[i][1]] == undefined) {
      return false
    }
    if (!matrix[solarPanelGrid[i][0]][solarPanelGrid[i][1]].usable) {
      return false
    }
  }

  return true
}

// Check if there is a grid in the solar panel that covers other grid that already covered by other solar panel
// Example:
// solarPanelGrid: [1, 0] [2, 0] [3, 0] [4, 0]  [1, 1] [2, 1] [3, 1] [4, 1]
// coverageMatrix is a matrix where that has true on the cell if the grid is already covered, otherwise false
// for instance, coverageMatrix of 4x4 matrix with grid [1, 1] [2, 2] [3, 3] are true, and the rest if false
// In this case, it will return False because the solar panel also has grid [3, 3]
function isAllSolarPanelGridNotCovered(
  solarPanelGrid: SolarPanelGrid,
  coverageMatrix: number[][]
): boolean {
  for (let i = 0; i < solarPanelGrid.length; i++) {
    const x = solarPanelGrid[i][0]
    const y = solarPanelGrid[i][1]
    if (coverageMatrix[x][y] > -1) {
      return false
    }
  }

  return true
}

// Main part of the solar panel placement algorithm.
// It use a greedy approach to solve the problem (greedy in term of putting
// the solar panel as early as possible)

// *** Below are the algorithm ***

// Iterate all grid from the matrix
// If the grid is not usable, skip the grid
// If the grid is usable, create a SolarPanelGrid from it (either vertical or horizontal)
// SolarPanelGrid object -> list of 8 grids
// Check all 8 grids of the solar panel are usable in the matrix
// If there is a grid that is not usable, skip to the next grid
// If all is usable, check all 8 grids are not yet covered by solar panel (checking if they are in covered grids or not)
// If there is a grid that has been covered, skip to the next grid
// If so, push those 8 grids to the list of covered grids and put the solar panel in the list of solar panel
export function solarPanelPlacementAlgorithm(
  matrix: Matrix,
  horizontal: boolean = true
) {
  const matrixLength = matrix.length
  const matrixWidth = matrix[0].length

  const solarPanels: SolarPanelGrid[] = []
  const coverageMatrix = buildCoverageMatrix(matrixLength, matrixWidth)

  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < matrixWidth; j++) {
      if (!matrix[i][j].usable) {
        // skipped if the grid is not usable
        continue
      }

      const solarPanel = createSolarPanelGrid([i, j], horizontal)

      if (!isAllSolarPanelGridUsable(matrix, solarPanel)) {
        // skipped because the grids covered by the solar panel are not all usable or beyond the matrix
        continue
      }
      if (!isAllSolarPanelGridNotCovered(solarPanel, coverageMatrix)) {
        // skipped because the solar panel cover grid that has been covered by other solar panel
        continue
      }

      // All those check are good, then the solar panel is added to the list
      solarPanels.push(solarPanel)
      // Update coverage matrix, set the grid from the solar panel to the index of the solar panel
      for (let k = 0; k < solarPanel.length; k++) {
        const x = solarPanel[k][0]
        const y = solarPanel[k][1]
        // Set coverage matrix to the last index of the solar panel
        coverageMatrix[x][y] = solarPanels.length - 1
      }
    }
  }

  return solarPanels
}

// Main function, basically run the algorithm for both horizontal and vertical orientation
// Return the one that has more solar panels
export function solarPanelPlacement(
  matrix: Matrix,
  debug: boolean = false,
  prefix: string = ''
) {
  if (debug) {
    const matrixGeoJSON = matrixToGeoJSON(matrix)
    writeFeature(`${prefix}matrix.geojson`, matrixGeoJSON, debug)

    const centroidGeoJSON = matrixCentroidToGeoJSON(matrix)
    writeFeature(`${prefix}centroids.geojson`, centroidGeoJSON, debug)
  }

  const verticalSolarPanels = solarPanelPlacementAlgorithm(matrix, false)
  const horizontalSolarPanels = solarPanelPlacementAlgorithm(matrix, true)

  let orientation
  let solarPanels
  if (horizontalSolarPanels.length >= verticalSolarPanels.length) {
    solarPanels = horizontalSolarPanels
    orientation = 'horizontal'
  } else {
    solarPanels = verticalSolarPanels
    orientation = 'vertical'
  }

  if (debug) {
    const matrixGeoJSONCovered = matrixToGeoJSON(matrix, solarPanels)
    writeFeature(`${prefix}matrix-covered.geojson`, matrixGeoJSONCovered, debug)
  }

  return { solarPanels: solarPanels, orientation: orientation }
}

// Used to write a GeoJSON representation of the matrix' to check/debug
// the order / formation of the grid and the solar panel
// The representation is a square that has equal length (0.05) and starting from coordinate (0, 0)
export function matrixToGeoJSON(
  matrix: Matrix,
  solarPanels: SolarPanelGrid[] = []
) {
  const fc: FeatureCollection<Polygon, Properties> = featureCollection([])
  const length = 0.05 // The length of the square

  const coveredGrids: Record<number, number> = {}
  for (let i = 0; i < solarPanels.length; i++) {
    solarPanels[i].forEach((solarPanelGrid) => {
      coveredGrids[solarPanelGrid[1] * matrix.length + solarPanelGrid[0]] = i
    })
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      // Construct the rectangle.
      // It needs to replicate the order of the matrix of grid given by Turf.js which the center is 0, 0,
      // then it goes to the left first (that's why the x is decreased by -length)
      // after that if fill the next row
      const x: number = i * -length
      const y: number = j * length
      const solarPanelIndex = coveredGrids[j * matrix.length + i]
      const grid: Feature<Polygon, Properties> = polygon(
        [
          [
            [x, y],
            [x - length, y],
            [x - length, y + length],
            [x, y + length],
            [x, y],
          ],
        ],
        {
          index: j * matrix.length + i,
          usable: matrix[i][j].usable,
          solar_panel_index: solarPanelIndex,
          column: i,
          row: j,
        }
      )
      fc.features.push(grid)
    }
  }

  return fc
}

// Used to write a GeoJSON representation of the matrix's centroid to check/debug
// the order / formation of the grid
export function matrixCentroidToGeoJSON(matrix: Matrix) {
  const fc: FeatureCollection<Point, Properties> = featureCollection([])
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const index = j * matrix.length + i
      const x = matrix[i][j].squareCenter.coordinates[0] as number
      const y = matrix[i][j].squareCenter.coordinates[1] as number
      const p: Feature<Point, Properties> = point([x, y], {
        index: index,
        usable: matrix[i][j].usable,
        i: i,
        j: j,
      })
      fc.features.push(p)
    }
  }
  return fc
}

// Create a matrix that represent if a grid is already covered or not
// -1 if not covered
function buildCoverageMatrix(
  length: number,
  width: number,
  default_value: number = -1
): number[][] {
  const coverageMatrix: number[][] = []
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < width; j++) {
      if (j == 0) {
        coverageMatrix.push([])
      }
      coverageMatrix[i][j] = default_value
    }
  }

  return coverageMatrix
}
