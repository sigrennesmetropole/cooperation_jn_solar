import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { BuildingSurfaceModel } from '@/model/roof.model'

export const useRoofDataStore = defineStore('roof-data', () => {
  const buildingData: Ref<BuildingSurfaceModel | null> = ref(null)

  function setBuildingData(data: BuildingSurfaceModel) {
    buildingData.value = data
  }

  return {
    buildingData,
    setBuildingData,
  }
})
