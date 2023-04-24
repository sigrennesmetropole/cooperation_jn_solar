<script setup lang="ts">
import { onBeforeMount, onMounted, reactive } from 'vue'
import WaitingAnimation from '@/components/simulation/WaitingAnimation.vue'
import CertifiedInstaller from '@/components/simulation/CertifiedInstaller.vue'
import { viewList } from '@/model/views.model'
import { useViewsStore } from '@/stores/views'
import { useAddressStore } from '@/stores/address'
import { useRoofsStore } from '@/stores/roof'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import { getPeakPower } from '@/services/solarPanel'
import { apiAutocalsolService } from '@/services/api-autocalsol'
import type { AutocalsolData } from '@/model/autocalsol.model'
import { azimuthForAutocalsol } from '@/model/autocalsol.model'
import LargeFooter from '@/components/simulation/LargeFooter.vue'
import { legalList } from '@/constants/legalLinks'

const viewStore = useViewsStore()
const addressStore = useAddressStore()
const roofsStore = useRoofsStore()
const consumptionAndProductionStore = useConsumptionAndProductionStore()

onBeforeMount(() => {
  viewStore.setCurrentView(viewList['end-simulation'])
})

const state = reactive({
  dataAutocalsol: null as null | AutocalsolData,
  autocalsolResult: null as null,
})

onMounted(async () => {
  let selectedRoof = roofsStore.getRoofSurfaceModelOfSelectedPanRoof()
  if (
    selectedRoof === undefined ||
    selectedRoof?.inclinaison === undefined ||
    selectedRoof?.azimuth === undefined
  ) {
    return
  }

  const slope = selectedRoof.inclinaison
  const azimuth = selectedRoof.azimuth
  state.dataAutocalsol = {
    latitude: addressStore.latitude,
    longitude: addressStore.longitude,
    slope: slope,
    azimuth: azimuthForAutocalsol(azimuth),
    annual_consumption: consumptionAndProductionStore.annualConsumption,
    peak_power: getPeakPower(),
  }

  state.autocalsolResult = await apiAutocalsolService.getComputeData(
    state.dataAutocalsol
  )
  console.log(state.autocalsolResult)
})
</script>

<template>
  <div
    class="w-screen font-dm-sans font-medium flex flex-col overflow-y-scroll gap-6"
  >
    <div
      class="flex flex-col gap-12 w-[640px] h-[600px] bg-white rounded-xl p-8 mx-auto mt-[104px] shadow-md"
    >
      {{ state.dataAutocalsol }}
    </div>
    <WaitingAnimation></WaitingAnimation>
    <CertifiedInstaller></CertifiedInstaller>
    <div class="mx-16 py-10">
      <LargeFooter class="mt-auto" :legalList="legalList"></LargeFooter>
    </div>
  </div>
</template>
