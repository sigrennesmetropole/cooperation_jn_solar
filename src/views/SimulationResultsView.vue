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
  <div class="flex flex-row mx-auto mt-[184px] gap-6 w-[80%] justify-center">
    <div class="w-[25%] font-dm-sans font-medium flex flex-col gap-6">
      <ConsumptionInformation></ConsumptionInformation>
    </div>
    <div class="w-[55%] font-dm-sans font-medium flex flex-col gap-8">
      <div>
        <ConsumptionInformation></ConsumptionInformation>
      </div>
    </div>
  </div>
</template>
