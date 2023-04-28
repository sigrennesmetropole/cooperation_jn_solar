<script setup lang="ts">
import { computed } from 'vue'
import {
  convertDataForGraph,
  calculateIntersectionData,
  generateXAxis,
  generateTickPositions,
} from '@/services/graphService'

// import graphSunMoon from '@/assets/icons/graph-sun-moon2.svg'

const props = defineProps<{
  consoByHour: [string, number][]
  prodByHour: [string, number][]
}>()

const productionData = convertDataForGraph(props.prodByHour)
const consommationData = convertDataForGraph(props.consoByHour)
const intersectionData = calculateIntersectionData(
  productionData,
  consommationData
)
const xAxis = generateXAxis()
const tickPositions = generateTickPositions(xAxis)

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
          if (this.value === '') return ''

          return this.value === '12h' || this.value === '24h'
            ? `<strong style="font-size: 9px;">${this.value}</strong>`
            : `<span style="font-size: 9px;">${this.value}</span>`
        },
      },
      rotation: 0,
      tickPositions: tickPositions,
      tickInterval: 1,
    },
    yAxis: {
      title: {
        text: 'Energie (kWh)',
        align: 'high',
        rotation: 0,
        offset: 0,
        y: -20,
        x: 70,
        style: {
          fontSize: '11px',
          fontWeight: 'bold',
        },
      },
      labels: {
        enabled: false,
      },
      lineWidth: 1,
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
        fillOpacity: 0.7,
      },
      {
        name: 'Intersection',
        data: intersectionData,
        color: '#10B981',
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
