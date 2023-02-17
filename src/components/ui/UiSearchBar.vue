<script lang="ts" setup>
import { ref } from 'vue'
import iconTarget from '@/assets/icons/target.svg'
import iconMagnifyingGlass from '@/assets/icons/magnifying-glass.svg'

const search = ref('')
</script>

<template>
  <div class="flex flex-row items-center h-11 shadow-lg rounded p-0">
    <div class="flex flex-row items-center justify-center w-10 h-full">
      <img :src="iconTarget" class="w-4 h-4" />
    </div>
    <input
      class="w-full h-full rounded-l-none rounded-r-lg p-2 text-base font-medium font-dm-sans placeholder-black"
      type="text"
      placeholder="Entrez votre adresse ici"
      v-model="search"
    />
    <div
      class="flex flex-row items-center justify-center w-11 h-full cursor-pointer border-l border-neutral-200"
    >
      <img :src="iconMagnifyingGlass" class="w-4 h-4" />
    </div>
  </div>
</template>
