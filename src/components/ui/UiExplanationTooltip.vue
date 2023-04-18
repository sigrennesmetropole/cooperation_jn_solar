<script lang="ts" setup>
import { computed } from 'vue'

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
      <button
        @click="$emit('close')"
        class="bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center hover:bg-slate-800"
      >
        <span class="font-dm-sans text-white text-base font-bold">
          {{ contentCloseButton }}
        </span>
      </button>
    </div>
  </div>
</template>
