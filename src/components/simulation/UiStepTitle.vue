<script setup lang="ts">
const props = defineProps({
  imageSource: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="flex flex-col items-center p-0 gap-1">
    <img :src="props.imageSource" class="h-[88px] w-[88px]" alt="" />
    <h1 class="font-dm-sans font-bold text-[30px] leading-9 text-center">
      {{ props.title }}
    </h1>
  </div>
</template>
