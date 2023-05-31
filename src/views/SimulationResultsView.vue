<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { viewList } from '@/model/views.model'
import { useViewsStore } from '@/stores/views'
import { useRoofsStore } from '@/stores/roof'
import ConsumptionInformation from '@/components/results/ConsumptionInformation.vue'
import ProductionInformation from '@/components/results/ProductionInformation.vue'
import GoFurther from '@/components/results/GoFurther.vue'
import EnergiesRennes from '@/components/results/EnergiesRennes.vue'
import SolarCoop from '@/components/results/SolarCoop.vue'
import SunshineInformation from '@/components/results/SunshineInformation.vue'
import AutocalsolResult from '@/components/results/AutocalsolResult.vue'
import { useAutocalsolStore } from '@/stores/autocalsol'
import LargeFooter from '@/components/simulation/LargeFooter.vue'
import PdfSimulation from '@/components/results/PdfSimulation.vue'
import { legalList } from '@/constants/legalLinks'
import { useSolarPanelStore } from '@/stores/solarPanels'
import HeaderEndSimulation from '@/components/simulation/HeaderEndSimulation.vue'
import { getDistrictDatas } from '@/services/districtService'

const viewStore = useViewsStore()
const roofsStore = useRoofsStore()
const autocalsolStore = useAutocalsolStore()
const solarPanelStore = useSolarPanelStore()

onBeforeMount(async () => {
  viewStore.setCurrentView(viewList['simulation-results'])
  getDistrictDatas()
})

const selectedRoof = roofsStore.getRoofSurfaceModelOfSelectedPanRoof()
const autocalsolResult = autocalsolStore.autocalsolResult
</script>

<template>
  <div class="bg-slate-100 w-full overflow-y-scroll">
    <HeaderEndSimulation></HeaderEndSimulation>
    <div class="flex flex-row mx-auto w-full gap-6 justify-center">
      <div
        class="w-[25%] max-w-[360px] font-dm-sans font-medium flex flex-col gap-6 pt-[205px]"
      >
        <SunshineInformation
          v-if="selectedRoof !== undefined"
          :selected-roof="selectedRoof"
        />
        <ProductionInformation
          v-if="solarPanelStore.currentNumberSolarPanel > 0"
          :current-num-solar-panel="solarPanelStore.currentNumberSolarPanel"
        />
        <ConsumptionInformation />
      </div>
      <div
        class="w-[55%] max-w-[800px] font-dm-sans font-medium flex flex-col gap-8 bg-blue-50 pt-[120px]"
      >
        <PdfSimulation
          v-if="selectedRoof !== undefined && autocalsolResult !== null"
          :selected-roof="selectedRoof"
          :autocalsolResult="autocalsolResult"
        />
        <AutocalsolResult
          v-if="autocalsolResult !== null"
          :autocalsolResult="autocalsolResult"
        />
        <GoFurther></GoFurther>
        <SolarCoop></SolarCoop>
        <EnergiesRennes></EnergiesRennes>
      </div>
    </div>
    <div class="mx-16 py-10">
      <LargeFooter class="mt-auto" :legalList="legalList"></LargeFooter>
    </div>
  </div>
</template>
