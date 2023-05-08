import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useSolarPanelStore = defineStore('solarPanel', () => {
  const maxNumberSolarPanel: Ref<number> = ref(0)
  const currentNumberSolarPanel: Ref<number> = ref(0)

  function resetPanelStore() {
    maxNumberSolarPanel.value = 0
    currentNumberSolarPanel.value = 0
  }

  return {
    maxNumberSolarPanel,
    currentNumberSolarPanel,
    resetPanelStore,
  }
})
