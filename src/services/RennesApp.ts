import {
  VcsApp,
  Context,
  CesiumMap,
  Viewpoint,
  OpenlayersMap,
  EventType,
} from '@vcmap/core'
import type Map from 'ol/Map.js'
import { useMapStore } from '@/stores/map'
import type { Layer } from 'ol/layer'
import SelectInteraction from '@/services/roofCesiumInteraction'
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

    const selectInteraction = new SelectInteraction(
      [this.maps.layerCollection.getByKey(RENNES_LAYER.building)],
      this
    )
    this.maps.eventHandler.addPersistentInteraction(selectInteraction)
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

  getRoofSquaresAreaLayer(): Layer {
    return this.getOpenlayerMap()
      .getAllLayers()
      .find((l) => l.getProperties().name === 'roofSquaresArea')!
  }
}
