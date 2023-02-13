<script lang="ts" setup>
import { ref } from 'vue'
import iconTooltip from '@/assets/icons/icon-tooltip.svg'
import iconTooltipRed from '@/assets/icons/icon-tooltip-red.svg'

const displayTooltip = ref(false)
</script>

<template>
  <div class="absolute right-2 top-2 z-9 flex">
    <div
      class="w-12 h-12 bg-white rounded flex items-center justify-center cursor-pointer"
      @click="displayTooltip = !displayTooltip"
    >
      <img v-if="!displayTooltip" :src="iconTooltip" class="w-5 h-5" />
      <img v-else :src="iconTooltipRed" class="w-5 h-5" />
    </div>
  </div>
  <div class="absolute right-2 top-16 z-9 flex w-1/2" v-if="displayTooltip">
    <div class="bg-neutral-800 opacity-80 p-2 gap-3 rounded">
      <span class="text-sm font-normal text-neutral-200">
        Les niveaux de potentiel solaire sont estimés sur la base de calculs
        s'appuyant sur la maquette 3D métropolitaine et des données
        météorologiques.
      </span>
    </div>
  </div>
</template>
