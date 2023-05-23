<script setup lang="ts">
import fail from '@/assets/illustrations/fail.svg'
import { UiButton } from '@sigrennesmetropole/cooperation_jn_common_ui'
</script>

<template>
  <div
    class="flex flex-col gap-6 w-[640px] h-fit bg-white rounded-xl p-6 mx-auto shadow-md mt-[150px]"
  >
    <div class="flex flex-col items-center gap-6">
      <img :src="fail" alt="" class="w-[354px] h-[180px]" />
      <div class="flex flex-col gap-2">
        <h2 class="font-dm-sans font-bold text-2xl text-center">Oups...</h2>
        <p class="font-dm-sans font-normal text-base text-center">
          les services interrogés sont indisponibles.<br />
          Merci de réessayer dans quelques instants...
        </p>
      </div>
      <UiButton
        class="ui-btn-primary shadow-md gap-3 px-4 py-3 shrink-0 grow-0 visible w-fit"
        @click="$emit('retry-end-simulation')"
        id="button-linky"
      >
        <span class="text-white text-base font-medium">Réessayer</span>
      </UiButton>
    </div>
  </div>
</template>
