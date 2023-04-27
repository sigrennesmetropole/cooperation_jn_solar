<template>
  <div class="relative ml-1">
    <highcharts :options="chartOptions" ref="chart"></highcharts>

    <img
      class="absolute top-[175px] left-[60px] z-30 w-[600px]"
      :src="graphSunMoon"
      alt=""
    />
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

<script setup lang="ts">
import { computed } from 'vue'
import graphSunMoon from '@/assets/icons/graph-sun-moon.svg'

const productionData = [
  0, //3h
  0,
  0,
  2,
  3,
  4,
  5,
  6, //10h
  7,
  8,
  8.1,
  8.2,
  7, //15h
  6,
  5,
  4, // 18h
  0,
  0,
  0, //20h
  0,
  0,
  0,
  0, //24h
  0,
]

const consommationData = [
  2, //3h
  3,
  4,
  3,
  2,
  3,
  2,
  3, //10h
  2,
  3,
  2,
  3,
  2, //15h
  3,
  2,
  3, // 18h
  4,
  3,
  2, //20h
  3,
  2,
  4,
  2, //24h
  3,
]

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
      categories: [
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
      ],
      labels: {
        useHTML: true,
        formatter: function () {
          return this.value === '12h' || this.value === '24h'
            ? `<strong style="font-size: 9px;">${this.value}</strong>`
            : `<span style="font-size: 9px;">${this.value}</span>`
        },
      },
      rotation: 0, // Rotate the title to be horizontal (optional)
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
        fillOpacity: 0.5,
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
        name: 'Production',
        lineColor: '#F59E0B',
        color: '#4F46E5',
        data: productionData,
      },
      {
        name: 'Consommation',
        data: consommationData,
        color: '#10B981',
        lineColor: '#0F766E',
      },
    ],
    credits: {
      enabled: false, // Disable the Highcharts.com credit link
    },
  }
})
</script>
