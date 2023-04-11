import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type {
  GeoJSONFeature,
  GeoJSONFeatureCollection,
} from 'ol/format/GeoJSON'
import { mapRoofSurfaceModel } from '@/model/roof.model'
import type { RoofSurfaceModel } from '@/model/roof.model'
import { featureCollection } from '@turf/turf'

export const useRoofsStore = defineStore('roofs', () => {
  const selectedBuildingId: Ref<string | null> = ref(null)

  const roofsFeatures: Ref<GeoJSONFeatureCollection | null> = ref(null)
  const roofSurfacesList: Ref<RoofSurfaceModel[] | null> = ref(null)
  const selectedRoofFeature: Ref<GeoJSONFeature | null> = ref(null)
  const selectedRoofSurfaceId: Ref<string | null> = ref(null)

  function setSelectedBuildingId(buildingId: string) {
    selectedBuildingId.value = buildingId
  }

  function setRoofsFeatures(features: GeoJSONFeatureCollection) {
    roofsFeatures.value = features
  }

  function setRoofSurfacesList(list: RoofSurfaceModel[]) {
    roofSurfacesList.value = list
  }

  function setSelectRoofFeature(feature: GeoJSONFeature) {
    selectedRoofFeature.value = feature
    selectedRoofSurfaceId.value = feature.properties?.surface_id
  }

  function setSelectRoofFeatureFromSurfaceId(surface_id: string) {
    roofsFeatures.value?.features.forEach((feature) => {
      const featureFormatted = mapRoofSurfaceModel(feature)
      if (featureFormatted.surface_id === surface_id) {
        selectedRoofSurfaceId.value = feature.properties?.surface_id
        setSelectRoofFeature(feature)
      }
    })
  }

  function getFeaturesOfSelectedPanRoof(): GeoJSONFeatureCollection {
    const features: GeoJSONFeature[] = []
    roofsFeatures.value?.features?.forEach((f) => {
      if (f.properties?.surface_id === selectedRoofSurfaceId.value) {
        features.push(f)
      }
    })
    return featureCollection(features)
  }

  return {
    roofsFeatures,
    selectedRoofFeature,
    selectedRoofSurfaceId,
    roofSurfacesList,
    setRoofsFeatures,
    setSelectRoofFeature,
    setSelectRoofFeatureFromSurfaceId,
    setSelectedBuildingId,
    setRoofSurfacesList,
    getFeaturesOfSelectedPanRoof,
  }
})
