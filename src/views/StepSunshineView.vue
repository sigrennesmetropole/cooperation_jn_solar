<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { usePanelsStore } from '@/stores/panels'
import { viewList } from '@/model/views.model'
import { useViewsStore } from '@/stores/views'
import { useSimulationStore } from '@/stores/simulations'
import SimulationSteps from '@/components/simulation/SimulationSteps.vue'
import StepTitle from '@/components/simulation/StepTitle.vue'
import StepDescription from '@/components/simulation/StepDescription.vue'
import CustomContent from '@/components/simulation/CustomContent.vue'
import FooterButtons from '@/components/simulation/FooterButtons.vue'
import RoofAccordionOptions from '@/components/simulation/RoofAccordionOptions.vue'

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
  <CustomContent :step="simulationStore.currentStep"></CustomContent>
  <RoofAccordionOptions
    v-if="simulationStore.currentStep === 1"
  ></RoofAccordionOptions>
  <div class="h-full border-b border-neutral-200 -mx-6"></div>
  <FooterButtons></FooterButtons>
</template>
