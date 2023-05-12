import {
  VcsApp,
  VcsModule,
  CesiumMap,
  Viewpoint,
  OpenlayersMap,
  GeoJSONLayer,
  CesiumTilesetLayer,
} from '@vcmap/core'
import type Map from 'ol/Map.js'
import { useMapStore } from '@/stores/map'
import type { Layer } from 'ol/layer'
import type { RennesLayer } from '@/stores/layers'
import { RENNES_LAYER } from '@/stores/layers'
import { Cartographic } from '@vcmap-cesium/engine'

export class RennesApp extends VcsApp {
  readonly mapConfig
  constructor(mapConfig: object) {
    super()
    this.mapConfig = mapConfig
  }

  async initializeMap() {
    const mapStore = useMapStore()
    const context = new VcsModule(this.mapConfig)
    await this.addModule(context)

    const cesiumMap = this.get3DMap()
    await cesiumMap?.initialize()
    if (cesiumMap) {
      cesiumMap.getScene().globe.maximumScreenSpaceError = 1
      const homeViewPoint = this.viewpoints.getByKey('rennes') as Viewpoint
      cesiumMap.getScene().screenSpaceCameraController.maximumZoomDistance =
        homeViewPoint.distance
      mapStore.isInitializeMap = true
      mapStore.viewPoint = homeViewPoint
    }
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

  getCurrentDistance() {
    return this.get3DMap().getViewpointSync()?.distance
  }

  getRoofSquaresAreaLayer(): Layer {
    return this.getOpenlayerMap()
      .getAllLayers()
      .find((l) => l.getProperties().name === 'roofSquaresArea')!
  }

  clearRoofsHighlight() {
    const roofLayer: CesiumTilesetLayer = this.maps.layerCollection.getByKey(
      RENNES_LAYER.roof3d
    )
    roofLayer.featureVisibility.clearHighlighting()
  }

  async getLayerByKey(key: RennesLayer) {
    const layer: GeoJSONLayer = this.layers.getByKey(key) as GeoJSONLayer
    await layer.fetchData()
    return layer
  }

  getHeight(x: number, y: number) {
    const cartographic = Cartographic.fromDegrees(x, y)
    const height = this.get3DMap().getScene().sampleHeight(cartographic)
    return height
  }

  // TODO: unused, maybe delete it ?
  async getPositionsWithHeight(positions: number[][]) {
    const positionsCartographic: Cartographic[] = []
    positions.forEach((p) => {
      const cartographic = Cartographic.fromDegrees(p[0], p[1])
      positionsCartographic.push(cartographic)
    })

    const positionsWithHeight = await this.get3DMap()
      .getScene()
      .sampleHeightMostDetailed(positionsCartographic)
    return positionsWithHeight
  }
}
