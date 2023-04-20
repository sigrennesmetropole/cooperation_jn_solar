<script setup lang="ts">
import rectangle from '@/assets/icons/rectangle.svg'
import expandArrow from '@/assets/icons/expand-small-bigger-retract-smaller-big.svg'
import { useSimulationStore, DEFAULT_CONSUMPTION } from '@/stores/simulations'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'

const simulationStore = useSimulationStore()
const consumptionAndProductionStore = useConsumptionAndProductionStore()

function skipStep() {
  consumptionAndProductionStore.setAnnualConsumption(DEFAULT_CONSUMPTION)
  simulationStore.goToFinalView()
}
</script>

<template>
  <div class="flex flex-col gap-2.5 py-6 font-dm-sans">
    <button
      class="bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
      @click="simulationStore.currentSubStep = 3"
      id="button-manual-input"
    >
      <span class="text-white text-base font-medium"
        >Saisir les informations de ma facture</span
      >
    </button>
    <div class="flex flex-row justify-between gap-[22px]">
      <img :src="rectangle" />
      <p class="text-sm font-dm-sans font-normal text-neutral-400 my-4">OU</p>
      <img :src="rectangle" />
    </div>
    <button
      class="border border-black rounded-lg gap-3 px-4 py-3 mb-6 items-center flex flex-row justify-center"
      @click="simulationStore.currentSubStep = 4"
      id="button-linky"
    >
      <img :src="expandArrow" class="h-5 w-5" />
      <span class="text-black text-base font-medium"
        >Connecter mon compteur Linky</span
      >
    </button>
    <p class="text-xs font-dm-sans font-normal text-neutral-600">
      Ma consommation n'est traitée que le temps de la simulation et n' est pas
      conservée ultérieurement. Je peux également obtenir une simulation
      partielle sans renseigner ma consommation.
      <span
        id="skipText"
        class="font-medium underline decoration-1 cursor-pointer"
        @click="skipStep()"
        >Passer cette étape</span
      >
    </p>
  </div>
</template>
