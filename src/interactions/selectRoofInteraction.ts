import type { InteractionEvent } from '@vcmap/core'
import {
  AbstractInteraction,
  CesiumTilesetLayer,
  EventType,
  ModificationKeyType,
  Projection,
  VcsEvent,
  VectorStyleItem,
} from '@vcmap/core'
import { roofWfsService } from '@/services/roofWfsService'
import type { RennesApp } from '@/services/RennesApp'
import type { GeoJSONFeatureCollection } from 'ol/format/GeoJSON'
import router from '@/router'
import { useRoofsStore } from '@/stores/roof'
import { useAddressStore } from '@/stores/address'
import { apiAdresseDataGouvService } from '@/services/api-adresse-data-gouv'
import {
  isInteractionBuilding,
  isInteractionPanRoof,
} from '@/services/interactionUtils'

const highlightStyle = new VectorStyleItem({
  fill: { color: 'rgb(63,185,30)' },
})

class SelectRoofInteraction extends AbstractInteraction {
  _featureClicked: VcsEvent<any> // eslint-disable-line
  _selectableLayer: CesiumTilesetLayer
  _highlighted: boolean
  _hasFeature: boolean | string

  _rennesApp: RennesApp

  constructor(layer: CesiumTilesetLayer, rennesApp: RennesApp) {
    super(EventType.CLICK, ModificationKeyType.NONE)

    this._featureClicked = new VcsEvent()
    this._selectableLayer = layer
    this._highlighted = false
    this._hasFeature = false
    this._rennesApp = rennesApp
  }

  _highlight(featureId: string) {
    this._highlighted = true
    this._selectableLayer.featureVisibility.highlight({
      [featureId]: highlightStyle,
    })
  }

  unhighlight() {
    if (this._highlighted) {
      this._highlighted = false
      this._rennesApp.clearRoofsHighlight()
    }
  }

  _highglightRoofsOfTheBuilding(buildingRoofs: GeoJSONFeatureCollection) {
    this.unhighlight()
    buildingRoofs.features.forEach((f) => {
      this._highlight(f.properties?.surface_id)
    })
  }

  _goToNextStep(
    buildingRoofs: GeoJSONFeatureCollection,
    selectedBuildingId: string
  ) {
    const roofStore = useRoofsStore()
    roofStore.setSelectedBuildingId(selectedBuildingId)

    router.push({ name: 'roof-selected-information' })
  }

  async _setLatitudeAndLongitude(event: InteractionEvent) {
    const position = event.position
    if (position !== undefined) {
      const wgs84Position = Projection.mercatorToWgs84(position)
      const longitude = wgs84Position[0]
      const latitude = wgs84Position[1]
      if (latitude !== undefined && longitude !== undefined) {
        const addressStore = useAddressStore()
        addressStore.setLatitudeAndLongitude(latitude, longitude)

        await apiAdresseDataGouvService.fetchAddressesFromLatLon(
          latitude,
          longitude
        )
      }
    }
  }

  async pipe(event: InteractionEvent) {
    if (event.type == EventType.CLICK) {
      const selectedBuilding = event.feature
      if (!selectedBuilding) {
        return event
      }

      const selectedBuildingId =
        selectedBuilding?.getProperty('attributes')['BUILDINGID']

      if (isInteractionBuilding()) {
        const buildingRoofs: GeoJSONFeatureCollection =
          await roofWfsService.fetchRoofs(selectedBuildingId)
        this._highglightRoofsOfTheBuilding(buildingRoofs)
        await this._setLatitudeAndLongitude(event)
        this._goToNextStep(buildingRoofs, selectedBuildingId)
      } else if (isInteractionPanRoof()) {
        const roofStore = useRoofsStore()
        if (selectedBuildingId !== roofStore.selectedBuildingId) {
          return event
        }
        const idRoof = selectedBuilding.getProperty('id')
        if (!idRoof) {
          return event
        }
        let isRoofFeature = false
        roofStore.roofsFeatures?.features?.forEach((f) => {
          if (f.properties?.surface_id == idRoof) {
            isRoofFeature = true
          }
        })
        if (!isRoofFeature) {
          return event
        }
        roofStore.setSelectRoofSurfaceId(idRoof)
      }
    }
    return event
  }
}

export default SelectRoofInteraction
