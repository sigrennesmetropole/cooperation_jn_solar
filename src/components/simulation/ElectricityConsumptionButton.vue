<script setup lang="ts">
import rectangle from '@/assets/icons/rectangle.svg'
import expandArrow from '@/assets/icons/expand-small-bigger-retract-smaller-big.svg'
import { useSimulationStore, getDefaultConsumption } from '@/stores/simulations'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import { UiButton } from '@sigrennesmetropole/cooperation_jn_common_ui'

const simulationStore = useSimulationStore()
const consumptionAndProductionStore = useConsumptionAndProductionStore()

function skipStep() {
  consumptionAndProductionStore.setAnnualConsumption(getDefaultConsumption())
  simulationStore.goToFinalView()
}
</script>

<template>
  <div class="flex flex-col gap-2.5 py-6 font-dm-sans">
    <UiButton
      class="ui-btn-primary gap-3 px-4 py-3 justify-center"
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
      class="ui-btn-secondary mb-6 gap-3 px-4 py-3 justify-center flex flex-row"
      id="button-linky"
    >
      <div class="text-black text-base font-medium flex flex-row gap-3">
        <img :src="expandArrow" class="h-5 w-5" />
        Connecter mon compteur Linky
      </div>
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
