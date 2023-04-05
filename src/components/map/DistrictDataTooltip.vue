<script setup lang="ts">
import iconDelete from '../../assets/icons/icon-delete.svg'
import { useDistrictStore } from '@/stores/districtInformations'

const districtStore = useDistrictStore()

function closeTooltip() {
  districtStore.resetDistrictStore()
}

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

function toNumberOfPixels(number: number) {
  const numberOfPixels = number.toString() + 'px'
  return numberOfPixels
}
</script>

<template>
  <div
    class="min-w-[440px] transition-[height] absolute bg-white flex flex-col p-5 gap-3 rounded-lg"
    :style="{
      left: toNumberOfPixels(districtStore.newPointAbscissa),
      top: toNumberOfPixels(districtStore.newPointOrdinate),
    }"
    v-if="districtStore.districtName !== ''"
  >
    <div class="flex flex-row justify-between">
      <h2 class="font-dm-sans font-bold text-2xl max-w-[420px]">
        {{ removePartOfIrisName(districtStore.districtName) }}
      </h2>
      <img
        :src="iconDelete"
        alt=""
        class="w-4 self-start ml-2 cursor-pointer"
        @click="closeTooltip()"
      />
    </div>
    <div
      class="bg-slate-50 border border-slate-200 rounded-lg p-3 flex flex-row gap-4 font-dm-sans"
    >
      <div>
        <p class="font-medium text-xs">Nombre<br />d'installation</p>
        <p class="font-bold text-3xl">
          {{ districtStore.districtNumberInstallations }}
        </p>
      </div>
      <div class="border border-neutral-300"></div>
      <div>
        <p class="font-medium text-xs">Production<br />photovoltaïque</p>
        <div class="flex flex-row items-baseline font-bold">
          <p class="text-lg leading-6">
            <span class="text-3xl">{{
              decomposeNumber(districtStore.districtProduction, 1)[0]
            }}</span
            >.{{ decomposeNumber(districtStore.districtProduction, 1)[1] }} MWh
          </p>
        </div>
      </div>
      <div class="border border-neutral-300"></div>
      <div>
        <p class="font-medium text-xs">Consommation<br />annuelle</p>
        <div class="flex flex-row items-baseline font-bold">
          <p>
            <span class="text-3xl">{{
              decomposeNumber(districtStore.districtConsumption, 2)[0]
            }}</span>
            MWh
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
