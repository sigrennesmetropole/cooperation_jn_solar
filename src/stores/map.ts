import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useMapStore = defineStore('map', () => {
  const isInitializeMap: Ref<boolean> = ref(false)

  return {
    isInitializeMap,
  }
})
