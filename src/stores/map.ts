import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Viewpoint } from '@vcmap/core'

export const useMapStore = defineStore('map', () => {
  const isInitializeMap: Ref<boolean> = ref(false)
  const viewPoint: Ref<Viewpoint | null> = ref(null)
  const viewPointPrevious: Ref<Viewpoint | null> = ref(null)
  const isLoadingMap: Ref<boolean> = ref(false)

  // Map state
  const activeMap: Ref<string> = ref('cesium') // Map: 'ol', 'cesium'

  function is3D() {
    return activeMap.value == 'cesium'
  }

  function activate2d() {
    activeMap.value = 'ol'
  }

  function activate3d() {
    activeMap.value = 'cesium'
  }

  return {
    isInitializeMap,
    viewPoint,
    activeMap,
    isLoadingMap,
    viewPointPrevious,
    is3D,
    activate2d,
    activate3d,
  }
})
