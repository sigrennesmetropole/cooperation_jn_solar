import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const RENNES_LAYER = {
  rennesOrtho: 'rennesOrtho',
  rennesBase: 'rennesBase',
  customLayerSearchAddress: 'customLayerSearchAddress',
  roofSquaresArea: 'roofSquaresArea',
}

export const RENNES_LAYERNAMES = [
  RENNES_LAYER.rennesOrtho,
  RENNES_LAYER.rennesBase,
  RENNES_LAYER.customLayerSearchAddress,
  RENNES_LAYER.roofSquaresArea,
] as const

export type RennesLayer = (typeof RENNES_LAYERNAMES)[number]
export type LayersVisibility = Record<RennesLayer, boolean>

export const useLayersStore = defineStore('layers', () => {
  const visibilities: Ref<LayersVisibility> = ref({
    rennesOrtho: true,
    rennesBase: false,
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
      [name]: true,
    }
  }

  return {
    visibilities,
    enableLayer,
    disableLayer,
  }
})
