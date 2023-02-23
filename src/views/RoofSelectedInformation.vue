<script setup lang="ts">
import { useViewsStore } from '@/stores/views'
import { onBeforeMount } from 'vue'
import { viewList } from '@/model/views.model'
import SurfaceChartDonut from '@/components/chart/SurfaceChartDonut.vue'

const viewStore = useViewsStore()

onBeforeMount(async () => {
  viewStore.setCurrentView(viewList['roof-selected-information'])
})
</script>

<template>
  <div class="mt-12 flex flex-row items-center justify-center">
    <SurfaceChartDonut></SurfaceChartDonut>
  </div>
</template>
