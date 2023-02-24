<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  dataGraph: {
    series: number[]
    labels: string[]
    colors: string[]
    labelTotal: string
    labelTotalValue: string
  }
}>()

const series = ref(props.dataGraph.series)
const chartOptions = ref({
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  labels: props.dataGraph.labels,
  colors: props.dataGraph.colors,
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            show: true,
            showAlways: true,
            label: props.dataGraph.labelTotal,
            formatter: function () {
              return props.dataGraph.labelTotalValue
            },
            fontSize: '11px',
          },
        },
        size: '70%',
      },
    },
  },
})
</script>

<template>
  <apexchart
    type="donut"
    width="228"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>
