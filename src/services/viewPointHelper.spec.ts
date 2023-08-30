import { describe, it, expect, beforeEach } from 'vitest'
import { point } from '@turf/turf'
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

      expect(res.distance).toBeCloseTo(150)
      expect(res.cameraPosition).toBeNull()
      expect(res.groundPosition[0]).toBeCloseTo(0)
      expect(res.groundPosition[1]).toBeCloseTo(0)
      expect(res.groundPosition[2]).toBeUndefined()
      expect(res.pitch).toBeCloseTo(-45)
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
        expect(res.distance).toBeCloseTo(150)
        expect(res.cameraPosition).toBeNull()
        expect(res.groundPosition[0]).toBeCloseTo(15)
        expect(res.groundPosition[1]).toBeCloseTo(15)
        expect(res.groundPosition[2]).toBeUndefined()
        expect(res.pitch).toBeCloseTo(-45)
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
      expect(res.distance).toBe(150)
      expect(res.cameraPosition).toBeNull()
      expect(res.groundPosition[0]).toBeCloseTo(32.5)
      expect(res.groundPosition[1]).toBeCloseTo(40)
      expect(res.groundPosition[2]).toBeUndefined()
      expect(res.pitch).toBeCloseTo(-45)
    })
  })
})
