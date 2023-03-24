import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type {
  GeoJSONFeature,
  GeoJSONFeatureCollection,
} from 'ol/format/GeoJSON'

export const useRoofsStore = defineStore('roofs', () => {
  const buildingRoofsFeatures: Ref<GeoJSONFeatureCollection | null> = ref(null)
  const selectRoofFeature: Ref<GeoJSONFeature | null> = ref(null)

  function setBuildingRoofsFeatures(features: GeoJSONFeatureCollection) {
    buildingRoofsFeatures.value = features
  }

  function setSelectRoofFeature(features: GeoJSONFeatureCollection) {
    buildingRoofsFeatures.value = features
  }

  return {
    buildingRoofsFeatures,
    selectRoofFeature,
    setBuildingRoofsFeatures,
    setSelectRoofFeature,
  }
})
