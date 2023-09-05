<script setup lang="ts">
import warning from '@/assets/icons/chat-message-warning.svg'
import { useDistrictStore } from '@/stores/districtInformations'

const districtStore = useDistrictStore()

function keepDecimals(float: number, numberOfDecimals: number) {
  const roundFloat = float.toFixed(numberOfDecimals)
  return roundFloat
}
</script>

<template>
  <div
    class="flex flex-row px-4 py-[19px] gap-3 bg-amber-50 border border-amber-200 font-dm-sans text-amber-900 rounded-lg font normal text-sm"
  >
    <img :src="warning" class="w-5 h-5 my-auto" />
    <p>
      La représentation de la production s'appuie sur l'ensoleillement d'une
      journée d'été passée. Il ne s'agit pas d'une production idéale.
    </p>
  </div>
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
