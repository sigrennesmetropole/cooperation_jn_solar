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

import { writeFeature } from './solarPanelPlacement'

export type Square = {
  usable: boolean
  squareCenter: Geometry
}

export type Matrix = Square[][]

export type SolarPanelGrid = {
  gridIndexes: [number, number][]
}

// Helper function

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
  coveredGrids: Set<[number, number]>
) {
  for (let i = 0; i < solarPanelGrid.gridIndexes.length; i++) {
    if (coveredGrids.has(solarPanelGrid.gridIndexes[i])) {
      return false
    }
  }
  return true
}

export function solarPanelPlacementAlgorithm(
  matrix: Matrix,
  horizontal: boolean = true,
  debug: boolean = false
) {
  // Iterate all grid from the matrix
  // If the grid is not usable, skip
  // If the grid is usable, create a solar panel object from it (either vertical or horizontal)
  // SolarPanel object -> list of 8 grids
  // Check all 8 grids of the solar panel are usable in the matrix
  // If so, check all 8 grids are not yet covered by solar panel (checking if they are in covered grids or not)
  // If so, push those 8 grids to the list of covered grids
  console.log(debug)

  const matrixLength = matrix.length
  const matrixWidth = matrix[0].length

  const solarPanels: SolarPanelGrid[] = []
  const coveredGrids: Set<[number, number]> = new Set()

  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < matrixWidth; j++) {
      if (matrix[i][j].usable) {
        const solarPanel = createSolarPanel([i, j], horizontal)
        if (isAllSolarPanelGridUsable(matrix, solarPanel)) {
          if (isAllSolarPanelGridNotCovered(solarPanel, coveredGrids)) {
            solarPanels.push(solarPanel)
            for (let k = 0; k < solarPanel.gridIndexes.length; k++) {
              coveredGrids.add(solarPanel.gridIndexes[k])
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

export function matrixToGeoJSON(
  matrix: Matrix,
  solarPanels: SolarPanelGrid[] = []
) {
  const fc: FeatureCollection<Polygon, Properties> = featureCollection([])
  const length = 0.05

  const coveredGrids: Record<number, number> = {}
  for (let i = 0; i < solarPanels.length; i++) {
    solarPanels[i].gridIndexes.forEach((gridIndex) => {
      coveredGrids[gridIndex[0] * matrix[0].length + gridIndex[1]] = i
    })
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const x: number = i * length
      const y: number = j * length
      let solarPanelIndex = null
      if (coveredGrids[i * matrix[0].length + j]) {
        solarPanelIndex = coveredGrids[i * matrix[0].length + j]
      }
      const grid: Feature<Polygon, Properties> = polygon(
        [
          [
            [x, y],
            [x + length, y],
            [x + length, y + length],
            [x, y + length],
            [x, y],
          ],
        ],
        {
          index: i * matrix[0].length + j,
          usable: matrix[i][j].usable,
          solar_panel_index: solarPanelIndex,
        }
      )
      fc.features.push(grid)
    }
  }

  return fc
}

export function matrixCentroidToGeoJSON(matrix: Matrix) {
  const fc: FeatureCollection<Point, Properties> = featureCollection([])
  let index = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      // const index = i * matrix[0].length + j
      const x = matrix[i][j].squareCenter.coordinates[0] as number
      const y = matrix[i][j].squareCenter.coordinates[1] as number
      const p: Feature<Point, Properties> = point([x, y], {
        index: index,
        usable: matrix[i][j].usable,
        i: i,
        j: j,
      })
      index = index + 1
      fc.features.push(p)
    }
  }
  return fc
}
