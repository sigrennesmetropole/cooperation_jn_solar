<script setup lang="ts">
const series = [35, 15, 5, 45]
const chartOptions = {
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
  colors: ['#FEF08A', '#FEF9C3', '#CBD5E1', '#334155'],
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            show: true,
            showAlways: true,
            label: 'Surface favorable',
            formatter: function () {
              return '50%'
            },
            fontSize: '11px',
          },
        },
        size: '70%',
      },
    },
  },
}
</script>

<template>
  <apexchart
    type="donut"
    width="228"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>
