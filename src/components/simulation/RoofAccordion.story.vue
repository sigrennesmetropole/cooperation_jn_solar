<script lang="ts" setup>
import RoofAccordion from './RoofAccordion.vue'
import type { RoofSurface } from '@/model/roof.model'

const roofSurface: RoofSurface = {
  values: [10, 20, 30, 40],
  favorable: 44,
  total: 90,
  orientation: 'Sud',
  incliniasion: 47.9,
}
</script>

<template>
  <Story title="Roof Accordion" group="simulation-step">
    <template #default>
      <RoofAccordion
        :roof-surface="roofSurface"
        class="w-[468px]"
      ></RoofAccordion>
    </template>
  </Story>
</template>
