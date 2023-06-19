<script setup lang="ts">
import iconDelete from '../../assets/icons/icon-delete.svg'
import { useDistrictStore } from '@/stores/districtInformations'
import { computed } from 'vue'
import { useInstallationsStore } from '@/stores/installations'
import expand from '@/assets/icons/expand-small-bigger-retract-smaller-big.svg'

const districtStore = useDistrictStore()
const installationsStore = useInstallationsStore()

const positionStyle = computed(() => {
  let style: string = ''
  const tooltipWidth = 440
  const tooltipHeight = 180
  let leftPosition = null
  let topPosition = null
  if (districtStore.newPointAbscissa + tooltipWidth > window.innerWidth) {
    leftPosition = districtStore.newPointAbscissa - tooltipWidth
  } else {
    leftPosition = districtStore.newPointAbscissa
  }

  if (districtStore.newPointOrdinate + tooltipHeight > window.innerHeight) {
    topPosition = districtStore.newPointOrdinate - tooltipHeight
  } else {
    topPosition = districtStore.newPointOrdinate
  }

  if (
    leftPosition + tooltipWidth > window.innerWidth ||
    topPosition + tooltipHeight > window.innerHeight
  ) {
    style = 'display: none;'
  } else if (leftPosition !== null && topPosition !== null) {
    style = `left: ${leftPosition}px; top: ${topPosition}px;`
  }

  return style
})

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
</script>

<template>
  <div
    class="min-w-[440px] h-[184px] transition-[height] absolute bg-white flex flex-col p-5 rounded-lg"
    :style="positionStyle"
    v-if="
      districtStore.districtName !== '' &&
      installationsStore.installationName == ''
    "
  >
    <div class="flex flex-row justify-between">
      <h2 class="font-dm-sans font-bold text-2xl max-w-[420px] mb-3">
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
    <a
      class="font-dm-sans text-xs font-normal underline mt-1"
      href="https://data.enedis.fr/explore/?sort=modified&q=iris"
      target="_blank"
    >
      Source ENEDIS<img :src="expand" class="inline-block ml-1 w-2 h-2" />
    </a>
  </div>
</template>
