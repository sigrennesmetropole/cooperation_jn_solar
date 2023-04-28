<script setup lang="ts">
import goToWhite from '@/assets/icons/icon-external-link-white-thin.svg'
import goToAmber from '@/assets/icons/icon-external-link-amber.svg'
import goToBlack from '@/assets/icons/expand-small-bigger-retract-smaller-big.svg'
import energies from '@/assets/illustrations/energies.svg'

const ENERGIES_LINK = 'https://energiesdupaysderennes.fr/'
const VILAINE_LINK = 'https://soleilsurvilaine.centralesvillageoises.fr/'

function goToEnergiesInfo() {
  window.open(ENERGIES_LINK, '_blank')
}

function goToVilaineInfo() {
  window.open(VILAINE_LINK, '_blank')
}
</script>

<template>
  <div
    class="flex flex-col gap-6 w-[100%] h-fit bg-white rounded-xl py-6 px-8 mx-auto shadow-md"
  >
    <h2 class="font-dm-sans font-bold text-2xl">
      Contacter des associations locales
    </h2>
    <div class="flex flex-row gap-8 w-[100%] h-fit bg-white">
      <div
        class="flex flex-row w-[50%] justify-center h-fit border border-neutral-300 rounded-lg px-5 py-[18px]"
      >
        <img
          :src="energies"
          @click="goToEnergiesInfo()"
          class="cursor-pointer"
        />
      </div>
      <div class="flex flex-col w-[50%] h-fit">
        <p class="font-dm-sans text-base font-normal">
          <span
            class="inline-flex items-center cursor-pointer font-medium"
            @click="goToEnergiesInfo()"
          >
            <strong class="underline"> Énergies du pays de Rennes </strong>
            <img :src="goToBlack" class="w-[14px] h-[14px] ml-1" />
          </span>
          est une association citoyenne pour le développement du solaire
          photovoltaïque sur Rennes et sa région.
        </p>
        <button
          @click="goToEnergiesInfo()"
          id="energiesButton"
          class="bg-black shadow-sm rounded-lg gap-3 px-4 py-3 w-fit items-center flex flex-row justify-center mt-4"
        >
          <img class="w-5 h-5" :src="goToWhite" alt="" />
          <span class="font-dm-sans text-white text-base font-bold">
            Visiter le site</span
          >
        </button>
      </div>
    </div>
    <div>
      <p class="font-dm-sans text-base font-normal">
        Pour Acigné et Brécé, il existe aussi
        <span
          id="vilaine"
          class="inline-flex items-center cursor-pointer font-medium"
          @click="goToVilaineInfo()"
        >
          <strong class="underline">l'association Soleil sur Vilaine</strong>
          <img :src="goToAmber" class="w-[14px] h-[14px] ml-1" />
        </span>
      </p>
    </div>
  </div>
</template>
