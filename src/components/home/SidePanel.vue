<script lang="ts" setup>
import { usePanelsStore, PANEL_WIDTH } from '@/stores/panels'
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
  panelStore.toggleInformationPanel()
}

const leftAlignment = computed(() =>
  panelStore.isInformationPanelShown
    ? 'relative top-28'
    : 'absolute left-0 top-28'
)
</script>

<template>
  <div
    class="flex shadow-sm min-h-screen"
    v-show="!panelStore.isCompletelyHidden"
  >
    <div
      class="px-6 pt-8 pb-4 bg-white flex flex-col gap-8 max-h-screen overflow-y-auto scrollbar-hide"
      :class="`w-[${PANEL_WIDTH}]`"
      v-show="panelStore.isInformationPanelShown"
    >
      <slot></slot>
    </div>
    <div class="max-h-0 top-28" v-show="isRetractable">
      <UiPanelControlButton
        :anchor-position="'left'"
        :is-open="panelStore.isInformationPanelShown"
        @click="toggleInformationPanel"
        :class="leftAlignment"
      ></UiPanelControlButton>
    </div>
  </div>
</template>
