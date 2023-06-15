import pinInstallation from '@/assets/icons/pin-installation.svg'
import type { GeoJSONLayer } from '@vcmap/core'
import { Icon, Style } from 'ol/style'
import type { RennesApp } from './RennesApp'

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
  console.log('applyInstallationStyle')
  const installationLayer: GeoJSONLayer = await rennesApp.getLayerByKey(
    'installations'
  )
  if (installationLayer) {
    console.log(installationLayer)
    installationLayer.clearStyle()
    if (installationStyle()) {
      console.log('installationLayer 3')
      installationLayer.setStyle(installationStyle())
    }
  }
}
