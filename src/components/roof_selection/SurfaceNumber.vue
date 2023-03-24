<script setup lang="ts">
import SurfaceChartDonut from '@/components/chart/SurfaceChartDonut.vue'
import UiSurfaceNumber from '@/components/roof_selection/UiSurfaceNumber.vue'
import type { RoofSurfaceModel } from '@/model/roof.model'
import { useRoofDataStore } from '@/stores/roofData'

const roofDataStore = useRoofDataStore()

const roofSurface: RoofSurfaceModel = {
  values: [45, 5, 15, 35],
  favorable: 44,
  total: 90,
  orientation: 'sud',
  inclinaison: 47,
}
</script>

<template>
  <div class="flex flex-row items-center justify-center">
    <SurfaceChartDonut :roofSurface="roofSurface"></SurfaceChartDonut>
  </div>
  <template v-if="buildingSurface !== null">
    <UiSurfaceNumber
      :totalArea="roofDataStore.buildingData.total"
      :favorableArea="roofDataStore.buildingData.favorable"
    ></UiSurfaceNumber>
  </template>
</template>
