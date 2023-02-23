<script setup lang="ts">
import UiCharDonut from '@/components/ui/UiChartDonut.vue'
import { reactive } from 'vue'

const dataGraph = reactive({
  series: [35, 15, 5, 45],
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
  colors: ['#FEF08A', '#FEF9C3', '#CBD5E1', '#334155'],
  labelTotal: 'Surface favorable',
  labelTotalValue: '50%',
})
</script>

<template>
  <div class="mt-12 flex flex-row items-center justify-center">
    <UiCharDonut :dataGraph="dataGraph"></UiCharDonut>
  </div>
</template>
