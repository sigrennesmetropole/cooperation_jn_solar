<script setup lang="ts">
import iconDelete from '../../assets/icons/icon-delete.svg'
import { onMounted, reactive } from 'vue'
import { apiEnedisDistrictService } from '@/services/api-enedis-district'

function closeTooltip() {
  console.log('close the tooltip')
}

const state = reactive({
  irisName: '' as string,
  totalConsumption: 0 as number,
  totalProduction: 0 as number,
  nbPhotovoltaicInstallation: 0 as number,
})

async function gettingDistrictDatas(codeIris: number) {
  const districtDatas = await apiEnedisDistrictService.getDistrictDatas(
    codeIris
  )
  state.irisName = districtDatas.irisName
  state.totalConsumption = districtDatas.totalConsumption
  state.totalProduction = districtDatas.totalProduction
  state.nbPhotovoltaicInstallation = districtDatas.totalPhotovoltaicSites
}

onMounted(() => {
  gettingDistrictDatas(350650000)
})

function removePartOfIrisName(irisName: string) {
  const toRemove = '(commune non irisée)'
  const correctedIrisName = irisName.replace(toRemove, '')
  return correctedIrisName
}

function decomposeNumber(float: number, numberOfDecimals: number) {
  const roundFloat = keepDecimals(float, numberOfDecimals)
  const numberInSting = roundFloat.toString()
  const splitNumber = numberInSting.split('.')
  return splitNumber
}

function keepDecimals(float: number, numberOfDecimals: number) {
  const roundFloat = float.toFixed(numberOfDecimals)
  return roundFloat
}
</script>

<template>
  <div
    class="min-w-[440px] transition-[height] absolute right-40 top-1/4 bg-white flex flex-col p-5 gap-3 rounded-lg"
  >
    <div class="flex flex-row justify-between">
      <h2 class="font-dm-sans font-bold text-2xl max-w-[420px]">
        {{ removePartOfIrisName(state.irisName) }}
      </h2>
      <img
        :src="iconDelete"
        alt=""
        class="w-4 self-start ml-2"
        @click="closeTooltip()"
      />
    </div>
    <div
      class="bg-slate-50 border border-slate-200 rounded-lg p-3 flex flex-row gap-4 font-dm-sans"
    >
      <div>
        <p class="font-medium text-xs">Nombre<br />d'installation</p>
        <p class="font-bold text-3xl">{{ state.nbPhotovoltaicInstallation }}</p>
      </div>
      <div class="border border-neutral-300"></div>
      <div>
        <p class="font-medium text-xs">Production<br />photovoltaïque</p>
        <div class="flex flex-row items-baseline font-bold">
          <p class="text-lg leading-6">
            <span class="text-3xl">{{
              decomposeNumber(state.totalProduction, 1)[0]
            }}</span
            >.{{ decomposeNumber(state.totalProduction, 1)[1] }} MWh
          </p>
        </div>
      </div>
      <div class="border border-neutral-300"></div>
      <div>
        <p class="font-medium text-xs">Consommation<br />annuelle</p>
        <div class="flex flex-row items-baseline font-bold">
          <p>
            <span class="text-3xl">{{
              decomposeNumber(state.totalConsumption, 2)[0]
            }}</span>
            MWh
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
