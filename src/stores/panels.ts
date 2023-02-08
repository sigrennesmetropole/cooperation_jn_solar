import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const usePanelsStore = defineStore('panels', () => {
  const isInformationPanelShown: Ref<boolean> = ref(true)

  function toggleInformationPanel() {
    isInformationPanelShown.value = !isInformationPanelShown.value
  }

  return {
    isInformationPanelShown,
    toggleInformationPanel,
  }
})
