<script setup lang="ts">
import SurfaceChartDonut from '@/components/chart/SurfaceChartDonut.vue'
import UiSurfaceNumber from '@/components/roof_selection/UiSurfaceNumber.vue'
import type { BuildingSurfaceModel } from '@/model/roof.model'

const props = defineProps<{
  buildingData: BuildingSurfaceModel
}>()
</script>

<template>
  <div class="flex flex-row items-center justify-center">
    <SurfaceChartDonut :buildingData="props.buildingData"></SurfaceChartDonut>
  </div>
  <UiSurfaceNumber
    :totalArea="buildingData.total"
    :favorableArea="buildingData.favorable"
  ></UiSurfaceNumber>
</template>
