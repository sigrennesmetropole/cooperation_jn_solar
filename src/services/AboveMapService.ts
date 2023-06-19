import { useDistrictStore } from '@/stores/districtInformations'
import { CesiumMap } from '@vcmap/core'
import type { RennesApp } from './RennesApp'
import { getCartesianPositionFromFeature } from '@/helpers/featureHelper'
import type Feature from 'ol/Feature'
import { useInstallationsStore } from '@/stores/installations'

export function updatePointCoordinates(
  rennesApp: RennesApp,
  storeName: string
) {
  let store: any
  if (storeName === 'district') {
    store = useDistrictStore()
  } else if (storeName === 'installation') {
    store = useInstallationsStore()
  }
  if (store.pointFeature !== null) {
    const newCoordinates = getCartesianPositionFromFeature(
      rennesApp,
      store.pointFeature as Feature
    )
    if (newCoordinates !== undefined) {
      store.setNewCoordinates(newCoordinates.x, newCoordinates.y)
    }
  }
}

export function addGenericListenerForUpdatePositions(
  rennesApp: RennesApp,
  storeName: string
) {
  let store: any
  if (storeName === 'district') {
    store = useDistrictStore()
  } else if (storeName === 'installation') {
    store = useInstallationsStore()
  }
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
      store.previousViewPoint === null ||
      store.previousViewPoint === undefined
    ) {
      store.previousViewPoint = vp
    }
    for (const i in vp.cameraPosition) {
      if (vp.cameraPosition[i] !== store.previousViewPoint.cameraPosition[i]) {
        store.previousViewPoint = vp
        updatePointCoordinates(rennesApp, storeName)
        break
      }
    }
  })
}
