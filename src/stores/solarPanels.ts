import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { SolarPanelModel } from '@/model/solarPanel.model'

export const useSolarPanelStore = defineStore('solarPanel', () => {
  const currentNumberSolarPanel: Ref<number> = ref(0)
  const solarPanels: Ref<SolarPanelModel[]> = ref([])

  function resetPanelStore() {
    currentNumberSolarPanel.value = 0
    solarPanels.value = []
  }

  function maxNumberSolarPanel() {
    return solarPanels.value.length
  }

  return {
    maxNumberSolarPanel,
    currentNumberSolarPanel,
    resetPanelStore,
    solarPanels,
  }
})
