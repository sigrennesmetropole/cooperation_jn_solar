<script setup lang="ts">
import ExplanationSelectionObstacles from '@/components/simulation/ExplanationSelectionObstacles.vue'
import BoxStep from '@/components/simulation/BoxStep.vue'
import { useSimulationStore } from '@/stores/simulations'
import economies from '@/assets/icons/economies.svg'
import SimulationResult from '@/components/simulation/SimulationResult.vue'
import { useSolarPanelStore } from '@/stores/solarPanels'

const simulationStore = useSimulationStore()
const solarPanelStore = useSolarPanelStore()

function goToThirdStep() {
  simulationStore.goToNextStep()
}

const updateCurrentNumSolarPanel = (changes: number) => {
  solarPanelStore.currentNumberSolarPanel =
    solarPanelStore.currentNumberSolarPanel + changes
}
</script>

<template>
  <template v-if="simulationStore.currentSubStep == 1">
    <ExplanationSelectionObstacles></ExplanationSelectionObstacles>
  </template>
  <template v-else-if="simulationStore.currentSubStep == 2">
    <SimulationResult
      :max-num-solar-panel="solarPanelStore.maxNumberSolarPanel"
      :roof-surface="simulationStore.roofSurface"
      :current-num-solar-panel="solarPanelStore.currentNumberSolarPanel"
      @solarPanelChanges="updateCurrentNumSolarPanel"
    >
    </SimulationResult>

    <BoxStep
      v-if="simulationStore.currentSubStep == 2"
      @buttonBoxAction="goToThirdStep()"
    >
      <template v-slot:nameOfStep>
        <span class="mt-6 font-dm-sans font-normal text-xs text-neutral-500">
          Étape 3
        </span>
      </template>
      <template v-slot:image>
        <img class="w-[88px] h-[88px] mt-2" :src="economies" alt="" />
      </template>
      <template v-slot:text>
        <span class="font-dm-sans font-bold text-lg text-center">
          Quelles économies d'énergie <br />
          grâce à cette installation ?
        </span>
      </template>
      <template v-slot:buttonContent>
        <span class="font-dm-sans text-white text-base font-medium">
          Calculer mes économies d'énergie
        </span>
      </template>
    </BoxStep>
  </template>
</template>
