<script lang="ts" setup>
import { useSimulationStore } from '@/stores/simulations'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { WINDOW_CONFIRM_MESSAGE } from '@/services/resetStores'
import { UiButton } from '@sigrennesmetropole/cooperation_jn_common_ui'
import IconArrowRight from '@/assets/icons/components/IconArrowRight.vue'

const props = defineProps<{
  isDisplayNextButton: Boolean
}>()

const router = useRouter()
const simulationStore = useSimulationStore()

function clickButtonCancel() {
  if (window.confirm(WINDOW_CONFIRM_MESSAGE)) {
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
    <UiButton
      class="ui-btn-secondary shadow-md rounded-lg gap-3 px-4 py-3 h-12"
      v-if="simulationStore.currentStep == 1"
      @click="clickButtonCancel()"
      id="cancelButton"
    >
      <span class="font-dm-sans text-base font-medium"> Annuler </span>
    </UiButton>
    <UiButton
      class="ui-btn-secondary shadow-md gap-3 px-4 py-3 h-12"
      v-else-if="simulationStore.currentStep != 1"
      @click="clickButtonPrevious()"
      id="previousButton"
    >
      <span class="font-dm-sans text-base font-medium"> Précédent </span>
    </UiButton>
    <UiButton
      class="ui-btn-primary shadow-md gap-3 px-4 py-3 h-12"
      v-if="props.isDisplayNextButton"
      :icon="IconArrowRight"
      @click="clickButtonNext()"
    >
      <span class="font-dm-sans text-white text-base font-medium">
        {{ textNextButton }}
      </span>
    </UiButton>
  </div>
</template>
