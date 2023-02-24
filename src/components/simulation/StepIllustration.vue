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
})
</script>

<template>
  <div class="flex flex-col items-center py-2 px-3 grow">
    <img :src="image" alt="s" />
    <p class="font-dm-sans font-medium text-xs text-black">{{ text }}</p>
  </div>
</template>
