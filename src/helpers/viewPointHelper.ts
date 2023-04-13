import { Viewpoint, type ViewpointOptions } from '@vcmap/core'

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
