<script setup lang="ts">
import InformationsEnergySaving from '@/components/simulation/InformationsEnergySaving.vue'
import ElectricityConsumptionManual from '@/components/simulation/ElectricityConsumptionManual.vue'
import { useSimulationStore } from '@/stores/simulations'
import ElectricityConsumptionButton from './ElectricityConsumptionButton.vue'
import InformationsLinky from '@/components/simulation/InformationsLinky.vue'

const simulationStore = useSimulationStore()
</script>

<template>
  <template v-if="simulationStore.currentSubStep == 1">
    <InformationsEnergySaving></InformationsEnergySaving>
  </template>
  <template v-else-if="simulationStore.currentSubStep == 2">
    <ElectricityConsumptionButton></ElectricityConsumptionButton>
  </template>
  <template v-else-if="simulationStore.currentSubStep == 3">
    <ElectricityConsumptionManual></ElectricityConsumptionManual>
  </template>
  <template v-else-if="simulationStore.currentSubStep === 4">
    <InformationsLinky></InformationsLinky>
  </template>
</template>
