import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export type typePanel = 'left' | 'right'

export const usePanelsStore = defineStore('panels', () => {
  const typePanelDisplay: Ref<typePanel> = ref('left')
  const isInformationPanelShown: Ref<boolean> = ref(true)

  function toggleInformationPanel() {
    isInformationPanelShown.value = !isInformationPanelShown.value
  }

  function setTypePanelDisplay(typePanel: typePanel) {
    typePanelDisplay.value = typePanel
  }

  return {
    isInformationPanelShown,
    toggleInformationPanel,
    typePanelDisplay,
    setTypePanelDisplay,
  }
})
