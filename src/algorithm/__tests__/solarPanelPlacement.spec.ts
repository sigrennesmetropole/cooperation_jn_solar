import { assert, describe, expect, it } from 'vitest'
import * as fs from 'fs'
import * as path from 'path'
import {
  solarPanelPlacementAlgorithm,
  solarPanelPlacement,
} from '../solarPanelPlacement'
import type { FeatureCollection, Polygon, Properties } from '@turf/turf'

describe('solar panel placement', () => {
  it('test', () => {
    // Read GeoJSON file
    const fileContents = fs.readFileSync(
      path.join(__dirname, 'grids.geojson'),
      {
        encoding: 'utf-8',
      }
    )

    const grid: FeatureCollection<Polygon, Properties> =
      JSON.parse(fileContents)

    const horizontalSolarPanels = solarPanelPlacementAlgorithm(
      grid,
      true,
      false
    )
    expect(horizontalSolarPanels.features.length).greaterThanOrEqual(9)

    const verticalSolarPanels = solarPanelPlacementAlgorithm(grid, false, false)
    // In this test case, the vertical placement is not optimum, only 8
    expect(verticalSolarPanels.features.length).greaterThanOrEqual(8)

    const solarPanelsPlacement = solarPanelPlacement(grid)
    expect(solarPanelsPlacement.solarPanels.features.length).greaterThanOrEqual(
      9
    )
    expect(solarPanelsPlacement.orientation).equal('horizontal')

    assert.equal(Math.sqrt(4), 2)
  })

  it('bar', () => {
    expect(1 + 1).eq(2)
  })
})
