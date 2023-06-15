<script setup lang="ts">
import SurfaceChartDonut from '@/components/chart/SurfaceChartDonut.vue'
import UiSurfaceNumber from '@/components/roof_selection/UiSurfaceNumber.vue'
import { ref } from 'vue'
import { getDataBuilding } from '@/model/roof.model'
import { useRoofsStore } from '@/stores/roof'

const roofsStore = useRoofsStore()
const buildingData = ref(getDataBuilding())

roofsStore.$subscribe(async () => {
  buildingData.value = getDataBuilding()
  console.log('buildingData 1', buildingData.value)
})
</script>

<template>
  <div class="flex flex-row items-center justify-center">
    <SurfaceChartDonut :buildingData="buildingData"></SurfaceChartDonut>
  </div>
  <UiSurfaceNumber
    :totalArea="buildingData.total"
    :favorableArea="buildingData.favorable"
  ></UiSurfaceNumber>
</template>
