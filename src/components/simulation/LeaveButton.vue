<script setup lang="ts">
import iconDelete from '@/assets/icons/icon-delete.svg'
import { useRouter } from 'vue-router'
import { WINDOW_CONFIRM_MESSAGE } from '@/services/resetStores'

const router = useRouter()

function displayErrorMessage() {
  if (window.confirm(WINDOW_CONFIRM_MESSAGE)) {
    router.push('/roof-selection')
  }
}
</script>
<template>
  <div class="flex flex-row items-stretch py-5 px-6 gap-3">
    <span class="font-dm-sans font-bold text-base text-justify w-[325px]">
      Simuler une installation photovoltaïque
    </span>
    <button
      class="flex flex-row items-center pb-1 gap-2.5"
      @click="displayErrorMessage()"
    >
      <img :src="iconDelete" class="w-4 h-4" alt="" />
      <span class="font-dm-sans font-normal text-xs ml-auto">Quitter</span>
    </button>
  </div>
</template>
