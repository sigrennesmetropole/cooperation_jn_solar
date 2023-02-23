<script setup lang="ts">
import { useViewsStore } from '@/stores/views'
import { onBeforeMount } from 'vue'
import { viewList } from '@/model/views.model'
import SurfaceChartDonut from '@/components/chart/SurfaceChartDonut.vue'
import UiButtonWithTooltip from '@/components/ui/UiButtonWithTooltip.vue'

const viewStore = useViewsStore()

onBeforeMount(async () => {
  viewStore.setCurrentView(viewList['roof-selected-information'])
})
</script>

<template>
  <div
    class="mt-12 w-[402px] h-[360px] bg-white border border-slate-100 rounded relative"
  >
    <UiButtonWithTooltip
      widthButton="4"
      heightButton="4"
      text="La surface favorable correspond à un potentiel supérieur à 1200 kWh/m2/an."
      widthBoxText="w-[300px]"
    ></UiButtonWithTooltip>
    <div class="flex flex-row items-center justify-center">
      <SurfaceChartDonut></SurfaceChartDonut>
    </div>
  </div>
</template>
