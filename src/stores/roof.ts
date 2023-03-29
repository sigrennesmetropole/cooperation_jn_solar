import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type {
  GeoJSONFeature,
  GeoJSONFeatureCollection,
} from 'ol/format/GeoJSON'

export const useRoofsStore = defineStore('roofs', () => {
  const selectedBuildingId: Ref<string | null> = ref(null)

  const buildingRoofsFeatures: Ref<GeoJSONFeatureCollection | null> = ref(null)
  const selectedRoofFeature: Ref<GeoJSONFeature | null> = ref(null)

  function setBuildingRoofsFeatures(
    features: GeoJSONFeatureCollection,
    buildingId: string
  ) {
    buildingRoofsFeatures.value = features
    selectedBuildingId.value = buildingId
  }

  function setSelectRoofFeature(feature: GeoJSONFeature) {
    selectedRoofFeature.value = feature
  }

  return {
    buildingRoofsFeatures,
    selectRoofFeature: selectedRoofFeature,
    setBuildingRoofsFeatures,
    setSelectRoofFeature,
  }
})
