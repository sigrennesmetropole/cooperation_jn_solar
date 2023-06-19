import type { RennesApp } from '@/services/RennesApp'
import {
  AbstractInteraction,
  EventType,
  GeoJSONLayer,
  ModificationKeyType,
  PointerKeyType,
  vcsLayerName,
} from '@vcmap/core'
import { RENNES_LAYER } from '@/stores/layers'

import type { InteractionEvent } from '@vcmap/core'
import { useInstallationsStore } from '@/stores/installations'
import Feature from 'ol/Feature'
import { Point } from 'ol/geom'
import {
  updatePointCoordinates,
  addGenericListenerForUpdatePositions,
} from '@/services/AboveMapService'
import { useDistrictStore } from '@/stores/districtInformations'

class SelectInstallationsInteraction extends AbstractInteraction {
  private _rennesApp: RennesApp
  installationLayer: GeoJSONLayer
  customInstallationLayer: GeoJSONLayer

  constructor(rennesApp: RennesApp) {
    super(EventType.CLICKMOVE, ModificationKeyType.NONE, PointerKeyType.ALL)
    this._rennesApp = rennesApp
    this.installationLayer = this._rennesApp.layers.getByKey(
      RENNES_LAYER.installations
    ) as GeoJSONLayer
    this.customInstallationLayer = this._rennesApp.layers.getByKey(
      RENNES_LAYER.customLayerInstallation
    ) as GeoJSONLayer
  }

  async _interactionInstallation(event: InteractionEvent) {
    const installationsStore = useInstallationsStore()
    if (event.type & EventType.CLICK) {
      if (event.position === undefined) {
        return
      }
      const new_feature = new Feature()
      const point = new Point(event.position)
      new_feature.setGeometry(point.transform('EPSG:3857', 'EPSG:4326'))
      this.customInstallationLayer.addFeatures([new_feature])
      installationsStore.setNewPointFeatureOnSelectedInstallation(new_feature)
    }
  }

  async pipe(event: InteractionEvent) {
    if (event.type & EventType.CLICK) {
      const installationsStore = useInstallationsStore()
      const districtStore = useDistrictStore()
      const selectedInstallation = event.feature
      if (event.feature?.[vcsLayerName] === RENNES_LAYER.installations) {
        if (selectedInstallation !== undefined) {
          const installationName = selectedInstallation?.getProperty('nom')
          const installationYear = selectedInstallation?.getProperty('an_mes')
          const installationProduction = selectedInstallation?.getProperty(
            'production_annuelle'
          )
          const installationHouse = selectedInstallation?.getProperty(
            'consommation_equivalente_foyer'
          )
          installationsStore.setInstallationInformations(
            installationName,
            installationYear,
            installationProduction,
            installationHouse
          )
          await this._interactionInstallation(event)
          updatePointCoordinates(this._rennesApp, 'installation')
          districtStore.resetDistrictStore()
          addGenericListenerForUpdatePositions(this._rennesApp, 'installation')
          event.stopPropagation = true
          installationsStore.setCanBeDisplayed(true)
        } else {
          installationsStore.resetInstallationStore()
          installationsStore.setCanBeDisplayed(false)
        }
      } else return event
    }
    return event
  }
}

export default SelectInstallationsInteraction
