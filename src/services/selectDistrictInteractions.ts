import {
  AbstractInteraction,
  EventType,
  GeoJSONLayer,
  ModificationKeyType,
} from '@vcmap/core'
import type { InteractionEvent } from '@vcmap/core'
import type { RennesApp } from './RennesApp'
import { apiEnedisDistrictService } from '@/services/api-enedis-district'
import { useDistrictStore } from '@/stores/districtInformations'
import { updateDistrictStyle } from './viewStyles'
import { RENNES_LAYER } from '@/stores/layers'
import Feature from 'ol/Feature'
import { Point } from 'ol/geom'
import { updateDistrictPointCoordinates } from './AboveMapService'

class SelectDistrictInteraction extends AbstractInteraction {
  _rennesApp: RennesApp

  constructor(rennesApp: RennesApp) {
    super(EventType.CLICK, ModificationKeyType.NONE)

    this._rennesApp = rennesApp
  }

  async gettingDistrictDatas(codeIris: number) {
    const districtStore = useDistrictStore()
    const districtDatas = await apiEnedisDistrictService.getDistrictDatas(
      codeIris
    )
    districtStore.setDistrictInformations(
      codeIris,
      districtDatas.irisName,
      districtDatas.totalConsumption,
      districtDatas.totalProduction,
      districtDatas.totalPhotovoltaicSites
    )
  }

  async _interactionDistrict(event: InteractionEvent) {
    const districtStore = useDistrictStore()
    document.body.style.cursor = 'pointer'
    if (event.type & EventType.CLICK) {
      if (event.position === undefined) {
        return
      }
      const customLayer: GeoJSONLayer = this._rennesApp.layers.getByKey(
        RENNES_LAYER.customLayerDistrict
      ) as GeoJSONLayer
      await customLayer.fetchData()

      const new_feature = new Feature()
      const point = new Point(event.position)

      new_feature.setGeometry(point.transform('EPSG:3857', 'EPSG:4326'))

      customLayer.addFeatures([new_feature])

      districtStore.setNewPointFeatureOnSelectedDistrict(new_feature)
    }
  }

  async pipe(event: InteractionEvent) {
    const districtStore = useDistrictStore()
    const selectedDistrict = event.feature

    if (selectedDistrict === undefined) {
      return event
    }
    districtStore.setFeatureDistrict(selectedDistrict as Feature)

    const irisCode = selectedDistrict?.getProperty('code_iris')
    if (irisCode) {
      updateDistrictStyle(this._rennesApp, irisCode)
      await this._interactionDistrict(event)
      updateDistrictPointCoordinates(this._rennesApp)
      await this.gettingDistrictDatas(irisCode)
    }
    return event
  }
}

export default SelectDistrictInteraction
