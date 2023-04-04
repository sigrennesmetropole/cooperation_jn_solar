import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type {
  GeoJSONFeature,
  GeoJSONFeatureCollection,
} from 'ol/format/GeoJSON'
import { mapRoofSurfaceModel } from '@/model/roof.model'

export const useRoofsStore = defineStore('roofs', () => {
  const selectedBuildingId: Ref<string | null> = ref(null)

  const roofsFeatures: Ref<GeoJSONFeatureCollection | null> = ref(null)
  const roofsFeaturesGroupBySurfaceId: Ref<GeoJSONFeatureCollection | null> =
    ref(null)
  const selectedRoofFeature: Ref<GeoJSONFeature | null> = ref(null)

  function setSelectedBuildingId(buildingId: string) {
    selectedBuildingId.value = buildingId
  }

  function setRoofsFeatures(features: GeoJSONFeatureCollection) {
    roofsFeatures.value = features
  }

  function setRoofsFeaturesGroupBySurfaceId(
    features: GeoJSONFeatureCollection
  ) {
    roofsFeaturesGroupBySurfaceId.value = features
  }

  function setSelectRoofFeature(feature: GeoJSONFeature) {
    selectedRoofFeature.value = feature
  }

  function setSelectRoofFeatureFromSurfaceId(surface_id: string) {
    roofsFeatures.value?.features.forEach((feature) => {
      const featureFormatted = mapRoofSurfaceModel(feature)
      if (featureFormatted.surface_id === surface_id) {
        setSelectRoofFeature(feature)
      }
    })
  }

  return {
    roofsFeatures,
    selectedRoofFeature,
    roofsFeaturesGroupBySurfaceId,
    setRoofsFeatures,
    setSelectRoofFeature,
    setSelectRoofFeatureFromSurfaceId,
    setSelectedBuildingId,
    setRoofsFeaturesGroupBySurfaceId,
  }
})
