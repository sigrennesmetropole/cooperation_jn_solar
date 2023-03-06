<script setup lang="ts">
import RoofAccordion from './RoofAccordion.vue'
import type { RoofSurface } from '@/model/roof.model'

const roofSurface1: RoofSurface = {
  values: [10, 20, 30, 40],
  favorable: 44,
  total: 90,
  orientation: 'Sud',
  incliniasion: 47.9,
}
const roofSurface2: RoofSurface = {
  values: [10, 20, 30, 40],
  favorable: 44,
  total: 90,
  orientation: 'Sud',
  incliniasion: 47.9,
}

const roofSurfaces = [roofSurface1, roofSurface2]
</script>

<template>
  <div class="flex flex-col p-0 gap-6">
    <template v-for="(roofSurface, index) in roofSurfaces" :key="index">
      <RoofAccordion
        :roof-surface="roofSurface"
        :label="'Pan de toit n°' + (index + 1)"
        :selected="index === 0"
      ></RoofAccordion>
    </template>
  </div>
</template>
