import {
  VcsApp,
  VcsModule,
  CesiumMap,
  Viewpoint,
  OpenlayersMap,
  GeoJSONLayer,
  CesiumTilesetLayer,
  VectorStyleItem,
} from '@vcmap/core'
import type Map from 'ol/Map.js'
import { useMapStore } from '@/stores/map'
import type { RennesLayer } from '@/stores/layers'
import { RENNES_LAYER } from '@/stores/layers'
import { Cartographic } from '@vcmap-cesium/engine'
import type { Style } from 'ol/style'

const defaultHighlightStyle = new VectorStyleItem({
  fill: { color: 'rgb(61,222,93)' },
})

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
      cesiumMap.getScene()!.globe.maximumScreenSpaceError = 1
      const homeViewPoint = this.viewpoints.getByKey('rennes') as Viewpoint
      cesiumMap.getScene()!.screenSpaceCameraController.maximumZoomDistance =
        homeViewPoint.distance!
      mapStore.isInitializeMap = true
      mapStore.setViewpoint(homeViewPoint)
    }
  }

  getHomeViewpoint() {
    return this.viewpoints.getByKey('rennes') as Viewpoint
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

  clearRoofsHighlight() {
    const roofLayer: CesiumTilesetLayer = this.maps.layerCollection.getByKey(
      RENNES_LAYER.roof3d
    ) as CesiumTilesetLayer
    roofLayer.featureVisibility.clearHighlighting()
  }

  highlightByLayerNameAndFeatureId(
    layerName: string,
    featureId: string,
    highlightStyle?: VectorStyleItem | Style | null
  ) {
    const layer = this.maps.layerCollection.getByKey(layerName)! as
      | GeoJSONLayer
      | CesiumTilesetLayer
    this.highlightByLayerAndFeatureId(
      layer,
      featureId,
      highlightStyle ?? defaultHighlightStyle
    )
  }

  highlightByLayerAndFeatureId(
    layer: CesiumTilesetLayer | GeoJSONLayer,
    featureId: string,
    highlightStyle?: VectorStyleItem | Style
  ) {
    layer.featureVisibility.highlight({
      [featureId]: highlightStyle ?? defaultHighlightStyle,
    })
  }

  async getLayerByKey(key: RennesLayer) {
    const layer: GeoJSONLayer = this.layers.getByKey(key) as GeoJSONLayer
    if (layer) {
      await layer.fetchData()
    }

    return layer
  }

  async getHeight(x: number, y: number) {
    const cartographic = Cartographic.fromDegrees(x, y)
    const result = await this.get3DMap()
      .getScene()!
      .sampleHeightMostDetailed([cartographic])
    if (result.length === 0) {
      return 0
    }
    const height = result[0].height
    return height
  }
}
