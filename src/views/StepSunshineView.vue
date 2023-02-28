<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { usePanelsStore } from '@/stores/panels'
import { viewList } from '@/model/views.model'
import { useViewsStore } from '@/stores/views'
import SimulationSteps from '@/components/simulation/SimulationSteps.vue'
import { useSimulationStore } from '@/stores/simulations'
import TitleSimmulationStep from '@/components/simulation/TitleSimmulationStep.vue'

const panelsStore = usePanelsStore()
const viewStore = useViewsStore()
const simulationStore = useSimulationStore()

onBeforeMount(() => {
  viewStore.setCurrentView(viewList['step-sunshine'])
  panelsStore.setTypePanelDisplay('right')
})
</script>

<template>
  <div class="flex flex-col items-start p-0 gap-2.5 h-9"></div>
  <SimulationSteps
    class="h-[76px]"
    :selected-step="simulationStore.currentStep"
  ></SimulationSteps>
  <TitleSimmulationStep
    :step="simulationStore.currentStep"
  ></TitleSimmulationStep>
  <p>Text</p>
  <div>Collapsible</div>
</template>
