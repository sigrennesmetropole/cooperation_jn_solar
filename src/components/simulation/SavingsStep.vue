<script setup lang="ts">
import InformationsEnergySaving from '@/components/simulation/InformationsEnergySaving.vue'
import ElectricityConsumptionManual from '@/components/simulation/ElectricityConsumptionManual.vue'
import { useSimulationStore } from '@/stores/simulations'
import ElectricityConsumptionButton from '@/components/simulation/ElectricityConsumptionButton.vue'
import InformationsLinky from '@/components/simulation/InformationsLinky.vue'
import AllowAnnualConsumptionPopup from '@/components/simulation/AllowAnnualConsumptionPopup.vue'
import { ref } from 'vue'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import { getDefaultConsumption } from '@/stores/simulations'

const simulationStore = useSimulationStore()
const consumptionAndProductionStore = useConsumptionAndProductionStore()
const isDisplayPopup = ref(false)
const stepAnnualConsumption = ref('manual')

function showPopUpAllowAnnualConsumption(event: 'manual' | 'linky') {
  stepAnnualConsumption.value = event
  isDisplayPopup.value = true
}

function clickContinuePopup() {
  isDisplayPopup.value = false
  if (stepAnnualConsumption.value === 'manual') {
    simulationStore.currentSubStep = 3
  } else if (stepAnnualConsumption.value === 'linky') {
    simulationStore.currentSubStep = 4
  }
}

function goToEndSimulation() {
  isDisplayPopup.value = false
  consumptionAndProductionStore.setAnnualConsumption(getDefaultConsumption())
  simulationStore.goToFinalView()
}
</script>

<template>
  <template v-if="simulationStore.currentSubStep == 1">
    <InformationsEnergySaving></InformationsEnergySaving>
  </template>
  <template v-else-if="simulationStore.currentSubStep == 2">
    <ElectricityConsumptionButton
      @clickAnnualConsumption="showPopUpAllowAnnualConsumption($event)"
    />
    <AllowAnnualConsumptionPopup
      v-if="isDisplayPopup"
      @close="isDisplayPopup = false"
      @clickContinuePopup="clickContinuePopup"
      @goToEndSimulation="goToEndSimulation"
    />
  </template>
  <template v-else-if="simulationStore.currentSubStep == 3">
    <ElectricityConsumptionManual></ElectricityConsumptionManual>
  </template>
  <template v-else-if="simulationStore.currentSubStep === 4">
    <InformationsLinky></InformationsLinky>
  </template>
</template>
