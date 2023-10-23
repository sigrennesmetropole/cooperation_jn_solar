import { describe, it, expect, beforeEach } from 'vitest'
import { bbox, point } from '@turf/turf'
import { Viewpoint } from '@vcmap/core'
import {
  computeViewPoint,
  createCustomViewpointFromExtent,
  createNewViewpointFromAddress,
  createViewpointFromRoofFeature,
} from '@/services/viewPointHelper'
import type { GeoJSONFeature } from 'ol/format/GeoJSON'

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
  describe('#createViewpointFromRoofFeature', () => {
    it('compute a correct from an extent ', async () => {
      const feature: GeoJSONFeature = {
        type: 'Feature',
        id: 'photovoltaïque_potentiel_classif_2021.1211602',
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [-1.652381, 48.093163],
              [-1.652381, 48.093163],
              [-1.652382, 48.093165],
              [-1.652382, 48.093195],
              [-1.652382, 48.093195],
              [-1.652371, 48.093196],
              [-1.652369, 48.093196],
              [-1.652367, 48.093196],
              [-1.652362, 48.093196],
              [-1.652362, 48.093195],
              [-1.652355, 48.093195],
              [-1.652343, 48.093196],
              [-1.652301, 48.093197],
              [-1.652297, 48.093197],
              [-1.652274, 48.093197],
              [-1.652274, 48.093197],
              [-1.652273, 48.093164],
              [-1.652298, 48.093164],
              [-1.652352, 48.093163],
              [-1.652366, 48.093162],
              [-1.652372, 48.093162],
              [-1.652372, 48.093163],
              [-1.652381, 48.093163],
            ],
          ],
        },
        properties: {
          uid: 1211602,
          buildingid: '35238_030674',
          surface_id: 354428,
          rang_1: 0.7820897,
          rang_2: 24.899971,
          rang_3: 36.992928,
          rang_4: 37.325012,
          azimuth: 182,
          slope: 22,
          pan_area: 24.055117,
          all_area: 102.121346,
          anamorphos: 100,
        },
        bbox: [-1.652382, 48.093162, -1.652273, 48.093197],
      }
      const res = await createViewpointFromRoofFeature(feature, bbox(feature))
      expect(res).toBeDefined()
      if (res) {
        expect(res.groundPosition[0]).toBeCloseTo(-1.652381)
        expect(res.groundPosition[1]).toBeCloseTo(48.093195)
        expect(res.cameraPosition).toBeNull()
        expect(res.groundPosition).toBeDefined()
        expect(res.pitch).toBeCloseTo(-45)
      }
    })
  })
})
