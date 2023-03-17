<script setup lang="ts">
import InformationsEnergySaving from '@/components/simulation/InformationsEnergySaving.vue'
import { useSimulationStore } from '@/stores/simulations'
import InformationsLinky from '@/components/simulation/InformationsLinky.vue'

const simulationStore = useSimulationStore()
</script>

<template>
  <template v-if="simulationStore.currentSubStep == 1">
    <InformationsEnergySaving></InformationsEnergySaving>
  </template>
  <template v-else-if="simulationStore.currentSubStep === 4">
    <InformationsLinky></InformationsLinky>
  </template>
</template>
