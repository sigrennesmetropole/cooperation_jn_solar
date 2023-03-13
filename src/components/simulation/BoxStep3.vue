<script lang="ts" setup>
import economies from '@/assets/icons/economies.svg'
import { useSimulationStore } from '@/stores/simulations'

const simulationStore = useSimulationStore()

function goToThirdStep() {
  simulationStore.setCurrentSubStep(1)
  simulationStore.goToNextStep()
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center border border-slate-600 rounded-lg px-6"
  >
    <span class="mt-6 font-dm-sans font-normal text-xs text-neutral-500">
      Étape 3
    </span>
    <img class="w-[88px] h-[88px] mt-2" :src="economies" alt="" />
    <span class="font-dm-sans font-bold text-lg text-center">
      Quelles économies d'énergie <br />
      grâce à cette installation ?
    </span>
    <button
      class="mt-4 mb-6 bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center w-full"
      @click="goToThirdStep()"
    >
      <span class="text-white text-base font-medium">
        Calculer mes économies d'énergie
      </span>
    </button>
  </div>
</template>
