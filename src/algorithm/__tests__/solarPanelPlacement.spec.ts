import { describe, expect, test } from 'vitest'
import * as fs from 'fs'
import * as path from 'path'
import {
  solarPanelPlacement as solarPanelPlacementMatrix,
  Matrix,
  rearrangeMatrix,
} from '../solarPanelPlacementMatrix'

describe('solar panel placement', () => {
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

  test('solar panel algorithm medium roof', () => {
    // Read GeoJSON file
    const fileContents = fs.readFileSync(
      path.join(__dirname, 'grid_samples', 'medium_roof', 'medium_roof.matrix'),
      {
        encoding: 'utf-8',
      }
    )

    const matrix: Matrix = JSON.parse(fileContents)
    expect(matrix.length).greaterThan(0)

    const result = solarPanelPlacementMatrix(matrix, true, 'medium-roof-')
    expect(result.orientation).equal('vertical')
    expect(result.solarPanels.length).equal(106)
  })

  test('solar panel algorithm big roof', () => {
    // Read GeoJSON file
    const fileContents = fs.readFileSync(
      path.join(__dirname, 'grid_samples', 'big_roof', 'big_roof.matrix'),
      {
        encoding: 'utf-8',
      }
    )

    const matrix: Matrix = JSON.parse(fileContents)
    expect(matrix.length).greaterThan(0)

    const result = solarPanelPlacementMatrix(matrix, true, 'big-roof-')
    expect(result.orientation).equal('vertical')
    expect(result.solarPanels.length).equal(157)
  })
})
