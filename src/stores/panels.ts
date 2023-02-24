import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export type typePanel = 'left' | 'right'

export const usePanelsStore = defineStore('panels', () => {
  const typePanelDisplay: Ref<typePanel> = ref('left')
  const isInformationPanelLeftShown: Ref<boolean> = ref(true)

  function toggleInformationPanelLeft() {
    isInformationPanelLeftShown.value = !isInformationPanelLeftShown.value
  }

  function setTypePanelDisplay(typePanel: typePanel) {
    typePanelDisplay.value = typePanel
  }

  return {
    isInformationPanelLeftShown,
    toggleInformationPanelLeft,
    typePanelDisplay,
    setTypePanelDisplay,
  }
})
