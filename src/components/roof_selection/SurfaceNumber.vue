<script setup lang="ts">
import SurfaceChartDonut from '@/components/chart/SurfaceChartDonut.vue'
import UiSurfaceNumber from '@/components/roof_selection/UiSurfaceNumber.vue'
import { useRoofDataStore } from '@/stores/roofData'
const roofDataStore = useRoofDataStore()
</script>

<template>
  <template
    v-if="
      roofDataStore.selectedRoofData !== null &&
      roofDataStore.buildingData !== null
    "
  >
    <div class="flex flex-row items-center justify-center">
      <SurfaceChartDonut></SurfaceChartDonut>
    </div>
  </template>
  <template v-if="roofDataStore.buildingData !== null">
    <UiSurfaceNumber
      :totalArea="roofDataStore.buildingData.total"
      :favorableArea="roofDataStore.buildingData.favorable"
    ></UiSurfaceNumber>
  </template>
</template>
