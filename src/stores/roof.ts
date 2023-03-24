import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { GeoJSONFeatureCollection } from 'ol/format/GeoJSON'

export const useRoofsStore = defineStore('roofs', () => {
  const roofsFeatures: Ref<GeoJSONFeatureCollection | null> = ref(null)

  function setRoofsFeatures(features: GeoJSONFeatureCollection) {
    roofsFeatures.value = features
  }

  return {
    roofsFeatures,
    setRoofsFeatures,
  }
})
