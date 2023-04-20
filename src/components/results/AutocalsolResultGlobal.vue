<script setup lang="ts">
import electricityProduction from '@/assets/illustrations/electricity-production.svg'
import equalCircle from '@/assets/illustrations/equal-circle.svg'
import plusCircle from '@/assets/illustrations/plus-circle.svg'
</script>

<template>
  <div class="flex flex-col mt-5 items-center">
    <img :src="electricityProduction" alt="" />

    <div class="flex flex-row relative mb-5">
      <div class="absolute left-[212px] top-[80px] z-30">
        <img :src="equalCircle" alt="" />
      </div>

      <div class="absolute left-[445px] top-[80px] z-30">
        <img :src="plusCircle" alt="" />
      </div>

      <div class="mt-8 font-dm-sans relative mr-12">
        <div
          class="bg-amber-500 px-3 py-1 rounded-full w-fit absolute left-[26%] -top-3"
        >
          <span class="text-white text-base font-bold"> Production </span>
        </div>
        <div
          class="flex flex-col h-[250px] w-max-[250px] justify-center items-center rounded-lg bg-orange-50 border border-orange-300 px-6 py-4"
        >
          <span class="font-bold text-3xl mt-2"> 2000 </span>
          <span class="font-bold text-base"> kWh/an </span>
          <span class="w-[160px] text-sm font-medium text-center h-[60px]">
            d’électricité produite par votre installation photovoltaïque
          </span>
          <span
            class="w-[160px] mt-4 text-xs font-bold text-amber-600 text-center h-[48px]"
          >
            Un panneau réalise encore 80% de sa production au bout de 30 ans
          </span>
        </div>
      </div>

      <div class="mt-8 font-dm-sans relative">
        <div
          class="bg-emerald-500 px-3 py-1 rounded-full w-fit absolute left-[12%] -top-3"
        >
          <span class="text-white text-base font-bold"> Autoconsommation </span>
        </div>
        <div
          class="h-[250px] w-max-[250px] flex flex-col justify-center items-center rounded-l-lg bg-green-50 border border-r-0 border-green-400 px-6 py-4"
        >
          <span class="font-bold text-3xl mt-2"> 400 </span>
          <span class="font-bold text-base"> kWh/an </span>
          <span class="w-[160px] text-sm font-medium text-center h-[60px]">
            d’électricité produite et consommée sur place
            <br />
          </span>
          <span
            class="w-[160px] mt-4 text-xs font-bold text-emerald-600 text-center h-[48px]"
          >
            Part à déduire de votre facture fournisseur
            <br />
          </span>
        </div>
      </div>

      <div class="mt-8 font-dm-sans relative">
        <div
          class="bg-indigo-600 px-3 py-1 rounded-full w-fit absolute left-[26%] -top-3"
        >
          <span class="text-white text-base font-bold"> Revente </span>
        </div>
        <div
          class="flex flex-col h-[250px] w-max-[250px] justify-center items-center rounded-r-lg bg-violet-50 border border-l-0 border-indigo-300 px-6 py-4"
        >
          <span class="font-bold text-3xl mt-2"> 1600 </span>
          <span class="font-bold text-base"> kWh/an </span>
          <span class="w-[160px] text-sm font-medium text-center h-[60px]">
            d’électricité vendue et injectée sur le réseau
          </span>
          <span
            class="w-[160px] mt-4 text-xs font-bold text-indigo-600 text-center h-[48px]"
          >
            Revente selon un tarif garanti sur 20 ans
          </span>
        </div>
      </div>

      <div
        class="bg-black px-3 py-1 text-center rounded-full absolute right-0 top-[265px] w-[418px]"
      >
        <span class="text-white text-base font-bold"> Vos économies </span>
      </div>
    </div>
  </div>
</template>
