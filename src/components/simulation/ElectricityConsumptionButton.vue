<script setup lang="ts">
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
    <p class="text-xs font-dm-sans font-normal text-neutral-600 mt-6">
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
