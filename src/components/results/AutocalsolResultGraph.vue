<script setup lang="ts">
import { computed } from 'vue'
// import graphSunMoon from '@/assets/icons/graph-sun-moon2.svg'

const props = defineProps<{
  consoByHour: [string, number | string][]
  prodByHour: [string, number | string][]
}>()

/*
  Autocalsol data is sorted by hour. Except that the graph starts at 3am and not midnight
  So we have to sort the hours starting with 3am
*/
function sortedHoursWith3amStart(data: [string, number | string][]) {
  let after3hours = []
  let before3hours = []
  data.forEach((element) => {
    if (element[0] >= '03:00:00') {
      after3hours.push(element[1])
    } else {
      before3hours.push(element[1])
    }
  })
  return after3hours.concat(before3hours)
}

const STUFFING_PRECISION = 10
function stuffingData(data: number[]) {
  let newData = []
  for (let i = 0; i < data.length; i++) {
    newData.push(data[i])
    if (i + 1 === data.length) {
      break
    }

    let item1 = data[i]
    let item2 = data[i + 1]
    let step = 0
    let newItem = 0
    for (let y = 1; y < STUFFING_PRECISION; y++) {
      if (item1 < item2) {
        step = ((item2 - item1) / STUFFING_PRECISION) * y
        newItem = item1 + step
      } else {
        step = ((item1 - item2) / STUFFING_PRECISION) * y
        newItem = item1 - step
      }
      newData.push(newItem)
    }
  }
  return newData
}

function convertDataForGraph(data: [string, number | string][]) {
  let newData = sortedHoursWith3amStart(data)
  return stuffingData(newData)
}

const productionData = convertDataForGraph(props.prodByHour)
const consommationData = convertDataForGraph(props.consoByHour)

function calculateIntersectionData(productionData, consommationData) {
  return productionData.map((value, index) => {
    return Math.min(value, consommationData[index])
  })
}
const intersectionData = calculateIntersectionData(
  productionData,
  consommationData
)

function stuffingXAxis(xAxis: string[]) {
  let newXAxis = []
  for (let i = 0; i < xAxis.length; i++) {
    newXAxis.push(xAxis[i])
    if (i + 1 === xAxis.length) {
      break
    }

    for (let y = 1; y < STUFFING_PRECISION; y++) {
      newXAxis.push('') // Add empty strings for the stuffed values
    }
  }
  return newXAxis
}

function generateXAxis() {
  const baseHours = [
    '3h',
    '4h',
    '5h',
    '6h',
    '7h',
    '8h',
    '9h',
    '10h',
    '11h',
    '12h',
    '13h',
    '14h',
    '15h',
    '16h',
    '17h',
    '18h',
    '19h',
    '20h',
    '21h',
    '22h',
    '23h',
    '24h',
    '1h',
    '2h',
  ]

  return stuffingXAxis(baseHours)
}

const xAxis = generateXAxis()
xAxis.forEach((element, index) => {
  console.log(index, '=>', element)
})

function generateTickPositions() {
  const tickPositions = []
  xAxis.forEach((element, index) => {
    if (element.match('h')) {
      tickPositions.push(index)
    }
  })
  return tickPositions
}

const tickPositions = generateTickPositions()

const chartOptions = computed(() => {
  return {
    chart: {
      type: 'areaspline',
      width: 730, // set the width of the chart
      height: 400,
      marginLeft: 30,
    },
    title: {
      text: 'Production et consommation journalière',
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      categories: xAxis,
      labels: {
        useHTML: true,
        formatter: function () {
          if (this.value === '') return '' // Ignore empty hours

          return this.value === '12h' || this.value === '24h'
            ? `<strong style="font-size: 9px;">${this.value}</strong>`
            : `<span style="font-size: 9px;">${this.value}</span>`
        },
      },
      rotation: 0, // Rotate the title to be horizontal (optional)
      tickPositions: tickPositions,
      tickInterval: 1,
    },
    yAxis: {
      title: {
        text: 'Energie (kWh)',
        align: 'high', // Align the title to the top of the yAxis line
        rotation: 0, // Rotate the title to be horizontal (optional)
        offset: 0, // Set the offset to 0 so the title is displayed right at the top of the yAxis line
        y: -20, // Adjust the vertical position of the title (optional)
        x: 70, // Adjust the horizontal position of the title (optional)
        style: {
          fontSize: '11px', // Set the font size to 18px (or any other desired value)
          fontWeight: 'bold', // Set the font weight to bold (optional)
        },
      },
      labels: {
        enabled: false,
      },
      lineWidth: 1, // Set the width of the yAxis line (default is 1)
      gridLineWidth: 0,
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      areaspline: {
        marker: {
          enabled: false, // Disable data points
        },
        states: {
          inactive: {
            opacity: 1,
          },
          hover: {
            enabled: false,
          },
        },
      },
    },
    series: [
      {
        name: 'Consommation',
        data: consommationData,
        color: '#FFFFFF',
        lineColor: '#0F766E',
        fillOpacity: 0,
      },
      {
        name: 'Production',
        lineColor: '#F59E0B',
        color: '#4F46E5',
        data: productionData,
        fillOpacity: 0.7, // 50% opacity for production
      },
      {
        name: 'Intersection',
        data: intersectionData,
        color: '#10B981', // Choose the color you want for the intersection area
        lineWidth: 0,
        fillOpacity: 1,
      },
    ],
    credits: {
      enabled: false, // Disable the Highcharts.com credit link
    },
  }
})
</script>

<template>
  <div class="relative ml-1">
    <highcharts :options="chartOptions" ref="chart"></highcharts>

    <!-- <img
      class="absolute top-[175px] left-[60px] z-30 w-[700px]"
      :src="graphSunMoon"
      alt=""
    /> -->
  </div>

  <div class="flex flex-row font-dm-sans ml-10 my-4">
    <div class="font-normal text-sm border-amber-500 border-l-4 pl-3">
      Production
    </div>
    <div class="font-normal text-sm border-teal-700 border-l-4 pl-3 ml-6">
      Consommation
    </div>
    <div class="flex flex-row ml-6">
      <div class="bg-emerald-500 w-6 h-6 rounded-sm"></div>
      <span class="font-normal text-sm ml-3"> Autoconsommation </span>
    </div>
    <div class="flex flex-row ml-6">
      <div class="bg-indigo-600 w-6 h-6 rounded-sm"></div>
      <span class="font-normal text-sm ml-3"> Revente </span>
    </div>
  </div>
</template>
