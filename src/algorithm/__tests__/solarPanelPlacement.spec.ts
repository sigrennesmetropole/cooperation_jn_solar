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

    const matrix: Matrix = JSON.parse(fileContents)
    console.log(matrix.length)
    console.log(matrix[0].length)
    console.log(matrix[0][0])

    const result = solarPanelPlacementMatrix(matrix, true, 'normal-')

    console.log(result.orientation)
    // result.solarPanels.forEach((sp) => {
    //   console.log(sp)
    // })

    expect(result.orientation).equal('vertical')
    // expect(result.solarPanels.length).equal(127)
  })

  // Disabled because it does not have a valid data
  // test('test solar panel algorithm from simple matrix', () => {
  //   // Read GeoJSON file
  //   const fileContents = fs.readFileSync(
  //     path.join(__dirname, 'simple_roof_matrix.json'),
  //     {
  //       encoding: 'utf-8',
  //     }
  //   )

  //   const matrix: Matrix = JSON.parse(fileContents)
  //   // expect(matrix.length).equal(6)
  //   // expect(matrix[0].length).equal(8)
  //   // console.log(matrix[0][0])

  //   const result = solarPanelPlacementMatrix(matrix, true, 'simple-')

  //   expect(result.orientation).equal('vertical')
  //   // expect(result.solarPanels.length).equal(127)
  // })
})
