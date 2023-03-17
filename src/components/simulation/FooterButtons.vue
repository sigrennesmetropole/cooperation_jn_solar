<script lang="ts" setup>
import { useSimulationStore } from '@/stores/simulations'
import { useRouter } from 'vue-router'
const router = useRouter()
const simulationStore = useSimulationStore()

function clickButtonCancel() {
  router.push('/roof-selection')
}
function clickButtonPrevious() {
  simulationStore.goToPreviousStep()
}
function clickButtonNext() {
  simulationStore.goToNextStep()
}
</script>

<template>
  <div class="h-full border-b border-neutral-200 -mx-6"></div>
  <div class="flex flex-row justify-between mb-4">
    <button
      v-if="simulationStore.currentStep == 1"
      @click="clickButtonCancel()"
      class="bg-white border border-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
    >
      <span class="text-black text-base font-medium"> Annuler </span>
    </button>
    <button
      v-else-if="simulationStore.currentStep != 1"
      @click="clickButtonPrevious()"
      class="bg-white border border-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
    >
      <span class="text-black text-base font-medium"> Précédent </span>
    </button>
    <button
      @click="clickButtonNext()"
      class="bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
    >
      <img
        class=""
        src="../../assets/icons/interface-arrows-button-right--arrow-right-keyboard.svg"
        alt=""
      />
      <span class="text-white text-base font-medium">
        {{
          simulationStore.currentStep == 1
            ? 'Suivant'
            : simulationStore.currentStep == 3
            ? 'Continuer'
            : 'Valider'
        }}</span
      >
    </button>
  </div>
</template>
