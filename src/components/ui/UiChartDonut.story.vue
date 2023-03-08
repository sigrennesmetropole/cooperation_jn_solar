<script lang="ts" setup>
//@ts-nocheck

import UiChartDonut from '@/components/ui/UiChartDonut.vue'
import VueApexCharts from 'vue3-apexcharts'

/* eslint-disable */
function mySetupApp({ app, story, variant }) {
  app.use(VueApexCharts)
}
/* eslint-enable */
</script>

<template>
  <Story title="UiChartDonut" group="ui-base" :setup-app="mySetupApp">
    <template #default>
      <UiChartDonut
        :dataGraph="{
          series: [35, 15, 5, 45],
          labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
          colors: ['#FEF08A', '#FEF9C3', '#CBD5E1', '#334155'],
          labelTotal: 'Surface favorable',
          labelTotalValue: '50',
        }"
      >
      </UiChartDonut>
    </template>
  </Story>
</template>
