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
import type { Grid } from '@/helpers/rectangleGrid'
import type olFeature from 'ol/Feature'
import type olGeometry from 'ol/geom/Geometry'

export const useRoofsStore = defineStore('roofs', () => {
  // id of the selected building
  const selectedBuildingId: Ref<string | null> = ref(null)

  // all the features from the roof: all the pans
  const roofsFeatures: Ref<GeoJSONFeatureCollection | null> = ref(null)

  // map model list of the roof for the accordions
  const roofSurfacesList: Ref<RoofSurfaceModel[] | null> = ref(null)

  // surface_id of the select roof pan, only highlight method need to use it over the getter on the geom/surface model
  const selectedRoofSurfaceId: Ref<string | null> = ref(null)

  const gridGeom: Ref<Grid | null> = ref(null)
  const previousGridGeom: Ref<Grid | null> = ref(null)

  const usableIds: Ref<Matrix | null> = ref(null)
  const previousUsableIds: Ref<Matrix | null> = ref(null)
  const ori: Ref<'horizontal' | 'vertical'> = ref('horizontal')

  const previouslySelected: Ref<olFeature<olGeometry>[] | null> = ref(null)

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

  function getPreviouslySelected() {
    return previouslySelected.value
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

  function saveCleanMatrix() {
    previousUsableIds.value = []
    for (let x = 0; x < usableIds.value!.length; x++) {
      // @ts-ignore
      previousUsableIds.value[x] = { ...usableIds.value![x] }
    }
  }

  function saveGridGeom() {
    previousGridGeom.value = { ...gridGeom.value! }
  }

  function restoreGridGeom() {
    gridGeom.value = { ...previousGridGeom.value! }
  }

  function restoreMatrixToClean() {
    if (usableIds.value && previousUsableIds.value) {
      usableIds.value = []
      for (let x = 0; x < previousUsableIds.value!.length; x++) {
        usableIds.value[x] = { ...previousUsableIds.value![x] }
      }
    }
  }
  function getRoofSurfaceModelOfSelectedPanRoof():
    | RoofSurfaceModel
    | undefined {
    return roofSurfacesList.value?.find((roofSuface) => {
      return roofSuface.surface_id == selectedRoofSurfaceId.value
    })
  }

  function resetRoofStore() {
    selectedBuildingId.value = null
    selectedRoofSurfaceId.value = null
    roofsFeatures.value = null
    roofSurfacesList.value = null
    resetGridAndMatrix()
  }

  function resetGridAndMatrix() {
    usableIds.value = null
    previouslySelected.value = null
    previousUsableIds.value = null
  }

  function getAnamorphosOfSelectedRoof() {
    const featureRoofSelected = roofsFeatures.value?.features?.find((f) => {
      return f.properties?.surface_id == selectedRoofSurfaceId.value
    })
    return featureRoofSelected?.properties?.anamorphos
  }

  return {
    roofsFeatures,
    selectedRoofSurfaceId,
    roofSurfacesList,
    selectedBuildingId,
    gridGeom,
    previousGridGeom,
    usableIds,
    ori,
    previouslySelected,
    setRoofsFeatures,
    setSelectRoofSurfaceId,
    setSelectedBuildingId,
    setRoofSurfacesList,
    getFeaturesOfSelectedPanRoof,
    getRoofSurfaceModelOfSelectedPanRoof,
    getPreviouslySelected,
    resetRoofStore,
    restoreMatrixToClean,
    saveCleanMatrix,
    saveGridGeom,
    restoreGridGeom,
    resetGridAndMatrix,
    getAnamorphosOfSelectedRoof,
  }
})
