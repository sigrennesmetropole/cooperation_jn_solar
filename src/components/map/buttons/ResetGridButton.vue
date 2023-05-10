<script setup lang="ts">
import { inject } from 'vue'

import type { RennesApp } from '@/services/RennesApp'
import { PANEL_WIDTH } from '@/stores/panels'
import { useSimulationStore } from '@/stores/simulations'
import { clearSquareInteractionOn2dMap } from '@/services/roofInteractionHelper'
import iconResetGrid from '@/assets/icons/reset-grid.svg'

const rennesApp = inject('rennesApp') as RennesApp
const simulationStore = useSimulationStore()

const shouldDisplayResetGridButton = () => {
  return (
    simulationStore.currentStep === 2 && simulationStore.currentSubStep == 1
  )
}
</script>

<template>
  <button
    class="absolute left-1/3 margin-left bottom-10 rounded-lg w-36 ui-btn-regular-size ui-btn-floating font-normal"
    :style="`margin-right: ${PANEL_WIDTH};`"
    @click="clearSquareInteractionOn2dMap(rennesApp)"
    v-show="shouldDisplayResetGridButton()"
  >
    <img :src="iconResetGrid" class="m-auto w-4 h-4" />
    <div class="m-auto">Réinitialiser</div>
  </button>
</template>
