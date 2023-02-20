import { Viewpoint, type ViewpointOptions } from '@vcmap/core'
import type { RennesApp } from '@/services/RennesApp'

export async function createNewViewpointFromAddress(
  rennesApp: RennesApp,
  position: number[]
) {
  const vp = await rennesApp.maps?.activeMap.getViewpoint()
  if (vp) {
    const vpJson: ViewpointOptions = vp?.toJSON() as ViewpointOptions
    vpJson.cameraPosition = [position[0], position[1], 500]
    vpJson.pitch = -45
    const newVp = new Viewpoint(vpJson)

    rennesApp.maps?.activeMap.gotoViewpoint(newVp)
  }
}
