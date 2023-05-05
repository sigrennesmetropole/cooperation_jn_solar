import { describe, expect, test } from 'vitest'
import * as fs from 'fs'
import * as path from 'path'
import {
  solarPanelPlacementAlgorithm,
  solarPanelPlacement,
  extractCentroids,
} from '../solarPanelPlacement'
import {
  solarPanelPlacement as solarPanelPlacementMatrix,
  Matrix,
  rearrangeMatrix,
} from '../solarPanelPlacementMatrix'
import type { FeatureCollection, Polygon, Properties } from '@turf/turf'

describe('solar panel placement', () => {
  test('test solar panel algorithm', () => {
    // Read GeoJSON file
    const fileContents = fs.readFileSync(
      path.join(__dirname, 'grids.geojson'),
      {
        encoding: 'utf-8',
      }
    )

    const grid: FeatureCollection<Polygon, Properties> =
      JSON.parse(fileContents)

    const horizontalSolarPanels = solarPanelPlacementAlgorithm(grid, true, true)
    expect(horizontalSolarPanels.features.length).greaterThanOrEqual(9)

    const verticalSolarPanels = solarPanelPlacementAlgorithm(grid, false, true)
    // In this test case, the vertical placement is not optimum, only 8
    expect(verticalSolarPanels.features.length).greaterThanOrEqual(8)

    const solarPanelsPlacement = solarPanelPlacement(grid)
    expect(solarPanelsPlacement.solarPanels.features.length).greaterThanOrEqual(
      9
    )
    expect(solarPanelsPlacement.orientation).equal('horizontal')

    const solarPanelCentroids = extractCentroids(
      solarPanelsPlacement.solarPanels,
      true
    )
    expect(solarPanelCentroids.features.length).equal(9)
  })

  test('test solar panel algorithm from matrix', () => {
    // Read GeoJSON file
    const fileContents = fs.readFileSync(
      path.join(__dirname, 'normal_roof_matrix.json'),
      {
        encoding: 'utf-8',
      }
    )

    let matrix: Matrix = JSON.parse(fileContents)
    // The test file is not properly arranged (row and column is switched)
    // We need to rearrange it
    matrix = rearrangeMatrix(matrix)

    console.log(matrix.length)
    console.log(matrix[0].length)
    console.log(matrix[0][0])

    const result = solarPanelPlacementMatrix(matrix, true, 'normal-')

    console.log(result.orientation)
    // result.solarPanels.forEach((sp) => {
    //   console.log(sp)
    // })

    expect(result.orientation).equal('horizontal')
    expect(result.solarPanels.length).equal(108)
  })

  test('solar panel algorithm small roof', () => {
    // Read GeoJSON file
    const fileContents = fs.readFileSync(
      path.join(__dirname, 'grid_samples', 'small_roof', 'small_roof.matrix'),
      {
        encoding: 'utf-8',
      }
    )

    const matrix: Matrix = JSON.parse(fileContents)
    expect(matrix.length).greaterThan(0)

    const result = solarPanelPlacementMatrix(matrix, true, 'small-roof-')
    expect(result.orientation).equal('vertical')
    expect(result.solarPanels.length).equal(3)
  })
})
