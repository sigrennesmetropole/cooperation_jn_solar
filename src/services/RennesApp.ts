import {
  VcsApp,
  Context,
  CesiumMap,
  Viewpoint,
  OpenlayersMap,
  SelectMultiFeatureInteraction,
  GeoJSONLayer,
  EventType,
} from '@vcmap/core'
import type Map from 'ol/Map.js'
import { useMapStore } from '@/stores/map'
import { RENNES_LAYER } from '@/stores/layers'

export class RennesApp extends VcsApp {
  readonly mapConfig
  constructor(mapConfig: object) {
    super()
    this.mapConfig = mapConfig
  }

  async initializeMap() {
    const mapStore = useMapStore()
    const context = new Context(this.mapConfig)
    await this.addContext(context)

    const cesiumMap = this.get3DMap()
    await cesiumMap?.initialize()
    if (cesiumMap) {
      cesiumMap.getScene().globe.maximumScreenSpaceError = 1
      const homeViewPoint = this.viewpoints.getByKey('home') as Viewpoint
      cesiumMap.getScene().screenSpaceCameraController.maximumZoomDistance =
        homeViewPoint.distance
      mapStore.isInitializeMap = true
    }
    this.maps.eventHandler.featureInteraction.setActive(EventType.CLICKMOVE)
    this.maps.eventHandler.addPersistentInteraction(
      new SelectMultiFeatureInteraction(
        this.layers.getByKey(RENNES_LAYER.roofSquaresArea) as GeoJSONLayer
      )
    )
  }

  get3DMap(): CesiumMap {
    return this.maps.getByKey('cesium') as CesiumMap
  }

  get2DMap(): OpenlayersMap {
    return this.maps.getByKey('ol') as OpenlayersMap
  }

  getOpenlayerMap(): Map {
    return this.get2DMap().olMap as Map
  }
}
