import {
  AbstractInteraction,
  EventType,
  VcsEvent,
  VectorStyleItem,
  ModificationKeyType,
  CesiumMap,
  vcsLayerName,
  CesiumTilesetLayer,
} from '@vcmap/core'
import type { InteractionEvent } from '@vcmap/core'
import { Cesium3DTileFeature } from '@vcmap/cesium'
import { roofWfsService } from '@/services/roofWfsService'
import { RENNES_LAYER } from '@/stores/layers'
import { RennesApp } from './RennesApp'

import type { GeoJSONFeatureCollection } from 'ol/format/GeoJSON'
const selectStyle = new VectorStyleItem({
  fill: { color: '#409D76' },
  stroke: {
    color: '#343434',
    width: 1,
  },
})

const highlightStyle = new VectorStyleItem({
  fill: { color: '#707070' },
  stroke: {
    color: '#343434',
    width: 1,
  },
})

class SelectInteraction extends AbstractInteraction {
  _featureClicked: VcsEvent<any> // eslint-disable-line
  _selectableLayers: CesiumTilesetLayer[]
  _highlighted: boolean
  _hasFeature: boolean

  _rennesApp: RennesApp

  constructor(layers: CesiumTilesetLayer[], rennesApp: RennesApp) {
    super(EventType.CLICK, ModificationKeyType.NONE)

    this._featureClicked = new VcsEvent()
    this._selectableLayers = layers
    this._highlighted = false
    this._hasFeature = false
    this._rennesApp = rennesApp
    this.setActive()
  }

  _highlight(feature) {
    this._highlighted = true
    this._selectableLayers.forEach((l) => {
      l.featureVisibility.clearHighlighting()
      const toHighlight = this._hasFeature
        ? { [this._hasFeature]: selectStyle }
        : {}
      toHighlight[feature.getId()] = highlightStyle
      l.featureVisibility.highlight(toHighlight)
    })
  }

  _unhighlight() {
    this._highlighted = false
    this._selectableLayers.forEach((l) => {
      l.featureVisibility.clearHighlighting()
      const toHighlight = this._hasFeature
        ? { [this._hasFeature]: selectStyle }
        : {}
      l.featureVisibility.highlight(toHighlight)
    })
  }

  _select() {
    this._selectableLayers.forEach((l) => {
      l.featureVisibility.clearHighlighting()
      l.featureVisibility.highlight({ [this._hasFeature]: selectStyle })
    })
  }

  _highglightRoofsOfTheBuilding(buildingRoofs: GeoJSONFeatureCollection) {
    //todo
    console.log('Buildingroofs', buildingRoofs)
  }

  _getClickedBuilding(
    pickedObjects: Cesium3DTileFeature[]
  ): Cesium3DTileFeature {
    let res
    pickedObjects.forEach((obj: Cesium3DTileFeature) => {
      if (obj[vcsLayerName] === RENNES_LAYER.building) {
        res = obj
      }
    })
    return res
  }
  async pipe(event: InteractionEvent) {
    const cesiumMap = event.map as CesiumMap
    const selectedBuilding = event.feature
    const scene = cesiumMap.getScene()
    const object = scene.drillPick(event.windowPosition, 100, 50, 50)

    //const nearestBuildingClick = this._getClickedBuilding(object)
    console.log('Selected building:', selectedBuilding)
    console.log('Click on area:', object)

    if (selectedBuilding) {
      const buildingRoofs: GeoJSONFeatureCollection =
        await roofWfsService.fetchRoofs(selectedBuilding.getProperty('id'))
      console.log('Roof of the building:', buildingRoofs)
      this._highglightRoofsOfTheBuilding(buildingRoofs)
      if (event.type & EventType.MOVE) {
        this._highlight(event.feature)
      }
      if (event.type & EventType.CLICK) {
        this._featureClicked.raiseEvent(event.feature)
        this._hasFeature = selectedBuilding.getId()
        this._select()
      }
    } else if (event.type & EventType.CLICK) {
      this._featureClicked.raiseEvent()
      this._hasFeature = false
      this._selectableLayers.forEach((l) => {
        l.featureVisibility.clearHighlighting()
      })
    } else if (this._highlighted) {
      this._unhighlight()
    }
    return event
  }
}

export default SelectInteraction
