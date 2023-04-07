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
import { RENNES_LAYER } from '@/stores/layers'
import Feature from 'ol/Feature'
import { Point } from 'ol/geom'
import { updateDistrictPointCoordinates } from './AboveMapService'
import { Fill, Stroke, Style } from 'ol/style'

const selectedDistrict = new Style({
  fill: new Fill({
    color: 'rgba(0,0,0,0.4)',
  }),
  stroke: new Stroke({
    color: '#FFFFFF',
    width: 2,
  }),
})

///// The highlight function doesn't accept an array of styles /////

// export function districtLineStyle() {
//   const districtStyle: Style[] = []
//   const firstLine = new Style({
//     fill: new Fill({
//       color: 'rgba(0,0,0,0.4)',
//     }),
//     stroke: new Stroke({
//       color: '#FFFFFF',
//       width: 4,

//     }),
//     zIndex: 0,
//   })

//   const secondLine = new Style({
//     stroke: new Stroke({
//       color: '#000000',
//       width: 2,
//     }),
//     zIndex: 1,
//   })

//   districtStyle.push(firstLine)
//   districtStyle.push(secondLine)
//   return districtStyle
// }

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

  _unhighlight() {
    const irisLayer: GeoJSONLayer = this._rennesApp.layers.getByKey(
      RENNES_LAYER.iris
    ) as GeoJSONLayer
    irisLayer.featureVisibility.clearHighlighting()
  }

  _highlight(featureId: string | number) {
    const irisLayer: GeoJSONLayer = this._rennesApp.layers.getByKey(
      RENNES_LAYER.iris
    ) as GeoJSONLayer
    this._unhighlight()
    irisLayer.featureVisibility.highlight({
      [featureId]: selectedDistrict,
      // [featureId]: districtLineStyle()[0],
      // [featureId]: districtLineStyle()[1],
    })
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
      districtStore.resetDistrictStore()
      return event
    }
    districtStore.setFeatureDistrict(selectedDistrict as Feature)

    const irisCode = selectedDistrict?.getProperty('code_iris')
    if (irisCode) {
      this._highlight(selectedDistrict.getId()!)
      await this._interactionDistrict(event)
      updateDistrictPointCoordinates(this._rennesApp)
      await this.gettingDistrictDatas(irisCode)
    }
    return event
  }
}

export default SelectDistrictInteraction
