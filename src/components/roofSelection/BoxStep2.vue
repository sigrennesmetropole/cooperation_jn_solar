<script lang="ts" setup>
import iconInstallation from '@/assets/icons/installation.svg'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div
    class="flex flex-col items-center justify-center border border-slate-600 rounded"
  >
    <span class="mt-6 font-dm-sans font-normal text-xs"> Etape 2 </span>
    <img class="w-15 h-15 mt-2" :src="iconInstallation" alt="" />
    <span class="font-dm-sans font-bold text-lg text-center">
      Quelle production d’électricité <br />
      est envisageable ici ?
    </span>
    <button
      class="mt-1 mb-6 bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
      @click="router.push('/step-sunshine')"
    >
      <span class="text-white text-base font-medium">
        Simuler une installation photovoltaïque
      </span>
    </button>
  </div>
</template>
