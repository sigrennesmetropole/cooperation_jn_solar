import {
  AbstractInteraction,
  EventType,
  GeoJSONLayer,
  ModificationKeyType,
  vcsLayerName,
} from '@vcmap/core'
import type { InteractionEvent } from '@vcmap/core'
import type { RennesApp } from '../services/RennesApp'
import { apiEnedisDistrictService } from '@/services/api-enedis-district'
import { useDistrictStore } from '@/stores/districtInformations'
import { RENNES_LAYER } from '@/stores/layers'
import Feature from 'ol/Feature'
import { Point } from 'ol/geom'
import {
  addGenericListenerForUpdatePositions,
  updatePointCoordinates,
} from '../services/AboveMapService'
import { selectedDistrict } from '@/services/viewStyles'
import { useInstallationsStore } from '@/stores/installations'

class SelectDistrictInteraction extends AbstractInteraction {
  _rennesApp: RennesApp
  irisLayer: GeoJSONLayer
  customDistrictLayer: GeoJSONLayer
  currentIrisCode: string | null = null

  constructor(rennesApp: RennesApp) {
    super(EventType.CLICK, ModificationKeyType.NONE)
    this._rennesApp = rennesApp
    this.setActive(true)
    this.irisLayer = this._rennesApp.layers.getByKey(
      RENNES_LAYER.iris
    ) as GeoJSONLayer
    this.customDistrictLayer = this._rennesApp.layers.getByKey(
      RENNES_LAYER.customLayerDistrict
    ) as GeoJSONLayer
  }

  async getDistrictDatas(codeIris: number) {
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

  setActive(active?: boolean | number) {
    if (!active) {
      document.body.style.cursor = 'default'
      this._unhighlight()
      this.customDistrictLayer.removeAllFeatures()
    } else {
      document.body.style.cursor = 'pointer'
    }
    super.setActive(active)
  }

  _unhighlight() {
    this.irisLayer.featureVisibility.clearHighlighting()
  }

  _highlight(featureId: string | number) {
    this._unhighlight()
    this.irisLayer.featureVisibility.highlight({
      [featureId]: selectedDistrict,
    })
  }

  async _interactionDistrict(event: InteractionEvent) {
    const districtStore = useDistrictStore()
    if (event.type & EventType.CLICK) {
      if (event.position === undefined) {
        return
      }
      const new_feature = new Feature()
      const point = new Point(event.position)
      new_feature.setGeometry(point.transform('EPSG:3857', 'EPSG:4326'))
      this.customDistrictLayer.addFeatures([new_feature])
      districtStore.setNewPointFeatureOnSelectedDistrict(new_feature)
    }
  }

  async pipe(event: InteractionEvent) {
    const districtStore = useDistrictStore()
    const installationsStore = useInstallationsStore()
    const selectedDistrict = event.feature

    if (
      selectedDistrict === undefined ||
      selectedDistrict[vcsLayerName] !== this.irisLayer.name
    ) {
      districtStore.resetDistrictStore()
      this._unhighlight()
      return event
    }
    const irisCode = selectedDistrict?.getProperty('code_iris')
    if (irisCode !== this.currentIrisCode) {
      this.currentIrisCode = irisCode
      this._highlight(selectedDistrict.getId()!)
      await this._interactionDistrict(event)
      updatePointCoordinates(this._rennesApp, 'district')
      installationsStore.resetInstallationStore()
      await this.getDistrictDatas(irisCode)
      addGenericListenerForUpdatePositions(this._rennesApp, 'district')
      event.stopPropagation = true
    }
    return event
  }
}

export default SelectDistrictInteraction
