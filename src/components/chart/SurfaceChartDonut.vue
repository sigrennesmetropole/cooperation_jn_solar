<script setup lang="ts">
import UiChartDonut from '@/components/ui/UiChartDonut.vue'
import type { RoofSurface } from '@/model/roof.mode'
import { reactive } from 'vue'

const props = defineProps<{
  roofSurface: RoofSurface
}>()

function favorablePercentage() {
  return (
    ((props.roofSurface.level_1_area + props.roofSurface.level_2_area) /
      (props.roofSurface.level_1_area +
        props.roofSurface.level_2_area +
        props.roofSurface.level_3_area +
        props.roofSurface.level_4_area)) *
    100
  )
}

const dataGraph = reactive({
  series: [
    props.roofSurface.level_1_area,
    props.roofSurface.level_2_area,
    props.roofSurface.level_3_area,
    props.roofSurface.level_4_area,
  ],
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
  colors: ['#FEF08A', '#FEF9C3', '#CBD5E1', '#334155'],
  labelTotal: 'Surface favorable',
  labelTotalValue: `${favorablePercentage()} %`,
})
</script>

<template>
  <div class="mt-12 flex flex-row items-center justify-center">
    <UiChartDonut :dataGraph="dataGraph"></UiChartDonut>
  </div>
</template>
