<script setup lang="ts">
import InformationsEnergySaving from '@/components/simulation/InformationsEnergySaving.vue'
import { useSimulationStore } from '@/stores/simulations'
import ElectricityConsumptionButton from './ElectricityConsumptionButton.vue'
import InformationsLinky from '@/components/simulation/InformationsLinky.vue'

const simulationStore = useSimulationStore()
</script>

<template>
  <InformationsEnergySaving
    v-if="simulationStore.currentSubStep == 1"
  ></InformationsEnergySaving>
  <ElectricityConsumptionButton
    v-if="simulationStore.currentSubStep == 2"
  ></ElectricityConsumptionButton>
  <InformationsLinky
    v-if="simulationStore.currentSubStep == 4"
  ></InformationsLinky>
</template>
