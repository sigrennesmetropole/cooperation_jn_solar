<script setup lang="ts">
import UiChartDonut from '@/components/ui/UiChartDonut.vue'
import type { RoofSurfaceModel } from '@/model/roof.model'
import { reactive } from 'vue'

const props = defineProps<{
  roofSurface: RoofSurfaceModel
}>()

function favorablePercentage() {
  const total = props.roofSurface.values.reduce(
    (partialSum, a) => partialSum + a,
    0
  )
  const favorable = props.roofSurface.values[0] + props.roofSurface.values[1]
  return (favorable / total) * 100
}

const dataGraph = reactive({
  series: props.roofSurface.values,
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
  colors: ['#334155', '#CBD5E1', '#FEF9C3', '#FEF08A'],
  labelTotal: 'de surface favorable',
  labelTotalValue: `${favorablePercentage()}`,
})
</script>

<template>
  <div class="mt-12 flex flex-row items-center justify-center">
    <UiChartDonut :dataGraph="dataGraph"></UiChartDonut>
  </div>
</template>
