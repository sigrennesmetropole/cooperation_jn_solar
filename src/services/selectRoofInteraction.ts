import {
  AbstractInteraction,
  EventType,
  VcsEvent,
  VectorStyleItem,
  ModificationKeyType,
  CesiumTilesetLayer,
} from '@vcmap/core'
import type { InteractionEvent } from '@vcmap/core'
import { roofWfsService } from '@/services/roofWfsService'
import type { RennesApp } from './RennesApp'
import type { GeoJSONFeatureCollection } from 'ol/format/GeoJSON'
import router from '@/router'
import { useRoofsStore } from '@/stores/roof'

const highlightStyle = new VectorStyleItem({
  fill: { color: 'rgb(63,185,30)' },
  stroke: {
    color: '#ffffff',
    width: 2,
  },
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
    this.setActive()
  }

  _highlight(featureId: string) {
    this._highlighted = true
    this._selectableLayer.featureVisibility.highlight({
      [featureId]: highlightStyle,
    })
  }

  _unhighlight() {
    this._highlighted = false
    this._selectableLayer.featureVisibility.clearHighlighting()
  }

  _highglightRoofsOfTheBuilding(buildingRoofs: GeoJSONFeatureCollection) {
    this._selectableLayer.featureVisibility.clearHighlighting()
    buildingRoofs.features.forEach((f) => {
      this._highlight(f.properties?.surface_id)
    })
  }

  _goToNextStep(
    buildingRoofs: GeoJSONFeatureCollection,
    selectedBuildingId: string
  ) {
    const roofStore = useRoofsStore()
    roofStore.setBuildingRoofsFeatures(buildingRoofs, selectedBuildingId)
    // Must get the index from options
    roofStore.setSelectedRoofFeature(buildingRoofs.features[0])
    router.push({ name: 'roof-selected-information' })
  }

  async pipe(event: InteractionEvent) {
    const selectedBuilding = event.feature
    const selectedBuildingId =
      selectedBuilding?.getProperty('attributes')['BUILDINGID']

    if (selectedBuilding) {
      const buildingRoofs: GeoJSONFeatureCollection =
        await roofWfsService.fetchRoofs(selectedBuildingId)
      this._highglightRoofsOfTheBuilding(buildingRoofs)
      if (event.type & EventType.MOVE) {
        this._highlight(selectedBuilding.getId()?.toString()!)
      }
      if (event.type & EventType.CLICK) {
        this._featureClicked.raiseEvent(event.feature)
        this._hasFeature = selectedBuilding.getId()?.toString()!
      }
      this._goToNextStep(buildingRoofs, selectedBuildingId)
    } else if (event.type & EventType.CLICK) {
      this._featureClicked.raiseEvent()
      this._hasFeature = false
      this._unhighlight()
    } else if (this._highlighted) {
      this._unhighlight()
    }
    return event
  }
}

export default SelectRoofInteraction
