<script setup lang="ts">
import ExplanationSelectionObstacles from '@/components/simulation/ExplanationSelectionObstacles.vue'
import BoxStep from '@/components/simulation/BoxStep.vue'
import { useSimulationStore } from '@/stores/simulations'
import economies from '@/assets/icons/economies.svg'
import SimulationResult from '@/components/simulation/SimulationResult.vue'

const simulationStore = useSimulationStore()

function goToThirdStep() {
  simulationStore.goToNextStep()
}
</script>

<template>
  <template v-if="simulationStore.currentSubStep == 1">
    <ExplanationSelectionObstacles></ExplanationSelectionObstacles>
  </template>
  <template v-else-if="simulationStore.currentSubStep == 2">
    <SimulationResult
      :max-num-solar-panel="simulationStore.maxNumberSolarPanel"
      :roof-surface="simulationStore.roofSurface"
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
        <span class="text-white text-base font-medium">
          Calculer mes économies d'énergie
        </span>
      </template>
    </BoxStep>
  </template>
</template>
