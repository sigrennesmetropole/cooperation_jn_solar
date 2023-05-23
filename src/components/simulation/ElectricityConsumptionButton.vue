<script setup lang="ts">
import rectangle from '@/assets/icons/rectangle.svg'
import { useSimulationStore, DEFAULT_CONSUMPTION } from '@/stores/simulations'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import { UiButton } from '@sigrennesmetropole/cooperation_jn_common_ui'
import ExpandArrow from '@/assets/icons/components/ExpandArrow.vue'

const simulationStore = useSimulationStore()
const consumptionAndProductionStore = useConsumptionAndProductionStore()

function skipStep() {
  consumptionAndProductionStore.setAnnualConsumption(DEFAULT_CONSUMPTION)
  simulationStore.goToFinalView()
}
</script>

<template>
  <div class="flex flex-col gap-2.5 py-6 font-dm-sans">
    <UiButton
      class="ui-btn-primary shadow-md gap-3 px-4 py-3 shrink-0 grow-0 visible"
      @click="$emit('clickAnnualConsumption', 'manual')"
      id="button-manual-input"
    >
      <span class="text-white text-base font-medium">
        Saisir les informations de ma facture
      </span>
    </UiButton>
    <div class="flex flex-row justify-between gap-[22px]">
      <img :src="rectangle" />
      <p class="text-sm font-dm-sans font-normal text-neutral-400 my-4">OU</p>
      <img :src="rectangle" />
    </div>
    <UiButton
      class="ui-btn-secondary shadow-md gap-3 px-4 py-3 shrink-0 grow-0 visible"
      @click="$emit('clickAnnualConsumption', 'linky')"
      :icon="ExpandArrow"
      id="button-linky"
    >
      <span class="text-black text-base font-medium"
        >Connecter mon compteur Linky</span
      >
    </UiButton>
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
