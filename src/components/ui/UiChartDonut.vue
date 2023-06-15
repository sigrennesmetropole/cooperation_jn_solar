<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{
  dataGraph: {
    colors: string[]
    labelTotal: string
  }
  labelTotalValue: number
  series: number[]
}>()

const chartOptions = ref({
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  tooltip: {
    enabled: false, // Disable tooltip on hover
  },
  colors: props.dataGraph.colors,
  states: {
    hover: {
      filter: {
        type: 'none',
        value: 0,
      },
    },
    active: {
      filter: {
        type: 'none',
        value: 0,
      },
    },
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
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
const styleInsideGraph = computed(() => {
  const total = props.labelTotalValue
  const areaToFill = 100 - total
  const areaToFillInDeg = areaToFill * 3.6
  let style = ` 
    border-radius: 50%;
    background: conic-gradient( 
      #F1F5F9 0deg ${areaToFillInDeg}deg,
      white ${areaToFillInDeg}deg 360deg
    );`
  return style
})
</script>

<template>
  <div class="relative">
    <div
      class="absolute z-5 top-[30px] left-[62px] w-[110px] h-[110px]"
      :style="styleInsideGraph"
    ></div>

    <div class="absolute top-10 left-20">
      <div class="text-center">
        <span class="font-dm-sans font-bold text-3xl">
          {{ props.labelTotalValue }}
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
      :series="props.series"
    ></apexchart>
  </div>
</template>
