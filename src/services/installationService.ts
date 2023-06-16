import pinInstallation from '@/assets/icons/pin-installation.svg'
import { useInstallationsStore } from '@/stores/installations'
import type { GeoJSONLayer } from '@vcmap/core'
import { Icon, Style } from 'ol/style'
import type { RennesApp } from './RennesApp'
import { getCartesianPositionFromFeature } from '@/helpers/featureHelper'
import type Feature from 'ol/Feature'
import { CesiumMap } from '@vcmap/core'

export function installationStyle() {
  return new Style({
    image: new Icon({
      opacity: 1,
      src: pinInstallation,
      scale: 1,
    }),
  })
}

export async function applyInstallationStyle(rennesApp: RennesApp) {
  const installationLayer: GeoJSONLayer = await rennesApp.getLayerByKey(
    'installations'
  )
  await installationLayer.activate()
  if (installationLayer) {
    installationLayer.clearStyle()
    if (installationStyle()) {
      installationLayer.setStyle(installationStyle())
    }
  }
}

export function updateInstallationPointCoordinates(rennesApp: RennesApp) {
  const installationStore = useInstallationsStore()

  if (installationStore.installationPointFeature !== null) {
    const newCoordinates = getCartesianPositionFromFeature(
      rennesApp,
      installationStore.installationPointFeature as Feature
    )
    if (newCoordinates !== undefined) {
      installationStore.setNewCoordinates(newCoordinates.x, newCoordinates.y)
    }
  }
}

export function addGenericListenerForUpdatePositions(rennesApp: RennesApp) {
  const installationStore = useInstallationsStore()
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
      installationStore.previousViewPoint === null ||
      installationStore.previousViewPoint === undefined
    ) {
      installationStore.previousViewPoint = vp
    }
    for (const i in vp.cameraPosition) {
      if (
        vp.cameraPosition[i] !==
        installationStore.previousViewPoint.cameraPosition[i]
      ) {
        installationStore.previousViewPoint = vp
        updateInstallationPointCoordinates(rennesApp)
        break
      }
    }
  })
}
