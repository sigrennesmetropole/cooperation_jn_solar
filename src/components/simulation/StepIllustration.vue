<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="flex flex-col items-center py-2 px-3 grow">
    <img :src="image" alt="" :class="selected ? '' : 'opacity-30'" />
    <p
      class="font-dm-sans font-medium text-xs"
      :class="selected ? '' : 'text-neutral-400'"
      id="step-title"
    >
      {{ text }}
    </p>
  </div>
</template>
