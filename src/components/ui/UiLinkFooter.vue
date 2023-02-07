<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  textColor: {
    type: String,
    required: false,
    default: 'neutral-500',
  },
})

const textStyles = computed(() => {
  return [`text-${props.textColor}`, `before:bg-${props.textColor}`]
})
</script>

<template>
  <div class="relative w-fit">
    <a
      :href="props.url"
      class="font-normal text-xs before:w-0 before:h-px before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0"
      :class="textStyles"
      target="_blank"
    >
      <slot></slot>
    </a>
  </div>
</template>
