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
  <div
    class="absolute right-0 bottom-0 bg-white w-full border-t border-neutral-200"
  >
    <div class="flex flex-row justify-between p-6">
      <UiButton
        class="ui-btn-secondary gap-3 px-4 py-3 h-12"
        v-if="simulationStore.currentStep == 1"
        @click="clickButtonCancel()"
        id="cancelButton"
      >
        <span class="font-dm-sans text-base font-medium"> Annuler </span>
      </UiButton>
      <UiButton
        class="ui-btn-secondary gap-3 px-4 py-3 h-12"
        v-else-if="simulationStore.currentStep != 1"
        @click="clickButtonPrevious()"
        id="previousButton"
      >
        <span class="font-dm-sans text-base font-medium"> Précédent </span>
      </UiButton>
      <UiButton
        class="ui-btn-primary gap-3 px-4 py-3 h-12"
        v-if="props.isDisplayNextButton"
        :icon="IconArrowRight"
        id="nextButton"
        @click="clickButtonNext()"
      >
        <span class="font-dm-sans text-white text-base font-medium">
          {{ textNextButton }}
        </span>
      </UiButton>
    </div>
  </div>
</template>
