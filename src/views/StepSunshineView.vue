<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { usePanelsStore } from '@/stores/panels'
import { viewList } from '@/model/views.model'
import { useViewsStore } from '@/stores/views'
import { useSimulationStore } from '@/stores/simulations'
import LeaveButton from '@/components/simulation/LeaveButton.vue'
import SimulationSteps from '@/components/simulation/SimulationSteps.vue'
import StepTitle from '@/components/simulation/StepTitle.vue'
import StepDescription from '@/components/simulation/StepDescription.vue'
import RoofAccordionOptions from '@/components/simulation/RoofAccordionOptions.vue'
import SetUpStep from '@/components/simulation/SetUpStep.vue'
import SavingsStep from '@/components/simulation/SavingsStep.vue'
import FooterButtons from '@/components/simulation/FooterButtons.vue'

const panelsStore = usePanelsStore()
const viewStore = useViewsStore()
const simulationStore = useSimulationStore()

function displayFooter() {
  if (simulationStore.currentStep == 3 && simulationStore.currentSubStep == 4) {
    return false
  } else {
    return true
  }
}

onBeforeMount(() => {
  viewStore.setCurrentView(viewList['step-sunshine'])
  panelsStore.setTypePanelDisplay('right')
})
</script>

<template>
  <LeaveButton></LeaveButton>
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
  <!-- SetUpStep contain all the substep for step 2 -->
  <SetUpStep v-else-if="simulationStore.currentStep === 2"></SetUpStep>
  <!-- SavingsStep contain all the substep for step 3 -->
  <SavingsStep v-else-if="simulationStore.currentStep === 3"></SavingsStep>
  <div class="h-full"></div>
  <FooterButtons v-if="displayFooter()"></FooterButtons>
</template>
