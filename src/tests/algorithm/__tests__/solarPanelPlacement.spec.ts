import { describe, expect, test } from 'vitest'
import * as fs from 'fs'
import * as path from 'path'
import { solarPanelPlacement, Matrix } from '@/algorithm/solarPanelPlacement'

describe('solar panel placement', () => {
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

    const result = solarPanelPlacement(matrix, true, 'small-roof-')
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

    const result = solarPanelPlacement(matrix, true, 'medium-roof-')
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

    const result = solarPanelPlacement(matrix, true, 'big-roof-')
    expect(result.orientation).equal('vertical')
    expect(result.solarPanels.length).equal(157)
  })
})
