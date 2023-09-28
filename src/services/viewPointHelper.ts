import { Viewpoint, type ViewpointOptions } from '@vcmap/core'
import { point } from '@turf/turf'
import type { BBox, Feature, Point, Properties } from '@turf/turf'
import type { GeoJSONFeature } from 'ol/format/GeoJSON'
import { oppositeAzimuth } from '@/model/roof.model'

const cameraDistance = 150

export function computeViewPoint(
  turfPoint: Feature<Point, Properties>,
  vpJson: ViewpointOptions
) {
  console.log('New vp computed')
  // By setting the groudposition without the z-value, the pitch, the camera
  // distance and set the camera position to undefined, the missing value
  // will be computed internally in the map core considering the terrain also
  // see: https://github.com/virtualcitySYSTEMS/map-core/blob/main/src/map/cesiumMap.ts#L816
  vpJson.groundPosition = [
    turfPoint.geometry.coordinates[0],
    turfPoint.geometry.coordinates[1],
  ]
  vpJson.pitch = -45
  vpJson.distance = cameraDistance
  vpJson.cameraPosition = undefined
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
  console.log('I come from extent')
  return computeViewPoint(turfPoint, vpJson)
}

export async function createViewpointFromRoofFeature(
  feature: GeoJSONFeature,
  bbox: BBox
) {
  // if (feature.bbox === undefined) return undefined
  let vp = Viewpoint.createViewpointFromExtent(bbox)
  const vpJson: ViewpointOptions = vp?.toJSON() as ViewpointOptions
  vpJson.pitch = -45
  if (feature.properties === null) return undefined
  vpJson.heading = oppositeAzimuth(feature.properties.azimuth)
  vpJson.distance = cameraDistance * (Math.SQRT2 / 2)
  vp = new Viewpoint(vpJson)
  return vp
}

export function cloneViewPointAndResetCameraPosition(
  viewpoint: Viewpoint,
  distance: number | null
): Viewpoint {
  const vpJson: ViewpointOptions = viewpoint?.toJSON() as ViewpointOptions
  // Set the camera position to null to force its position recalculation
  vpJson.cameraPosition = undefined
  vpJson.animate = true
  vpJson.duration = 0.5
  if (distance !== null) {
    vpJson.distance = distance
  }
  const newVp = new Viewpoint(vpJson)
  return newVp
}
