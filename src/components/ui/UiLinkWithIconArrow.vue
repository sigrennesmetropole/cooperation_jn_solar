<script setup lang="ts">
import expandIcon from '@/assets/icons/expand-small-bigger-retract-smaller-big.svg'

const props = defineProps<{
  link: string
  isPdf: boolean
}>()
</script>

<template>
  <div class="flex flex-row">
    <p class="underline decoration-1 font-medium text-base">
      <a :href="props.link" target="_blank"> Accéder à la page </a>
    </p>
    <a :href="props.link" target="_blank">
      <img
        :src="expandIcon"
        class="w-3.5 h-3.5 ml-2 mt-1"
        :class="props.isPdf ? 'mt-4' : 'mt-1'"
      />
    </a>
  </div>
</template>
