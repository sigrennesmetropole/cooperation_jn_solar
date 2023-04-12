import { Viewpoint, type ViewpointOptions } from '@vcmap/core'
import { destination, point } from '@turf/turf'
import type { BBox, Feature, Point, Properties } from '@turf/turf'
import type { GeoJSONFeature } from 'ol/format/GeoJSON'

const cameraDistance = 150

function computeViewPoint(
  turfPoint: Feature<Point, Properties>,
  vpJson: ViewpointOptions
) {
  const target = destination(
    turfPoint,
    cameraDistance * (Math.SQRT2 / 2),
    180,
    {
      units: 'meters',
    }
  )
  vpJson.cameraPosition = [
    target.geometry.coordinates[0],
    target.geometry.coordinates[1],
    cameraDistance,
  ]
  vpJson.pitch = -45
  return new Viewpoint(vpJson)
}

export function createNewViewpointFromAddress(
  vp: Viewpoint,
  position: number[]
) {
  if (vp) {
    const vpJson: ViewpointOptions = vp?.toJSON() as ViewpointOptions
    const turfPoint = point([position[0], position[1]])
    return computeViewPoint(turfPoint, vpJson)
  }
}

export async function createCustomViewpointFromExtent(extent: BBox) {
  const vp = Viewpoint.createViewpointFromExtent(extent)
  const vpJson: ViewpointOptions = vp?.toJSON() as ViewpointOptions
  const turfPoint = point(vp.groundPosition)
  return computeViewPoint(turfPoint, vpJson)
}

export async function createViewpointFromRoofFeature(feature: GeoJSONFeature) {
  if (feature.bbox === undefined) return undefined
  let vp = Viewpoint.createViewpointFromExtent(feature.bbox)
  const vpJson: ViewpointOptions = vp?.toJSON() as ViewpointOptions
  vpJson.pitch = -45
  if (feature.properties === null) return undefined
  vpJson.heading = 360 - feature.properties.azimuth
  vpJson.distance = cameraDistance * (Math.SQRT2 / 2)
  vp = new Viewpoint(vpJson)
  return vp
}
