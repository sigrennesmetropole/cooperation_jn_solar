import { assert, describe, expect, it } from 'vitest'
import * as fs from 'fs'
import * as path from 'path'
import { solarPanelPlacement } from '../solarPanelPlacement'
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
    solarPanelPlacement(grid, true)
    solarPanelPlacement(grid, false)

    assert.equal(Math.sqrt(4), 2)
  })

  it('bar', () => {
    expect(1 + 1).eq(2)
  })
})
