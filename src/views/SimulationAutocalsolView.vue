<script setup lang="ts">
import { onBeforeMount, onMounted, reactive, ref, Ref } from 'vue'
import WaitingAnimation from '@/components/simulation/WaitingAnimation.vue'
import FailComponent from '@/components/simulation/FailComponent.vue'
import CertifiedInstaller from '@/components/simulation/CertifiedInstaller.vue'
import HeaderEndSimulation from '@/components/simulation/HeaderEndSimulation.vue'
import { viewList } from '@/model/views.model'
import { useViewsStore } from '@/stores/views'
import { useAddressStore } from '@/stores/address'
import { useRoofsStore } from '@/stores/roof'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import { getPeakPower } from '@/services/solarPanel'
import { apiAutocalsolService } from '@/services/api-autocalsol'
import type { AutocalsolData, AutocalsolResult } from '@/model/autocalsol.model'
import { azimuthForAutocalsol } from '@/model/autocalsol.model'
import LargeFooter from '@/components/simulation/LargeFooter.vue'
import { legalList } from '@/constants/legalLinks'
import { useAutocalsolStore } from '@/stores/autocalsol'
import { useRouter } from 'vue-router'
import { usePanelsStore } from '@/stores/panels'

const viewStore = useViewsStore()
const addressStore = useAddressStore()
const roofsStore = useRoofsStore()
const consumptionAndProductionStore = useConsumptionAndProductionStore()
const autocalsolStore = useAutocalsolStore()
const router = useRouter()
const panelsStore = usePanelsStore()

let isAutocalsolError: Ref<boolean> = ref(false)

function isAutocalsolResult(
  result: {
    prodByMonth: number[]
    consoByMonth: number[]
    prodByHour: [string, string | number][]
    consoByHour: [string, string | number][]
    consoAnnualInjected: number
    consoAnnualAutoConsumed: number
  } | null
): result is AutocalsolResult {
  return (
    typeof result === 'object' &&
    result?.prodByMonth instanceof Array &&
    result?.consoByMonth instanceof Array &&
    result?.prodByHour instanceof Array &&
    result?.consoByHour instanceof Array &&
    typeof result?.consoAnnualInjected === 'number' &&
    typeof result?.consoAnnualAutoConsumed === 'number'
  )
}

onBeforeMount(() => {
  viewStore.setCurrentView(viewList['end-simulation'])
  panelsStore.isCompletelyHidden = true
})

const state = reactive({
  dataAutocalsol: null as null | AutocalsolData,
  autocalsolResult: null as null,
})

async function callAutocalsolApi() {
  isAutocalsolError.value = false
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

  try {
    state.autocalsolResult = await apiAutocalsolService.getComputeData(
      state.dataAutocalsol
    )
    autocalsolStore.setAutocalsolResult(state.autocalsolResult)
    if (
      !isAutocalsolResult(autocalsolStore.autocalsolResult) ||
      autocalsolStore.autocalsolResult === null
    ) {
      isAutocalsolError.value = true
    } else if (viewStore.currentView == 'end-simulation') {
      router.push('/simulation-results')
    }
  } catch (error) {
    isAutocalsolError.value = true
  }
}

onMounted(async () => {
  callAutocalsolApi()
})
</script>

<template>
  <div class="overflow-y-auto flex flex-row bg-slate-100 w-full">
    <div class="w-screen font-dm-sans font-medium flex flex-col gap-6">
      <HeaderEndSimulation></HeaderEndSimulation>
      <div
        class="flex flex-col gap-12 w-[640px] h-[600px] bg-white rounded-xl p-8 mx-auto mt-[104px] shadow-md"
      >
        {{ state.dataAutocalsol }}
      </div>
      <WaitingAnimation v-if="isAutocalsolError === false"></WaitingAnimation>
      <FailComponent
        v-if="isAutocalsolError === true"
        @retry-end-simulation="callAutocalsolApi()"
      ></FailComponent>
      <CertifiedInstaller></CertifiedInstaller>
      <div class="mx-16 py-10">
        <LargeFooter class="mt-auto" :legalList="legalList"></LargeFooter>
      </div>
    </div>
  </div>
</template>
