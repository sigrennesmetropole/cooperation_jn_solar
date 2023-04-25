<template>
  <div>
    <highcharts :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

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
  2,
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
  2,
  3,
  2, //20h
  3,
  2,
  3,
  2, //24h
  3,
]

const chartOptions = computed(() => {
  return {
    chart: {
      type: 'areaspline',
    },
    title: {
      text: 'Production et consommation journalière',
    },
    legend: {
      layout: 'horizontal',
      align: 'left',
      verticalAlign: 'bottom',
      floating: false,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      x: 70,
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
        'Midi',
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
        'Minuit',
        '1h',
        '2h',
      ],
      labels: {
        useHTML: true,
        formatter: function () {
          return this.value === 'Midi' || this.value === 'Minuit'
            ? `<strong>${this.value}</strong>`
            : this.value
        },
      },
    },
    yAxis: {
      title: {
        text: 'Energie (kWh)',
        align: 'high', // Align the title to the top of the yAxis line
        rotation: 0, // Rotate the title to be horizontal (optional)
        offset: 0, // Set the offset to 0 so the title is displayed right at the top of the yAxis line
        y: -20, // Adjust the vertical position of the title (optional)
        x: 20, // Adjust the horizontal position of the title (optional)
        style: {
          fontSize: '11px', // Set the font size to 18px (or any other desired value)
          fontWeight: 'bold', // Set the font weight to bold (optional)
        },
      },
    },
    tooltip: {
      shared: true,
      headerFormat: '<b>Hunting season starting autumn {point.x}</b><br>',
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5,
      },
    },
    series: [
      {
        name: 'Production',
        lineColor: '#F59E0B',
        color: '#4F46E5',
        data: productionData,
        marker: {
          fillColor: '#F59E0B',
        },
      },
      {
        name: 'Consommation',
        data: consommationData,
        color: '#D1FAE5',
        lineColor: '#0F766E',
        marker: {
          fillColor: '#0F766E',
        },
      },
    ],
  }
})
</script>
