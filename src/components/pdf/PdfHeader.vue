<script setup lang="ts">
import PdfDivider from '@/components/pdf/PdfDivider.vue'

const props = defineProps<{
  numPage: number
}>()
</script>

<template>
  <div class="flex flex-col mt-[45px]">
    <PdfDivider />
    <span class="mt-5 font-bold text-2xl">
      <template v-if="[5, 6].includes(props.numPage)">
        Plus d’information pour concrétiser votre projet
      </template>
      <template v-else>
        Votre simulation d’installation photovoltaïque
      </template>
    </span>
  </div>
</template>
