<script setup lang="ts">
import goToAmber from '@/assets/icons/icon-external-link-amber.svg'
import goToBlack from '@/assets/icons/expand-small-bigger-retract-smaller-big.svg'
import information from '@/assets/icons/icon-information-grey.svg'
import energies from '@/assets/illustrations/energies.svg'
import ButtonVisitWebsite from '@/components/results/ButtonVisitWebsite.vue'
import { useConfigStore } from '@/stores/config'

const configStore = useConfigStore()

const energies_link = configStore.config?.solar.links.energies_link
const vilaine_link = configStore.config?.solar.links.vilaine_link

function goToEnergiesInfo() {
  window.open(energies_link, '_blank')
}

function goToVilaineInfo() {
  window.open(vilaine_link, '_blank')
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
        <p class="font-dm-sans text-base font-medium text-neutral-900">
          <span
            tabindex="0"
            class="inline-flex items-center cursor-pointer font-medium"
            @click="goToEnergiesInfo()"
            @keydown.enter="goToEnergiesInfo()"
          >
            <strong class="underline"> Énergies du pays de Rennes </strong>
            <img :src="goToBlack" class="w-[14px] h-[14px] ml-1" />
          </span>
          est une association citoyenne pour le développement du solaire
          photovoltaïque sur Rennes et sa région.
        </p>
        <ButtonVisitWebsite id="energiesButton" :link="energies_link!" />
      </div>
    </div>
    <div
      class="flex flex-row gap-3 border border-neutral-300 rounded-lg px-2 py-[29px]"
    >
      <img :src="information" class="w-[18px] h-[18px] ml-1" />
      <p class="font-dm-sans text-sm font-medium text-slate-900">
        Pour Acigné et Brécé, il existe aussi
        <span
          id="vilaine"
          tabindex="0"
          class="inline-flex items-center cursor-pointer font-medium"
          @click="goToVilaineInfo()"
          @keydown.enter="goToVilaineInfo()"
        >
          <strong class="underline">l'association Soleil sur Vilaine</strong>
          <img :src="goToAmber" class="w-[14px] h-[14px] ml-1" />
        </span>
      </p>
    </div>
  </div>
</template>
