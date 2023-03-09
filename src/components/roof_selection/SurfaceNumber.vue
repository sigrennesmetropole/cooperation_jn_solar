<script setup lang="ts">
import SurfaceChartDonut from '@/components/chart/SurfaceChartDonut.vue'
import UiSurfaceNumber from '@/components/roof_selection/UiSurfaceNumber.vue'
import type { RoofSurfaceModel } from '@/model/roof.model'

const props = defineProps<{
  roofSurface: RoofSurfaceModel
}>()
</script>

<template>
  <div class="flex flex-row items-center justify-center">
    <SurfaceChartDonut :roofSurface="props.roofSurface"></SurfaceChartDonut>
  </div>
  <UiSurfaceNumber
    :totalArea="props.roofSurface.total"
    :favorableArea="props.roofSurface.favorable"
  ></UiSurfaceNumber>
</template>
