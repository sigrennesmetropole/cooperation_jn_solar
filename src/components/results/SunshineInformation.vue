<script setup lang="ts">
import potentiel from '@/assets/icons/potentiel.svg'
import { useAddressStore } from '@/stores/address'
import RoofInformationsBox from '@/components/simulation/RoofInformationsBox.vue'
import type { RoofSurfaceModel } from '@/model/roof.model'

const addressStore = useAddressStore()

const props = defineProps<{
  selectedRoof: RoofSurfaceModel
}>()
</script>

<template>
  <div
    class="flex flex-col gap-3 w-full h-fit bg-white rounded-xl mx-auto font-dm-sans shadow-md p-6"
  >
    <div class="flex flex-row items-center gap-2 ml-1">
      <img :src="potentiel" alt="" class="w-11 h-10" />
      <span class="font-bold text-2xl"> Votre ensoleillement </span>
    </div>

    <div class="px-2 mt-2">
      <div class="font-normal text-xs mb-4" id="div-address">
        {{ addressStore.address }}
      </div>

      <RoofInformationsBox
        :roofSurface="props.selectedRoof"
        :isDisplayBox="false"
      />
    </div>
  </div>
</template>
