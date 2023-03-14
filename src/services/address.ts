import { Viewpoint, type ViewpointOptions } from '@vcmap/core'
import type { RennesApp } from '@/services/RennesApp'
import { destination, point } from '@turf/turf'

export async function createNewViewpointFromAddress(
  rennesApp: RennesApp,
  position: number[]
) {
  const vp = await rennesApp.maps?.activeMap.getViewpoint()
  if (vp) {
    const vpJson: ViewpointOptions = vp?.toJSON() as ViewpointOptions
    const turfPoint = point([position[0], position[1]])
    const cameraDistance = 150
    const target = destination(turfPoint, cameraDistance, 180, {
      units: 'meters',
    })
    vpJson.cameraPosition = [
      target.geometry.coordinates[0],
      target.geometry.coordinates[1],
      cameraDistance,
    ]
    vpJson.pitch = -45
    const newVp = new Viewpoint(vpJson)
    rennesApp.maps?.activeMap.gotoViewpoint(newVp)
  }
}
