<script setup lang="ts">
import warning from '@/assets/icons/chat-message-warning.svg'
import { apiIrisService } from '@/services/api-code-iris'
import { useAddressStore } from '@/stores/address'
import { useDistrictStore } from '@/stores/districtInformations'
import { onBeforeMount } from 'vue'
import { apiEnedisDistrictService } from '@/services/api-enedis-district'

const districtStore = useDistrictStore()
const addressStore = useAddressStore()

async function gettingIrisCode(lat: string, lon: string) {
  const irisCode = await apiIrisService.getCodeIris(lat, lon)
  districtStore.setDistrictIrisCode(irisCode)
  return irisCode
}

async function gettingDistrictDatas(codeIris: number) {
  const districtDatas = await apiEnedisDistrictService.getDistrictDatas(
    codeIris
  )
  districtStore.setDistrictProduction(districtDatas.totalProduction)
  districtStore.setDistrictNumberInstallations(
    districtDatas.totalPhotovoltaicSites
  )
}

function keepDecimals(float: number, numberOfDecimals: number) {
  const roundFloat = float.toFixed(numberOfDecimals)
  return roundFloat
}

onBeforeMount(async () => {
  const irisCode = await gettingIrisCode(
    addressStore.latitude.toString(),
    addressStore.longitude.toString()
  )
  await gettingDistrictDatas(irisCode)
})
</script>

<template>
  <div
    class="flex flex-row px-4 py-[19px] gap-3 bg-amber-50 border border-amber-200 font-dm-sans text-amber-900 rounded-lg font normal text-sm"
  >
    <img :src="warning" class="w-5 h-5 my-auto" />
    <p>
      Cette installation contribuerait à la transition énergétique de votre
      quartier/commune qui dispose de
      <span class="font-bold" id="number-panel">{{
        districtStore.districtNumberInstallations
      }}</span>
      sites de production photovoltaïque représentant annuellement
      <span class="font-bold" id="district-production"
        >{{ keepDecimals(districtStore.districtProduction, 1) }} MWh.</span
      >
    </p>
  </div>
</template>
