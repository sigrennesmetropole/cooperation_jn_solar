import type { InteractionEvent } from '@vcmap/core'
import {
  AbstractInteraction,
  CesiumTilesetLayer,
  EventType,
  ModificationKeyType,
  Projection,
  VcsEvent,
  vcsLayerName,
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
import { useMapStore } from '@/stores/map'
import { RENNES_LAYER } from '@/stores/layers'

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

  unhighlight() {
    if (this._highlighted) {
      this._highlighted = false
      this._rennesApp.clearRoofsHighlight()
    }
  }

  _highlightRoofsOfTheBuilding(buildingRoofs: GeoJSONFeatureCollection) {
    this.unhighlight()
    this._highlighted = true
    buildingRoofs.features.forEach((f) => {
      const featureId = `ID_${f.properties?.surface_id}`
      this._rennesApp.highlightByLayerAndFeatureId(
        this._selectableLayer,
        featureId
      )
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
      if (event.feature?.[vcsLayerName] === RENNES_LAYER.roof3d) {
        const selectedBuilding = event.feature
        if (!selectedBuilding) {
          return event
        }

        const selectedBuildingId =
          selectedBuilding?.getProperty('attributes')['emprise_id_rm']

        if (isInteractionBuilding()) {
          const mapStore = useMapStore()
          mapStore.isLoadingMap = true
          const buildingRoofs: GeoJSONFeatureCollection =
            await roofWfsService.fetchRoofs(selectedBuildingId)
          this._highlightRoofsOfTheBuilding(buildingRoofs)
          await this._setLatitudeAndLongitude(event)
          mapStore.isLoadingMap = false
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
      } else return event
    }
    return event
  }
}

export default SelectRoofInteraction
