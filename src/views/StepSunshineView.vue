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

import SimulationResult from '@/components/simulation/SimulationResult.vue'
import SetUpStep from '@/components/simulation/SetUpStep.vue'
import SavingsStep from '@/components/simulation/SavingsStep.vue'
import FooterButtons from '@/components/simulation/FooterButtons.vue'
import InformationsLinky from '@/components/simulation/InformationsLinky.vue'

const panelsStore = usePanelsStore()
const viewStore = useViewsStore()
const simulationStore = useSimulationStore()

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

  <SetUpStep
    v-else-if="
      simulationStore.currentStep === 2 && simulationStore.currentSubStep === 1
    "
  ></SetUpStep>
  <SimulationResult
    v-else-if="
      simulationStore.currentStep === 2 && simulationStore.currentSubStep === 2
    "
    :max-num-solar-panel="simulationStore.maxNumberSolarPanel"
    :roof-surface="simulationStore.roofSurface"
  >
  </SimulationResult>
  <SavingsStep
    v-else-if="
      simulationStore.currentStep === 3 && simulationStore.currentSubStep === 1
    "
  ></SavingsStep>

  <InformationsLinky
    v-else-if="
      simulationStore.currentStep === 3 && simulationStore.currentSubStep === 4
    "
  ></InformationsLinky>

  <div class="h-full border-b border-neutral-200 -mx-6"></div>
  <FooterButtons
    v-if="
      simulationStore.currentSubStep != 2 && simulationStore.currentSubStep != 2
    "
  ></FooterButtons>
</template>
