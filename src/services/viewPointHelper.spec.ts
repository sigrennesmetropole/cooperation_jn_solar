import { describe, it, expect, beforeEach } from 'vitest'
import { point, distance } from '@turf/turf'
import { Viewpoint } from '@vcmap/core'
import {
  computeViewPoint,
  createCustomViewpointFromExtent,
  createNewViewpointFromAddress,
} from '@/services/viewPointHelper'

describe('ViewPointHelper', () => {
  beforeEach(() => {})
  describe('#computeViewPoint', () => {
    it('compute a correct ViewPoint with 45 degrees pitch ', () => {
      const turfPoint = point([0, 0])
      const res = computeViewPoint(turfPoint, { cameraPosition: [0, 0, 0] })
      const groundDistance = distance(
        point([res.cameraPosition[0], res.cameraPosition[1]]),
        [0, 0],
        { units: 'meters' }
      )
      // with a 45 degrees ptich, hypothenuse is side*sqrt(2)
      expect(groundDistance * Math.sqrt(2)).toBeCloseTo(150)
    })
  })
  describe('#createNewViewpointFromAddress', () => {
    it('compute a correct viewPoint from a point', () => {
      const res = createNewViewpointFromAddress(
        new Viewpoint({ cameraPosition: [0, 0, 0] }),
        [15, 15]
      )
      expect(res).toBeDefined()
      if (res) {
        const groundDistance = distance(
          point([res.cameraPosition[0], res.cameraPosition[1]]),
          [15, 15],
          { units: 'meters' }
        )
        // with a 45 degrees ptich, hypothenuse is side*sqrt(2)
        expect(groundDistance * Math.sqrt(2)).toBeCloseTo(150)
      }
    })
  })
  describe('#createCustomViewpointFromExtent', () => {
    it('compute a correct from an extent ', async () => {
      const x0 = 10,
        y0 = 5,
        x1 = 55,
        y1 = 75
      const res = await createCustomViewpointFromExtent([x0, y0, x1, y1])
      expect(res).toBeDefined()
      expect(res.cameraPosition[0]).toBeCloseTo((x1 + x0) / 2)
      expect(res.cameraPosition[1]).toBeCloseTo((y1 + y0) / 2)
      expect(res.cameraPosition[2]).toBe(150)
    })
  })
})
