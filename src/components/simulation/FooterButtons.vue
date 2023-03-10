<script lang="ts" setup>
import { useSimulationStore } from '@/stores/simulations'
import { useRouter } from 'vue-router'
// import { UiIconButton } from '@sigrennesmetropole/cooperation_jn_common_ui'

const router = useRouter()
const simulationStore = useSimulationStore()

function clickButtonCancel() {
  router.push('/roof-selection')
}

function clickButtonNext() {
  simulationStore.goToNextStep()
}
</script>

<template>
  <div class="flex flex-row justify-between mb-4">
    <button
      @click="clickButtonCancel()"
      class="bg-white border border-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
    >
      <span class="text-black text-base font-medium">
        {{ simulationStore.currentStep == 1 ? 'Annuler' : 'Précédent' }}
      </span>
    </button>
    <!-- While waiting for the UiButton import from common-ui -->
    <!-- <UiButton
            class="ui-btn-regular-size ui-btn-secondary"
            :disabled="false"
            >
            {{ simulationStore.currentStep == 1 ? 'Annuler' : 'Précédent' }}
        </UiButton> -->
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
        {{ simulationStore.currentStep == 1 ? 'Suivant' : 'Valider' }}</span
      >
    </button>
    <!-- While waiting for the UiButton import from common-ui -->
    <!-- <UiButton
            class="ui-btn-regular-size ui-btn-primary"
            :disabled="false"
            >
            <img class="" src="../../assets/icons/interface-arrows-button-right--arrow-right-keyboard.svg" alt="" />
            {{ simulationStore.currentStep == 1 ? 'Suivant' : 'Valider' }} 
        </UiButton> -->
  </div>
</template>
