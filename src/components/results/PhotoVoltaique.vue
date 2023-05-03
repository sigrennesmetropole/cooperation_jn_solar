<script setup lang="ts">
import photoVoltaique from '@/assets/illustrations/photo_voltaique.svg'
import goToWhite from '@/assets/icons/icon-external-link-white-thin.svg'
import goToBlack from '@/assets/icons/expand-small-bigger-retract-smaller-big.svg'

const PHOTOVOLTAIQUE_LINK = 'https://www.photovoltaique.info/fr/'

function goToPhotovoltaiqueInfo() {
  window.open(PHOTOVOLTAIQUE_LINK, '_blank')
}
</script>

<template>
  <div class="flex flex-row gap-8 w-[100%] h-fit bg-white">
    <div
      class="flex flex-row w-[50%] justify-center h-fit border border-neutral-300 rounded-lg px-5 py-8"
    >
      <img :src="photoVoltaique" />
    </div>
    <div class="flex flex-col w-[50%] h-fit">
      <p class="font-dm-sans text-base font-normal">
        Le site de référence
        <span
          class="inline-flex items-center cursor-pointer font-medium"
          @click="goToPhotovoltaiqueInfo()"
        >
          <strong class="underline"> photovoltaique.info</strong>
          <img :src="goToBlack" class="w-[14px] h-[14px] ml-1" />
        </span>
        regroupe l’essentiel des informations techniques et réglementaires sur
        le photovoltaïque.
      </p>
      <button
        @click="goToPhotovoltaiqueInfo()"
        id="photovoltaiqueButton"
        class="bg-black shadow-sm rounded-lg gap-3 px-4 py-3 w-fit items-center flex flex-row justify-center mt-4"
      >
        <img class="w-5 h-5" :src="goToWhite" alt="" />
        <span class="font-dm-sans text-white text-base font-bold">
          Visiter le site</span
        >
      </button>
    </div>
  </div>
</template>
