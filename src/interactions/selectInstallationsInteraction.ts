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
import { Point } from 'ol/geom'
import {
  updatePointCoordinates,
  addGenericListenerForUpdatePositions,
} from '@/services/AboveMapService'
import { useDistrictStore } from '@/stores/districtInformations'
import { Feature } from 'ol'

class SelectInstallationsInteraction extends AbstractInteraction {
  private _rennesApp: RennesApp
  installationLayer: GeoJSONLayer
  customInstallationLayer: GeoJSONLayer

  constructor(rennesApp: RennesApp) {
    super(EventType.CLICKMOVE, ModificationKeyType.NONE, PointerKeyType.ALL)
    this._rennesApp = rennesApp
    this._rennesApp.maps.eventHandler.featureInteraction.setActive(
      EventType.CLICKMOVE
    )
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
    // @ts-ignore
    const featureElement = event.feature?.[vcsLayerName]
    const isInstallationLayer = featureElement === RENNES_LAYER.installations

    if (event.type & EventType.MOVE) {
      if (isInstallationLayer) {
        document.body.style.cursor = 'pointer'
      } else document.body.style.cursor = 'default'
    }
    if (event.type & EventType.CLICK) {
      const installationsStore = useInstallationsStore()
      const districtStore = useDistrictStore()
      const selectedInstallation = event.feature!
      if (!selectedInstallation || !(selectedInstallation instanceof Feature)) {
        return event
      }
      if (isInstallationLayer) {
        const installationName = selectedInstallation?.getProperties()['nom']
        const installationYear = selectedInstallation?.getProperties()['an_mes']
        const installationProduction =
          selectedInstallation?.getProperties()['production_annuelle']
        const installationHouse =
          selectedInstallation?.getProperties()[
            'consommation_equivalente_foyer'
          ]
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
    }
    return event
  }
}

export default SelectInstallationsInteraction
