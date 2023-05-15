<script setup lang="ts">
import UiExplanationTooltip from '@/components/ui/UiExplanationTooltip.vue'
import { useSimulationStore } from '@/stores/simulations'
import { useViewsStore } from '@/stores/views'
import { viewList } from '@/model/views.model'
import { ref } from 'vue'

const simulationStore = useSimulationStore()
const viewStore = useViewsStore()

let isOpen = ref(true)
</script>
<template>
  <UiExplanationTooltip
    v-if="
      viewStore.currentView === viewList['step-sunshine'] &&
      simulationStore.currentStep === 1 &&
      simulationStore.currentSubStep === 1
    "
    title="Sélectionner un pan de toit"
    content="Cliquez sur le pan de toit à étudier"
    :display-close-button="false"
    class="absolute z-20 top-4 left-6"
  ></UiExplanationTooltip>
  <UiExplanationTooltip
    v-else-if="
      viewStore.currentView === viewList['step-sunshine'] &&
      simulationStore.currentStep === 2 &&
      simulationStore.currentSubStep === 1 &&
      isOpen
    "
    title="Définissez une zone d’obstacle"
    content="Cliquez + Glissez avec votre souris pour sélectionner plusieurs cases en un clic."
    :display-close-button="true"
    content-close-button="J'ai compris"
    class="absolute z-20 top-4 left-6"
    @close="isOpen = false"
  ></UiExplanationTooltip>
</template>
