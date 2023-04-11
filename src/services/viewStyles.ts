import type { StyleFunction } from 'ol/style/Style'
import { Stroke, Fill, Style } from 'ol/style'
import type { FeatureLayer } from '@vcmap/core'
import type { RennesApp } from '@/services/RennesApp'
import { RENNES_LAYER } from '@/stores/layers'
import type { FeatureLike } from 'ol/Feature'

export function clearLayerAndApplyStyle(
  rennesApp: RennesApp,
  layerName: string,
  style: Style | StyleFunction | undefined
) {
  const layer = rennesApp.layers.getByKey(layerName) as FeatureLayer
  layer.clearStyle()
  if (style) {
    layer.setStyle(style)
  }
}

export const selectedDistrict = new Style({
  fill: new Fill({
    color: 'rgba(0,0,0,0.4)',
  }),
  stroke: new Stroke({
    color: '#000000',
    width: 4,
  }),
})

export const unSelectedDistrict = new Style({
  fill: new Fill({
    color: 'rgba(0,0,0,0.2)',
  }),
  stroke: new Stroke({
    color: '#FFFFFF',
    width: 1,
  }),
})

function irisStyleFonction(feature: FeatureLike, irisCode: number): Style[] {
  if (irisCode == feature.getProperties()['code_iris']) {
    return [selectedDistrict]
  } else {
    return [unSelectedDistrict]
  }
}

export async function updateDistrictStyle(
  rennesApp: RennesApp,
  irisCode: number
) {
  clearLayerAndApplyStyle(rennesApp, RENNES_LAYER.iris, (feature) =>
    irisStyleFonction(feature, irisCode)
  )
}
