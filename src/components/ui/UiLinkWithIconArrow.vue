<script setup lang="ts">
import expandIcon from '@/assets/icons/expand-small-bigger-retract-smaller-big.svg'

const props = defineProps<{
  link: string
}>()

function goTo() {
  window.open(props.link, '_blank')
}
</script>

<template>
  <div
    class="flex flex-row cursor-pointer w-fit"
    tabindex="0"
    @keydown.enter="goTo()"
    @click="goTo()"
  >
    <p class="underline decoration-1 font-medium text-base">
      Accéder à la page
    </p>
    <img :src="expandIcon" class="w-3.5 h-3.5 ml-2 mt-1" />
  </div>
</template>
