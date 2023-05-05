<script setup lang="ts">
import UiLinkWithIconArrow from '@/components/ui/UiLinkWithIconArrow.vue'

const props = defineProps<{
  link: string
  isPdf: boolean
}>()
</script>

<template>
  <div class="flex flex-col gap-6 w-[100%] bg-slate-100 rounded-lg p-6 mx-auto">
    <slot name="img" class="rounded-xl"></slot>
    <slot name="title"></slot>
    <slot name="icon"></slot>
    <UiLinkWithIconArrow :link="props.link" :isPdf="props.isPdf" />
  </div>
</template>
