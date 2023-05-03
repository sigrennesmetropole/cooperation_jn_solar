<script setup lang="ts">
import iconDelete from '@/assets/icons/icon-delete.svg'
import { useRouter } from 'vue-router'
import { resetStoresAndRedirect } from '@/services/resetStores'

const router = useRouter()

function displayErrorMessage() {
  if (
    window.confirm(
      'Cette action vous renvoie en début de simulation, vos données actuelles seront effacées'
    )
  ) {
    resetStoresAndRedirect()
    router.push('/roof-selection')
  }
}
</script>
<template>
  <div
    class="flex flex-col items-center gap-6 border-b-[1px] border-neutral-100 h-[70px] pb-6"
  >
    <div class="flex flex-row items-stretch py-0 px-6 gap-3">
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
  </div>
</template>
