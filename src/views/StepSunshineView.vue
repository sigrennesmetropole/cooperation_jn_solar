<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { usePanelsStore } from '@/stores/panels'
import { viewList } from '@/model/views.model'
import { useViewsStore } from '@/stores/views'
import { useSimulationStore } from '@/stores/simulations'
import SimulationSteps from '@/components/simulation/SimulationSteps.vue'
import StepTitle from '@/components/simulation/StepTitle.vue'
import StepDescription from '@/components/simulation/StepDescription.vue'
import ExplanationSelectionObstacles from '@/components/simulation/ExplanationSelectionObstacles.vue'
import FooterButtons from '@/components/simulation/FooterButtons.vue'
import RoofAccordionOptions from '@/components/simulation/RoofAccordionOptions.vue'
import InformationsEnergySaving from '@/components/simulation/InformationsEnergySaving.vue'

const panelsStore = usePanelsStore()
const viewStore = useViewsStore()
const simulationStore = useSimulationStore()

onBeforeMount(() => {
  viewStore.setCurrentView(viewList['step-sunshine'])
  panelsStore.setTypePanelDisplay('right')
})
</script>

<template>
  <SimulationSteps
    class="h-[76px]"
    :selected-step="simulationStore.currentStep"
  ></SimulationSteps>
  <StepTitle :step="simulationStore.currentStep"></StepTitle>
  <StepDescription
    :step="simulationStore.currentStep"
    :substep="simulationStore.currentSubStep"
  ></StepDescription>
  <RoofAccordionOptions
    v-if="simulationStore.currentStep === 1"
  ></RoofAccordionOptions>
  <ExplanationSelectionObstacles
    v-else-if="simulationStore.currentStep === 2"
    :step="simulationStore.currentStep"
  ></ExplanationSelectionObstacles>
  <InformationsEnergySaving
    v-else-if="simulationStore.currentStep === 3"
  ></InformationsEnergySaving>
  <div class="h-full border-b border-neutral-200 -mx-6"></div>
  <FooterButtons></FooterButtons>
</template>
