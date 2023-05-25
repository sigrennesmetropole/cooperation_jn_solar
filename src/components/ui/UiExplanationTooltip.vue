<script lang="ts" setup>
import { computed } from 'vue'
import { UiButton } from '@sigrennesmetropole/cooperation_jn_common_ui'

const props = defineProps({
  title: String,
  content: String,
  displayCloseButton: Boolean,
  contentCloseButton: String,
})
const height = computed(() => {
  if (props.displayCloseButton) {
    return 'h-[196px]'
  } else {
    return 'h-[104px]'
  }
})
</script>

<template>
  <div class="bg-slate-50 shadow-lg rounded-lg w-[402px]" :class="height">
    <h4 class="mx-6 mt-6 mb-3 font-dm-sans font-bold text-lg text-black">
      {{ props.title }}
    </h4>
    <div class="mx-6 mb-6 font-dm-sans text-sm -tracking-[.01em] text-black">
      {{ props.content }}
    </div>
    <div v-if="props.displayCloseButton" class="mx-6 mb-6">
      <UiButton
        class="ui-btn-primary gap-3 px-4 py-3 shrink-0 grow-0 visible"
        @click="$emit('close')"
      >
        <span class="font-dm-sans text-white text-base font-bold">
          {{ contentCloseButton }}
        </span>
      </UiButton>
    </div>
  </div>
</template>
