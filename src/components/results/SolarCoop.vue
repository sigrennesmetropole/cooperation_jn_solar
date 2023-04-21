<script setup lang="ts">
import goToWhite from '@/assets/icons/icon-external-link-white-thin.svg'
import solarCoop from '@/assets/illustrations/solar-coop.svg'

const SOLAR_COOP_LINK = 'https://www.solarcoop.fr/'

function goToSolarCoopInfo() {
  window.open(SOLAR_COOP_LINK, '_blank')
}
</script>

<template>
  <div
    class="flex flex-col gap-6 w-[100%] h-fit bg-white rounded-xl py-6 px-8 mx-auto shadow-md"
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
        />
      </div>
      <div class="flex flex-col w-[50%] h-fit">
        <p class="font-dm-sans text-base font-normal">
          Vous pouvez vous faire accompagner par la structure citoyenne
          Solarcoop qui vous aidera à trouver la meilleure installation.
        </p>

        <button
          @click="goToSolarCoopInfo()"
          id="solarCoopButton"
          class="bg-black shadow-sm rounded-lg gap-3 px-4 py-3 w-fit items-center flex flex-row justify-center mt-4"
        >
          <img class="w-5 h-5" :src="goToWhite" alt="" />
          <span class="font-dm-sans text-white text-base font-bold">
            Visiter le site</span
          >
        </button>
      </div>
    </div>
  </div>
</template>
