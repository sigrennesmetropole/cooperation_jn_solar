import { describe, expect, test } from 'vitest'
import * as fs from 'fs'
import * as path from 'path'
import { solarPanelPlacement } from '@/algorithm/solarPanelPlacement'
import type { Matrix } from '@/services/roofInteractionHelper'
import { useConfigStore } from '@/stores/config'
import configuration from '@/tests/config/configuration_test.json'
import { createTestingPinia } from '@pinia/testing'

describe('solar panel placement', () => {
  let configStore

  beforeEach(async () => {
    const testingPinia = createTestingPinia()
    configStore = useConfigStore(testingPinia)
    configStore.config = configuration
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

  test('solar panel algorithm illustration', () => {
    // Read GeoJSON file
    const fileContents = fs.readFileSync(
      path.join(
        __dirname,
        'grid_samples',
        'illustration',
        'illustration.matrix'
      ),
      {
        encoding: 'utf-8',
      }
    )

    const matrix: Matrix = JSON.parse(fileContents)
    expect(matrix.length).greaterThan(0)

    const result = solarPanelPlacement(matrix, true, 'illustration-')
    expect(result.orientation).equal('vertical')
    expect(result.solarPanels.length).equal(3)
  })

  test('solar panel algorithm illustration test', () => {
    // Read GeoJSON file
    const fileContents = fs.readFileSync(
      path.join(__dirname, 'grid_samples', 'illustration', 'test.matrix'),
      {
        encoding: 'utf-8',
      }
    )

    const matrix: Matrix = JSON.parse(fileContents)
    expect(matrix.length).greaterThan(0)

    const result = solarPanelPlacement(matrix, true, 'test-')
    expect(result.orientation).equal('vertical')
    expect(result.solarPanels.length).equal(36)
  })

  test('solar panel algorithm big roof obstacles', () => {
    // Read GeoJSON file
    const fileContentsWithObstacles = fs.readFileSync(
      path.join(
        __dirname,
        'grid_samples',
        'big_roof_obstacles',
        'big_roof_obstacles.matrix'
      ),
      {
        encoding: 'utf-8',
      }
    )

    const fileContentsNoObstacles = fs.readFileSync(
      path.join(
        __dirname,
        'grid_samples',
        'big_roof_obstacles',
        'big_roof_no_obstacles.matrix'
      ),
      {
        encoding: 'utf-8',
      }
    )

    const matrixWithObstacles: Matrix = JSON.parse(fileContentsWithObstacles)
    expect(matrixWithObstacles.length).greaterThan(0)

    const matrixNoObstacles: Matrix = JSON.parse(fileContentsNoObstacles)
    expect(matrixNoObstacles.length).greaterThan(0)

    const startWithObstacles = performance.now()
    const resultWithObstacles = solarPanelPlacement(
      matrixWithObstacles,
      true,
      'big-roof-obstacles-'
    )
    const timeTakenWithObstacles = performance.now() - startWithObstacles

    const startNoObstacles = performance.now()
    const resultNoObstacles = solarPanelPlacement(
      matrixNoObstacles,
      true,
      'big-roof-no-obstacles-'
    )
    const timeTakenNoObstacles = performance.now() - startNoObstacles

    expect(timeTakenNoObstacles).lessThan(3000) // less than 3 seconds
    expect(timeTakenWithObstacles).lessThan(3000) // less than 3 seconds

    expect(timeTakenWithObstacles).approximately(timeTakenNoObstacles, 500)

    expect(resultWithObstacles.orientation).equal('vertical')
    expect(resultWithObstacles.solarPanels.length).equal(113)
    expect(resultNoObstacles.orientation).equal('vertical')
    expect(resultNoObstacles.solarPanels.length).equal(142)
  })
})
