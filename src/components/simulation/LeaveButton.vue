<script setup lang="ts">
import iconDelete from '@/assets/icons/icon-delete.svg'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <div
    class="flex flex-col items-center pt-6 gap-6 border-b-[1px] border-neutral-100 w-[450px] h-[70px]"
  >
    <div class="flex flex-row items-stretch py-0 px-6 gap-3">
      <span class="font-dm-sans font-bold text-base text-justify w-[325px]">
        Simuler une installation photovoltaïque
      </span>
      <button
        class="flex flex-row items-center pb-1 gap-2.5"
        @click="router.push('/roof-selection')"
      >
        <img :src="iconDelete" class="w-4 h-4" alt="" />
        <span class="font-dm-sans font-normal text-xs">Quitter</span>
      </button>
    </div>
  </div>
</template>
