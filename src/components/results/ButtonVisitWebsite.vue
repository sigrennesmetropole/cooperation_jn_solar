<script setup lang="ts">
import goToWhite from '@/assets/icons/icon-external-link-white-thin.svg'

const props = defineProps<{
  link: string
}>()
</script>

<template>
  <a
    :href="props.link"
    target="_blank"
    class="bg-black shadow-sm rounded-lg gap-3 px-4 py-3 w-fit flex flex-row items-center justify-center mt-4"
  >
    <img class="w-5 h-5" :src="goToWhite" alt="" />
    <span class="font-dm-sans text-white text-base font-bold">
      Visiter le site
    </span>
  </a>
</template>
