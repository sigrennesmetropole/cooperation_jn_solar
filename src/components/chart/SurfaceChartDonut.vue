<script setup lang="ts">
import UiChartDonut from '@/components/ui/UiChartDonut.vue'
import { reactive } from 'vue'
import { useRoofDataStore } from '@/stores/roofData'
const roofDataStore = useRoofDataStore()
function favorablePercentage() {
  const favorablePercentage =
    (roofDataStore.buildingData?.favorable! /
      roofDataStore.buildingData?.total!) *
    100
  return Math.round(favorablePercentage)
}
const dataGraph = reactive({
  colors: ['#334155', '#CBD5E1', '#FEF9C3', '#FEF08A'],
  labelTotal: 'de surface favorable',
})
</script>

<template>
  <div class="mt-12 flex flex-row items-center justify-center">
    <UiChartDonut
      :dataGraph="dataGraph"
      :labelTotalValue="favorablePercentage()"
      :series="roofDataStore.buildingData?.values ?? []"
    ></UiChartDonut>
  </div>
</template>
