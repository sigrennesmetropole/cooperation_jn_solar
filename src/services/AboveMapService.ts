import { useDistrictStore } from '@/stores/districtInformations'
import { CesiumMap } from '@vcmap/core'
import type { RennesApp } from './RennesApp'
import { getCartesianPositionFromFeature } from '@/helpers/featureHelper'
import type Feature from 'ol/Feature'

export function updateDistrictPointCoordinates(rennesApp: RennesApp) {
  const districtStore = useDistrictStore()

  if (districtStore.districtPointFeature !== null) {
    const newCoordinates = getCartesianPositionFromFeature(
      rennesApp,
      districtStore.districtPointFeature as Feature
    )
    if (newCoordinates !== undefined) {
      districtStore.setNewCoordinates(newCoordinates.x, newCoordinates.y)
    }
  }
}

export function addGenericListenerForUpdatePositions(rennesApp: RennesApp) {
  const districtStore = useDistrictStore()
  const map = rennesApp.maps.activeMap
  if (!(map instanceof CesiumMap)) {
    return
  }
  map.getScene().postRender.addEventListener(() => {
    const vp = map.getViewpointSync()
    if (vp === null || vp === undefined) {
      return
    }
    if (
      districtStore.previousViewPoint === null ||
      districtStore.previousViewPoint === undefined
    ) {
      districtStore.previousViewPoint = vp
    }
    for (const i in vp.cameraPosition) {
      if (
        vp.cameraPosition[i] !==
        districtStore.previousViewPoint.cameraPosition[i]
      ) {
        districtStore.previousViewPoint = vp
        updateDistrictPointCoordinates(rennesApp)
        break
      }
    }
  })
}
