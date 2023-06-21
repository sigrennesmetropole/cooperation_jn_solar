import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const RENNES_LAYER = {
  rennesOrtho: 'rennesOrtho',
  rennesBase: 'rennesBase',
  customLayerSearchAddress: 'customLayerSearchAddress',
  roofSquaresArea: 'roofSquaresArea',
  roofShape: 'roofShape',
  solarPanel: 'solarPanel',
  roof3d: 'roof3d',
  iris: 'iris',
  customLayerDistrict: 'customLayerDistrict',
  installations: 'installations',
  customLayerInstallation: 'customLayerInstallation',
}

export const RENNES_LAYERNAMES = [
  RENNES_LAYER.rennesOrtho,
  RENNES_LAYER.rennesBase,
  RENNES_LAYER.customLayerSearchAddress,
  RENNES_LAYER.roofSquaresArea,
  RENNES_LAYER.roofShape,
  RENNES_LAYER.solarPanel,
  RENNES_LAYER.roof3d,
  RENNES_LAYER.iris,
  RENNES_LAYER.customLayerDistrict,
  RENNES_LAYER.installations,
  RENNES_LAYER.customLayerInstallation,
] as const

export type RennesLayer = (typeof RENNES_LAYERNAMES)[number]
export type LayersVisibility = Record<RennesLayer, boolean>

export const useLayersStore = defineStore('layers', () => {
  const visibilities: Ref<LayersVisibility> = ref({
    rennesOrtho: true,
    rennesBase: false,
    roofSquaresArea: false,
    solarPanel: false,
    roof3d: true,
    iris: false,
    customLayerDistrict: false,
    customLayerSearchAddress: true,
    installations: true,
    customLayerInstallation: false,
  })

  function enableLayer(name: RennesLayer) {
    visibilities.value = {
      ...visibilities.value,
      [name]: true,
    }
  }

  function disableLayer(name: RennesLayer) {
    visibilities.value = {
      ...visibilities.value,
      [name]: false,
    }
  }

  function setLayerVisibility(name: RennesLayer, visibility: boolean) {
    visibilities.value = {
      ...visibilities.value,
      [name]: visibility,
    }
  }

  return {
    visibilities,
    enableLayer,
    disableLayer,
    setLayerVisibility,
  }
})
