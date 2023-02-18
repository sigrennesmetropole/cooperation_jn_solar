<script setup lang="ts">
import HourGlass from '@/assets/illustrations/hour-glass.svg'
</script>

<template>
  <div class="flex flex-row items-start p-0 gap-[18px]">
    <div class="flex flex-col items-start p-0 gap-6">
      <div class="flex flex-row items-center p-0 gap-6">
        <img class="w-32 h-16 max-w-none" :src="HourGlass" alt="" />
        <div class="flex flex-col justify-center items-start p-0">
          <p class="font-dm-sans text-xs font-bold">À l’horizon</p>
          <p class="font-dm-sans text-[44px] leading-10 font-bold">2030</p>
        </div>
      </div>
    </div>
  </div>
</template>
