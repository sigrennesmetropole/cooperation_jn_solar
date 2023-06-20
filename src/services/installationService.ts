import pinInstallation from '@/assets/icons/pin-installation.svg'
import type { GeoJSONLayer } from '@vcmap/core'
import { Icon, Style } from 'ol/style'
import type { RennesApp } from './RennesApp'

export function installationStyle() {
  return new Style({
    image: new Icon({
      opacity: 1,
      src: pinInstallation,
      scale: 0.7,
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
