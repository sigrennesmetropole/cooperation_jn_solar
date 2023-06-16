<script setup lang="ts">
import iconDelete from '@/assets/icons/icon-delete.svg'
import iconSun from '@/assets/icons/solarPanelLogo.svg'
import { useDistrictStore } from '@/stores/districtInformations'
import { useInstallationsStore } from '@/stores/installations'
import { UiButtonWithTooltip } from '@sigrennesmetropole/cooperation_jn_common_ui'
import expand from '@/assets/icons/expand-small-bigger-retract-smaller-big.svg'
import { computed } from 'vue'

const installationsStore = useInstallationsStore()
const districtStore = useDistrictStore()

function closeTooltip() {
  installationsStore.resetInstallationStore()
}

const positionStyle = computed(() => {
  let style: string = ''
  const tooltipWidth = 478
  const tooltipHeight = 230
  let leftPosition = null
  let topPosition = null
  if (installationsStore.newPointAbscissa + tooltipWidth > window.innerWidth) {
    leftPosition = installationsStore.newPointAbscissa - tooltipWidth
  } else {
    leftPosition = installationsStore.newPointAbscissa
  }

  if (
    installationsStore.newPointOrdinate + tooltipHeight >
    window.innerHeight
  ) {
    topPosition = installationsStore.newPointOrdinate - tooltipHeight
  } else {
    topPosition = installationsStore.newPointOrdinate
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
</script>

<template>
  <div
    class="min-w-[478px] h-[230px] transition-[height] absolute bg-white flex flex-col p-5 rounded-lg"
    :style="positionStyle"
    v-if="
      installationsStore.installationName !== '' &&
      districtStore.districtName == ''
    "
  >
    <div class="flex flex-row justify-between gap-4 items-center mb-3">
      <img :src="iconSun" alt="icone de soleil" class="w-16 h-16" />
      <div class="flex flex-col gap-1">
        <h2 class="font-dm-sans font-bold text-2xl max-w-[420px]">
          {{ installationsStore.installationName }}
        </h2>
        <p class="font-dm-sans text-xs font-normal">
          Ici, Rennes Métropole a installé des panneaux photovoltaïques.
        </p>
      </div>
      <img
        :src="iconDelete"
        alt="icone de fermeture de la tooltip"
        class="w-4 self-start ml-2 cursor-pointer"
        @click="closeTooltip()"
      />
    </div>
    <div
      class="bg-slate-50 border border-slate-200 rounded-lg p-3 flex flex-row gap-4 font-dm-sans justify-around relative mb-1"
    >
      <div class="flex flex-col justify-between">
        <p class="font-medium text-xs">Date de mise<br />en service</p>
        <p class="font-bold text-3xl">
          {{ installationsStore.installationYear }}
        </p>
      </div>
      <div class="border border-neutral-300"></div>
      <div class="flex flex-col justify-between">
        <p class="font-medium text-xs">Puissance<br />installée</p>
        <div class="flex flex-row items-baseline font-bold">
          <p class="text-lg leading-6">
            <span class="text-3xl">{{
              installationsStore.installationProduction
            }}</span>
            kWc
          </p>
        </div>
      </div>
      <div class="border border-neutral-300"></div>
      <div class="">
        <div class="flex flex-row">
          <p class="font-medium text-xs pr-10">
            Equivalent à la<br />consommation<br />électrique de
          </p>
          <UiButtonWithTooltip
            widthButton="5"
            heightButton="5"
            position-top="8px"
            position-right="8px"
            zIndex="z-10"
            text="En considérant 1 kWc de puissance va produire 1100 kWh soit 1,1 MWh/an et un foyer consomme environ 3,5 MWh/an en électricité."
            widthBoxText="w-[264px]"
          ></UiButtonWithTooltip>
        </div>
        <div class="flex flex-row items-baseline font-bold">
          <p class="text-lg leading-6">
            <span class="text-3xl">{{ installationsStore.numberHome }}</span>
            foyers
          </p>
        </div>
      </div>
    </div>
    <a
      class="font-dm-sans text-xs font-normal underline"
      href="https://public.sig.rennesmetropole.fr/geonetwork/srv/fre/catalog.search#/metadata/03fe4803-4199-4723-be7e-d4d0ed6d17de"
      target="_blank"
    >
      Source Rennes Métropole<img
        :src="expand"
        class="inline-block ml-1 w-2 h-2"
      />
    </a>
  </div>
</template>
