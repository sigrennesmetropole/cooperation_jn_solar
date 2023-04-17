<script setup lang="ts">
import noSolarPanel from '@/assets/illustrations/no-solar-panel.svg'
import home from '@/assets/icons/interface-white-house.svg'
</script>

<template>
  <div class="rounded-lg bg-slate-100 h-[402px] w-full pt-6 pb-8">
    <div class="flex flex-col justify-center items-center gap-6">
      <img class="w-[354px] h-[161px] mx-6" :src="noSolarPanel" alt="" />
      <span class="font-dm-sans font-normal text-sm text-center px">
        Dans cette simulation, la surface favorable du pan de toit, déduction
        faite des obstacles saisis, n'est pas suffisante pour accueillir une
        installation photovoltaïque.
      </span>
      <button
        class="bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
        @click="$router.push('/roof-selection')"
      >
        <img class="" :src="home" alt="" />

        <span class="font-dm-sans text-white text-base font-bold">
          Revenir à l'accueil
        </span>
      </button>
    </div>
  </div>
</template>
