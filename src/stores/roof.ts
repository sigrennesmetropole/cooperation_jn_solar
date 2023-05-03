import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type {
  GeoJSONFeature,
  GeoJSONFeatureCollection,
} from 'ol/format/GeoJSON'
import type { RoofSurfaceModel } from '@/model/roof.model'
import { featureCollection } from '@turf/turf'
import type { Matrix } from '@/services/roofInteractionHelper'

export const useRoofsStore = defineStore('roofs', () => {
  // id of the selected building
  const selectedBuildingId: Ref<string | null> = ref(null)

  // all the features from the roof: all the pans
  const roofsFeatures: Ref<GeoJSONFeatureCollection | null> = ref(null)

  // map model list of the roof for the accordions
  const roofSurfacesList: Ref<RoofSurfaceModel[] | null> = ref(null)

  // surface_id of the select roof pan, only highlight method need to use it over the getter on the geom/surface model
  const selectedRoofSurfaceId: Ref<string | null> = ref(null)

  const gridMatrix: Ref<Matrix | null> = ref(null)

  function setSelectedBuildingId(buildingId: string) {
    selectedBuildingId.value = buildingId
  }

  function setRoofsFeatures(features: GeoJSONFeatureCollection) {
    roofsFeatures.value = features
  }

  function setRoofSurfacesList(list: RoofSurfaceModel[]) {
    roofSurfacesList.value = list
  }

  function setSelectRoofSurfaceId(surfaceId: string) {
    selectedRoofSurfaceId.value = surfaceId
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

  function getRoofSurfaceModelOfSelectedPanRoof():
    | RoofSurfaceModel
    | undefined {
    return roofSurfacesList.value?.find((roofSuface) => {
      return roofSuface.surface_id == selectedRoofSurfaceId.value
    })
  }

  return {
    roofsFeatures,
    selectedRoofSurfaceId,
    roofSurfacesList,
    selectedBuildingId,
    gridMatrix,
    setRoofsFeatures,
    setSelectRoofSurfaceId,
    setSelectedBuildingId,
    setRoofSurfacesList,
    getFeaturesOfSelectedPanRoof,
    getRoofSurfaceModelOfSelectedPanRoof,
  }
})
