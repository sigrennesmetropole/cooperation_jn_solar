import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { RoofSurfaceModel, BuildingSurfaceModel } from '@/model/roof.model'

export const useRoofDataStore = defineStore('roof-data', () => {
  const buildingData: Ref<BuildingSurfaceModel | null> = ref(null)
  const roofsData: Ref<RoofSurfaceModel[] | null> = ref(null)

  function setBuildingData(data: BuildingSurfaceModel) {
    buildingData.value = data
  }

  function setRoofsData(data: RoofSurfaceModel[]) {
    roofsData.value = data
  }

  return {
    buildingData,
    roofsData,
    setBuildingData,
    setRoofsData,
  }
})
