<script setup lang="ts">
import SelectObstacles from '@/assets/illustrations/select-obstacles.jpg'
import deleted from '@/assets/icons/interface-delete.svg'
</script>

<template>
  <div>
    <img class="w-full" :src="SelectObstacles" alt="" />
    <div class="mt-6">
      <div class="flex flex-row items-center">
        <div
          class="flex flex-row justify-center items-center bg-rose-200 rounded-full w-2.5 h-2.5 mr-2"
        >
          <img class="w-1 h-1" :src="deleted" alt="" />
        </div>
        <p class="font-dm-sans text-sm font-normal">
          Zones ne pouvant pas accueillir de panneaux solaires.
        </p>
      </div>
    </div>
  </div>
</template>
