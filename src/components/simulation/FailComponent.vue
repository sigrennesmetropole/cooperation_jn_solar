<script setup lang="ts">
import fail from '@/assets/illustrations/fail.svg'
import {
  type AutocalsolData,
  azimuthForAutocalsol,
} from '@/model/autocalsol.model'
import { apiAutocalsolService } from '@/services/api-autocalsol'
import { getPeakPower } from '@/services/solarPanel'
import { useAddressStore } from '@/stores/address'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import { useRoofsStore } from '@/stores/roof'
import { reactive } from 'vue'
const addressStore = useAddressStore()
const roofsStore = useRoofsStore()
const consumptionAndProductionStore = useConsumptionAndProductionStore()

const state = reactive({
  dataAutocalsol: null as null | AutocalsolData,
  autocalsolResult: null as null,
})

async function newCallApi() {
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
  console.log('autocalsol results', state.autocalsolResult)
}
</script>

<template>
  <div
    class="flex flex-col gap-6 w-[640px] h-fit bg-white rounded-xl p-6 mx-auto shadow-md"
  >
    <div class="flex flex-col items-center gap-6">
      <img :src="fail" alt="" class="w-[354px] h-[180px]" />
      <div class="flex flex-col gap-2">
        <h2 class="font-dm-sans font-bold text-2xl text-center">Oups...</h2>
        <p class="font-dm-sans font-normal text-base text-center">
          les services interrogés sont indisponibles.<br />
          Merci de réessayer dans quelques instants...
        </p>
      </div>
      <button
        class="bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center w-fit"
        @click="newCallApi()"
      >
        <span class="text-white text-base font-medium">Réessayer</span>
      </button>
    </div>
  </div>
</template>
