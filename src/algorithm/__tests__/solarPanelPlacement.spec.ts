import { assert, describe, expect, it } from 'vitest'
import {
  solarPanelPlacement,
  SolarPanelDimension,
  Grid,
} from '../solarPanelPlacement'

describe('solar panel placement', () => {
  it('test', () => {
    const grid: Grid = new Grid([
      [true, true, true, false],
      [true, true, true, true],
      [true, true, false, true],
    ])

    const solarPanelDimension: SolarPanelDimension = { length: 2, width: 2 }
    solarPanelPlacement(grid, solarPanelDimension)
    assert.equal(Math.sqrt(4), 2)
  })

  it('bar', () => {
    expect(1 + 1).eq(2)
  })

  it('snapshot', () => {
    expect({ foo: 'bar' }).toMatchSnapshot()
  })
})
