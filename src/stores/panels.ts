import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export type typePanel = 'left' | 'right' | 'float-left'

export const PANEL_WIDTH = '450px' as const

export const usePanelsStore = defineStore('panels', () => {
  const typePanelDisplay: Ref<typePanel> = ref('left')
  const isInformationPanelShown: Ref<boolean> = ref(true)
  const isCompletelyHidden: Ref<boolean> = ref(false)

  function toggleInformationPanel() {
    isInformationPanelShown.value = !isInformationPanelShown.value
  }

  function setTypePanelDisplay(typePanel: typePanel) {
    typePanelDisplay.value = typePanel
  }

  function isRightPanel() {
    return typePanelDisplay.value === 'right'
  }

  function isLeftPanel() {
    return typePanelDisplay.value === 'left'
  }
  return {
    isInformationPanelShown,
    toggleInformationPanel,
    typePanelDisplay,
    setTypePanelDisplay,
    isRightPanel,
    isLeftPanel,
    isCompletelyHidden,
  }
})
