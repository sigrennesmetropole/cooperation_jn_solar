<script setup lang="ts">
import UiChartDonut from '@/components/ui/UiChartDonut.vue'
import { reactive } from 'vue'
import type { BuildingSurfaceModel } from '@/model/roof.model'

const props = defineProps<{
  buildingData: BuildingSurfaceModel
}>()

function favorablePercentage() {
  const favorablePercentage =
    (props.buildingData?.favorable! / props.buildingData?.total!) * 100
  return Math.round(favorablePercentage)
}

const dataGraph = reactive({
  colors: ['#1D4ED8', '#5EEAD4', '#FDE047', '#EA580C'],
  labelTotal: 'de surface favorable',
})
</script>

<template>
  <div class="mt-12 flex flex-row items-center justify-center">
    <UiChartDonut
      :dataGraph="dataGraph"
      :labelTotalValue="favorablePercentage()"
      :series="props.buildingData?.values ?? []"
    ></UiChartDonut>
  </div>
</template>
