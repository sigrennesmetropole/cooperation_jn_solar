<script setup lang="ts">
import solarCoop from '@/assets/illustrations/solar-coop.svg'
import ButtonVisitWebsite from '@/components/results/ButtonVisitWebsite.vue'
import { getConfigFromKey } from '@/services/configService'

const props = defineProps<{
  isPdf: boolean
}>()

const solar_coop_link = getConfigFromKey('link.solar_coop_link')

function goToSolarCoopInfo() {
  window.open(solar_coop_link, '_blank')
}
</script>

<template>
  <div
    class="flex flex-col gap-6 w-[100%] h-fit bg-white rounded-xl py-6 px-8 mx-auto"
    :class="props.isPdf ? '' : 'shadow-md'"
  >
    <h2 class="font-dm-sans font-bold text-2xl">
      Être accompagné dans mon projet
    </h2>
    <div class="flex flex-row gap-8 w-[100%] h-fit bg-white">
      <div
        class="flex flex-row w-[50%] justify-center h-fit border border-neutral-300 rounded-lg px-5 py-8"
      >
        <img
          :src="solarCoop"
          @click="goToSolarCoopInfo()"
          class="cursor-pointer"
          id="solarCoopImg"
        />
      </div>
      <div class="flex flex-col w-[50%] h-fit">
        <p class="font-dm-sans text-base font-normal">
          Vous pouvez vous faire accompagner par la structure citoyenne
          Solarcoop qui vous aidera à trouver la meilleure installation.
        </p>

        <ButtonVisitWebsite :link="solar_coop_link" :isPdf="props.isPdf" />
      </div>
    </div>
  </div>
</template>
