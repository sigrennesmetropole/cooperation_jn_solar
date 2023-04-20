<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { viewList } from '@/model/views.model'
import { useViewsStore } from '@/stores/views'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import ConsumptionInformation from '@/components/results/ConsumptionInformation.vue'
import SunshineInformation from '@/components/results/SunshineInformation.vue'
import { useAddressStore } from '@/stores/address'

const consumptionAndProductionStore = useConsumptionAndProductionStore()
const addressStore = useAddressStore()
const viewStore = useViewsStore()

onBeforeMount(async () => {
  viewStore.setCurrentView(viewList['simulation-results'])

  //TODO : remove these lines when not testing
  consumptionAndProductionStore.setAnnualConsumption(6000)
  addressStore.setAddress('17, rue de la Finlande, 35000 Rennes')
})
</script>

<template>
  <div class="flex flex-row mx-auto mt-[184px] w-full gap-6 justify-center">
    <div
      class="w-[25%] max-w-[360px] font-dm-sans font-medium flex flex-col gap-6"
    >
      <SunshineInformation />
      <ConsumptionInformation />
    </div>
    <div
      class="w-[55%] font-dm-sans font-medium flex flex-col gap-8 bg-blue-50"
    >
      <div></div>
    </div>
  </div>
</template>
