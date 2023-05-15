<script setup lang="ts">
import PdfDivider from '@/components/pdf/PdfDivider.vue'
import { UiRennesLogo } from '@sigrennesmetropole/cooperation_jn_common_ui'

const props = defineProps<{
  numPage: number
}>()
</script>
<template>
  <div class="flex flex-row mt-[45px]">
    <div class="flex flex-col">
      <PdfDivider />
      <div class="flex flex-row mt-5">
        <UiRennesLogo class="w-36 h-7 mt-1"></UiRennesLogo>
        <span class="font-normal text-xs ml-5">
          Visualisez les données thématiques
          <br />de notre territoire sur sa maquette 3D.
        </span>
      </div>
    </div>
    <div class="ml-auto mt-auto">
      <span class="font-bold text-xs"> {{ props.numPage }} / 6 </span>
    </div>
  </div>
</template>
