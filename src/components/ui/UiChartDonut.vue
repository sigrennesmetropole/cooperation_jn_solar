<script setup lang="ts">
import { ref, computed } from 'vue'

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
            label: '',
            formatter: function () {
              return ''
            },
            fontSize: '11px',
          },
        },
        size: '70%',
      },
    },
  },
})

const labelFormatted = computed(() => {
  /*
   Examples: 
    labelTotal = 'de surface favorable' => part1 = 'de surface' part2 = 'favorable'
    labelTotal = 'de surface favorable et plus' => part1 = 'de surface' part2 = 'favora...'
  */
  const lengthLabelTotal = props.dataGraph.labelTotal.length
  const part1 = props.dataGraph.labelTotal.slice(0, 10)
  let part2 = props.dataGraph.labelTotal.slice(11, lengthLabelTotal)
  if (part2.length > 9) {
    part2 = part2.slice(0, 6) + '...'
  }
  return part1 + '<br>' + part2
})
</script>

<template>
  <div class="relative">
    <div class="absolute top-10 left-20">
      <div class="text-center">
        <span class="font-dm-sans font-bold text-3xl">
          {{ props.dataGraph.labelTotalValue }}
        </span>
        <span class="font-dm-sans font-bold text-xl"> % </span>
      </div>
      <div class="text-center">
        <span
          class="font-dm-sans font-semibold text-sm"
          v-html="labelFormatted"
        >
        </span>
      </div>
    </div>
    <apexchart
      type="donut"
      width="228"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
