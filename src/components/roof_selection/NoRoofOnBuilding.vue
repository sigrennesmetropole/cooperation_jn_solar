<script setup lang="ts">
import noSolarPanel from '@/assets/illustrations/no-solar-panel.svg'
</script>

<template>
  <div class="rounded-lg bg-slate-100 h-fit mt-20 w-full pt-6 pb-8">
    <div class="flex flex-col justify-center items-center gap-6">
      <img class="w-[354px] h-[161px] mx-6" :src="noSolarPanel" alt="" />
      <span class="font-dm-sans font-normal text-sm text-center px">
        Sur ce bâtiment, aucun pan de toit ne dispose d'une surface favorable
        pour accueillir une installation photovoltaïque.
      </span>
    </div>
  </div>
</template>
