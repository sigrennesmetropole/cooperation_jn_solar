<script lang="ts" setup>
import { useSimulationStore } from '@/stores/simulations'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { resetStores } from '@/services/resetStores'
import { WINDOW_CONFIRM_MESSAGE } from '@/services/resetStores'

const props = defineProps<{
  isDisplayNextButton: Boolean
}>()

const router = useRouter()
const simulationStore = useSimulationStore()

function clickButtonCancel() {
  if (window.confirm(WINDOW_CONFIRM_MESSAGE)) {
    resetStores()
    router.push('/roof-selection')
  }
}
function clickButtonPrevious() {
  simulationStore.goToPreviousStep()
}
function clickButtonNext() {
  simulationStore.goToNextStep()
}

const textNextButton = computed(() => {
  if (simulationStore.isCurrentStepFinal()) {
    return 'Terminer'
  }
  if (simulationStore.currentStep == 2) {
    return 'Valider'
  }
  return 'Suivant'
})
</script>

<template>
  <div class="border-b border-neutral-200 -mx-6"></div>
  <div class="flex flex-row justify-between mb-4">
    <button
      v-if="simulationStore.currentStep == 1"
      @click="clickButtonCancel()"
      id="cancelButton"
      class="bg-white border border-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
    >
      <span class="font-dm-sans text-black text-base font-medium">
        Annuler
      </span>
    </button>
    <button
      v-else-if="simulationStore.currentStep != 1"
      @click="clickButtonPrevious()"
      id="previousButton"
      class="bg-white border border-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
    >
      <span class="font-dm-sans text-black text-base font-medium">
        Précédent
      </span>
    </button>
    <button
      v-if="props.isDisplayNextButton"
      @click="clickButtonNext()"
      id="nextButton"
      class="bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
    >
      <img
        class=""
        src="../../assets/icons/interface-arrows-button-right--arrow-right-keyboard.svg"
        alt=""
      />
      <span class="font-dm-sans text-white text-base font-medium">
        {{ textNextButton }}</span
      >
    </button>
  </div>
</template>
