<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue'
import { viewList } from '@/model/views.model'
import { useViewsStore } from '@/stores/views'
import ConsumptionInformation from '@/components/results/ConsumptionInformation.vue'

const viewStore = useViewsStore()

onBeforeMount(async () => {
  viewStore.setCurrentView(viewList['simulation-results'])
})
onMounted(async () => {})
</script>

<template>
  <div class="flex flex-row mx-auto gap-6">
    <div
      class="w-[360px] font-dm-sans font-medium flex flex-col mt-[184px] gap-6"
    >
      <ConsumptionInformation></ConsumptionInformation>
    </div>
    <div
      class="w-[800px] font-dm-sans font-medium flex flex-col mt-[184px] gap-8"
    >
      <div></div>
    </div>
  </div>
</template>
