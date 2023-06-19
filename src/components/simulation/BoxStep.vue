<script lang="ts" setup>
import { UiButton } from '@sigrennesmetropole/cooperation_jn_common_ui'

const props = defineProps<{
  activeButton: boolean
}>()
</script>

<template>
  <div
    class="flex flex-col items-center justify-center border border-slate-600 rounded-lg px-6"
  >
    <slot name="nameOfStep"></slot>
    <slot name="image"></slot>
    <slot name="text"></slot>
    <UiButton
      class="mt-4 mb-6 ui-btn-primary gap-3 px-4 py-3 h-12 w-full"
      :disabled="!props.activeButton"
      @click="$emit('buttonBoxAction')"
    >
      <slot name="buttonContent"></slot>
    </UiButton>
  </div>
</template>
