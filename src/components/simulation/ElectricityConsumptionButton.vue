<script setup lang="ts">
import rectangle from '@/assets/icons/rectangle.svg'
import expandArrow from '@/assets/icons/expand-small-bigger-retract-smaller-big.svg'
import { useSimulationStore } from '@/stores/simulations'

const simulationStore = useSimulationStore()
</script>

<template>
  <div class="flex flex-col gap-[10px] py-6 font-dm-sans">
    <button
      class="bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
      @click="simulationStore.currentSubStep = 3"
    >
      <span class="text-white text-base font-medium"
        >Saisir les informations de ma facture</span
      >
    </button>
    <div class="flex flex-row justify-between gap-[22px]">
      <img :src="rectangle" />
      <p class="text-sm font-dm-sans font-normal text-neutral-400 my-4">OU</p>
      <img :src="rectangle" />
    </div>
    <button
      class="border border-black rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
      @click="simulationStore.currentSubStep = 4"
    >
      <img :src="expandArrow" class="h-5 w-5" />
      <span class="text-black text-base font-medium"
        >Connecter mon compteur Linky</span
      >
    </button>
  </div>
</template>
