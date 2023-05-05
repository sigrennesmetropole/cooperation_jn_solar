import {
  Feature,
  FeatureCollection,
  Geometry,
  Point,
  Polygon,
  Properties,
  featureCollection,
  point,
  polygon,
} from '@turf/turf'

import * as fs from 'fs'
import * as path from 'path'

export type Square = {
  usable: boolean
  squareCenter: Geometry
}

export type Matrix = Square[][]

export type SolarPanelGrid = {
  gridIndexes: [number, number][]
}

// Helper function

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

function createSolarPanel(
  index: [number, number],
  horizontal: boolean = true
): SolarPanelGrid {
  const indexes: [number, number][] = []

  const length = horizontal ? 4 : 2
  const width = horizontal ? 2 : 4

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < width; j++) {
      indexes.push([index[0] + i, index[1] + j])
    }
  }

  const solarPanelGrid: SolarPanelGrid = {
    gridIndexes: indexes,
  }
  return solarPanelGrid
}

function isAllSolarPanelGridUsable(
  matrix: Matrix,
  solarPanelGrid: SolarPanelGrid
) {
  for (let i = 0; i < solarPanelGrid.gridIndexes.length; i++) {
    if (
      matrix[solarPanelGrid.gridIndexes[i][0]][
        solarPanelGrid.gridIndexes[i][1]
      ] == undefined
    ) {
      return false
    }
    if (
      !matrix[solarPanelGrid.gridIndexes[i][0]][
        solarPanelGrid.gridIndexes[i][1]
      ].usable
    ) {
      return false
    }
  }

  return true
}

function isAllSolarPanelGridNotCovered(
  solarPanelGrid: SolarPanelGrid,
  coverageMatrix: number[][]
): boolean {
  for (let i = 0; i < solarPanelGrid.gridIndexes.length; i++) {
    const x = solarPanelGrid.gridIndexes[i][0]
    const y = solarPanelGrid.gridIndexes[i][1]
    if (coverageMatrix[x][y] > -1) {
      return false
    }
  }

  return true
}

export function solarPanelPlacementAlgorithm(
  matrix: Matrix,
  horizontal: boolean = true
) {
  // Iterate all grid from the matrix
  // If the grid is not usable, skip
  // If the grid is usable, create a solar panel object from it (either vertical or horizontal)
  // SolarPanel object -> list of 8 grids
  // Check all 8 grids of the solar panel are usable in the matrix
  // If so, check all 8 grids are not yet covered by solar panel (checking if they are in covered grids or not)
  // If so, push those 8 grids to the list of covered grids

  const matrixLength = matrix.length
  const matrixWidth = matrix[0].length

  const solarPanels: SolarPanelGrid[] = []
  const coverageMatrix = buildCoverageMatrix(matrixLength, matrixWidth)

  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < matrixWidth; j++) {
      if (matrix[i][j].usable) {
        const solarPanel = createSolarPanel([i, j], horizontal)
        if (isAllSolarPanelGridUsable(matrix, solarPanel)) {
          if (isAllSolarPanelGridNotCovered(solarPanel, coverageMatrix)) {
            solarPanels.push(solarPanel)
            for (let k = 0; k < solarPanel.gridIndexes.length; k++) {
              const x = solarPanel.gridIndexes[k][0]
              const y = solarPanel.gridIndexes[k][1]
              // Set coverage matrix to the last index of the solar panel
              coverageMatrix[x][y] = solarPanels.length - 1
            }
          } else {
            // skipped because the solar panel cover grid that has been covered by other solar panel
          }
        } else {
          // skipped because the grids covered by the solar panel are not all usable or beyond the matrix
        }
      } else {
        // skipped if the grid is not usable
      }
    }
  }

  return solarPanels
}

export function solarPanelPlacement(
  matrix: Matrix,
  debug: boolean = false,
  prefix: string = ''
) {
  const matrixGeoJSON = matrixToGeoJSON(matrix)
  writeFeature(`${prefix}matrix.geojson`, matrixGeoJSON, debug)

  const centroidGeoJSON = matrixCentroidToGeoJSON(matrix)
  writeFeature(`${prefix}centroids.geojson`, centroidGeoJSON, debug)

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

  const matrixGeoJSONCovered = matrixToGeoJSON(matrix, solarPanels)
  writeFeature(`${prefix}matrix-covered.geojson`, matrixGeoJSONCovered, debug)

  return { solarPanels: solarPanels, orientation: orientation }
}

// Used to write a GeoJSON representation of the matrix' to check
// the order / formation of the grid and the solar panel
export function matrixToGeoJSON(
  matrix: Matrix,
  solarPanels: SolarPanelGrid[] = []
) {
  const fc: FeatureCollection<Polygon, Properties> = featureCollection([])
  const length = 0.05

  const coveredGrids: Record<number, number> = {}
  for (let i = 0; i < solarPanels.length; i++) {
    solarPanels[i].gridIndexes.forEach((gridIndex) => {
      coveredGrids[gridIndex[1] * matrix.length + gridIndex[0]] = i
    })
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
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
        }
      )
      fc.features.push(grid)
    }
  }

  return fc
}

// Used to write a GeoJSON representation of the matrix's centroid to check
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
