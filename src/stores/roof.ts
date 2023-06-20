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
  const gridMatrix: Ref<Matrix | null> = ref(null)
  const previousGridMatrix: Ref<Matrix | null> = ref(null)

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
    previousGridMatrix.value = []
    for (let x = 0; x < gridMatrix.value!.length; x++) {
      previousGridMatrix.value[x] = []
      for (let y = 0; y < gridMatrix.value![x].length; y++) {
        previousGridMatrix.value[x][y] = { ...gridMatrix.value![x][y] }
      }
    }
  }

  function restoreMatrixToClean() {
    if (gridMatrix.value && previousGridMatrix.value) {
      for (let x = 0; x < previousGridMatrix.value!.length; x++) {
        for (let y = 0; y < previousGridMatrix.value![x].length; y++) {
          gridMatrix.value[x][y].usable = previousGridMatrix.value![x][y].usable
        }
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
    gridMatrix.value = null
    previouslySelected.value = null
    previousGridMatrix.value = null
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
    gridMatrix,
    previouslySelected,
    previousGridMatrix,
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
    resetGridAndMatrix,
    getAnamorphosOfSelectedRoof,
  }
})
