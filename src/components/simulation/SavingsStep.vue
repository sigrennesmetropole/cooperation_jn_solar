<script setup lang="ts">
import InformationsEnergySaving from '@/components/simulation/InformationsEnergySaving.vue'
import { useSimulationStore } from '@/stores/simulations'

const simulationStore = useSimulationStore()
</script>

<template>
  <InformationsEnergySaving
    v-if="simulationStore.currentSubStep == 1"
  ></InformationsEnergySaving>
</template>
