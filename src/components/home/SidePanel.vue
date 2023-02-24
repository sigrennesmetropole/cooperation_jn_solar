<script lang="ts" setup>
import { usePanelsStore } from '@/stores/panels'
import UiPanelControlButton from '@/components/ui/UiPanelControlButton.vue'
import { computed } from 'vue'

const panelStore = usePanelsStore()

defineProps({
  isRetractable: {
    type: Boolean,
    default: true,
  },
})

function toggleInformationPanel() {
  panelStore.toggleInformationPanelLeft()
}

const leftAlignment = computed(() =>
  panelStore.isInformationPanelLeftShown
    ? 'relative top-28'
    : 'absolute left-0 top-28'
)
</script>

<template>
  <div class="flex shadow-sm min-h-screen">
    <div
      class="px-6 py-8 bg-white flex flex-col gap-8 w-[450px] max-h-screen overflow-y-auto scrollbar-hide"
      v-if="panelStore.isInformationPanelLeftShown"
    >
      <slot></slot>
    </div>
    <div class="max-h-0 top-28" v-show="isRetractable">
      <UiPanelControlButton
        :anchor-position="'left'"
        :is-open="panelStore.isInformationPanelLeftShown"
        @click="toggleInformationPanel"
        :class="leftAlignment"
      ></UiPanelControlButton>
    </div>
  </div>
</template>
