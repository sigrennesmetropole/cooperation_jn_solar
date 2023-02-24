import { VcsApp, Context, CesiumMap, EventType } from '@vcmap/core'
import mapClickAndMoveInteraction from '@/interactions/clickAndMoveInteraction'

export class RennesApp extends VcsApp {
  readonly mapConfig
  constructor(mapConfig: object) {
    super()
    this.mapConfig = mapConfig
  }

  async initializeMap() {
    const context = new Context(this.mapConfig)
    await this.addContext(context)

    const cesiumMap = this.get3DMap()
    await cesiumMap?.initialize()
    if (cesiumMap && cesiumMap instanceof CesiumMap) {
      cesiumMap.getScene().globe.maximumScreenSpaceError = 1
    }

    this.maps.eventHandler.featureInteraction.setActive(EventType.CLICK)
    this.maps.eventHandler.addPersistentInteraction(
      new mapClickAndMoveInteraction(this)
    )
  }

  get3DMap(): CesiumMap {
    return this.maps.getByKey('cesium') as CesiumMap
  }
}
