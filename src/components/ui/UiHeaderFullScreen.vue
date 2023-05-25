<script setup lang="ts">
import { useRouter } from 'vue-router'
import UiReturnButton from '@/components/ui/UiReturnButton.vue'
import iconChevronLeft from '@/assets/icons/chevron-left.svg'
import { useViewsStore } from '@/stores/views'
import { useSimulationStore } from '@/stores/simulations'
import { resetStores } from '@/services/resetStores'
import { UiButton } from '@sigrennesmetropole/cooperation_jn_common_ui'
import IconCrossClose from '@/assets/icons/components/IconCrossClose.vue'

const viewStore = useViewsStore()
const simulationStore = useSimulationStore()

const router = useRouter()

const props = defineProps<{
  urlBack: string
}>()

function restartSimulation() {
  simulationStore.restartEndSimulation = true
  router.push(props.urlBack)
}

function restartHome() {
  if (viewStore.currentView == 'legal-notice') {
    window.close()
  } else {
    resetStores()
    router.push('/home')
  }
}
</script>

<template>
  <div
    class="absolute top-0 left-0 flex flex-row items-center justify-between px-9 gap-12 w-[100%] h-[72px] bg-white shadow z-40"
  >
    <div class="flex flex-row items-center">
      <UiReturnButton
        class="shadow-md rounded-lg p-2 flex gap-2.5 shrink-0 grow-0"
        @click="restartSimulation()"
        v-if="viewStore.currentView != 'legal-notice'"
      >
        <img :src="iconChevronLeft" />
      </UiReturnButton>
      <slot name="title-img"></slot>
    </div>
    <slot name="mid-content"></slot>
    <div v-if="viewStore.currentView != 'end-simulation'">
      <UiButton
        class="ui-btn-secondary ui-btn-regular-size justify-center"
        :icon="IconCrossClose"
        @click="restartHome()"
      >
        <slot name="button-content"></slot>
      </UiButton>
    </div>
  </div>
</template>
