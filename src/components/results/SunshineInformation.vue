<script setup lang="ts">
import potentiel from '@/assets/icons/potentiel.svg'
import { useRoofsStore } from '@/stores/roof'
import { useAddressStore } from '@/stores/address'
import RoofInformationsBox from '@/components/simulation/RoofInformationsBox.vue'

const addressStore = useAddressStore()
const roofsStore = useRoofsStore()

const address = addressStore.address

let selectedRoof = roofsStore.getRoofSurfaceModelOfSelectedPanRoof()
//TODO : remove this line when not testing
selectedRoof = {
  surface_id: 53123,
  values: [13.832112, 74.012886, 12.155002, 0],
  favorable: 10,
  total: 87,
  orientation: 'EST',
  azimuth: 80,
  inclinaison: 1,
}
</script>

<template>
  <div
    class="flex flex-col gap-3 w-full h-fit bg-white rounded-xl p-6 mx-auto shadow-md font-dm-sans"
  >
    <div class="flex flex-row justify-center items-center gap-2">
      <img :src="potentiel" alt="" class="w-11 h-10" />
      <span class="font-bold text-2xl"> Votre ensoleillement </span>
    </div>

    <div class="px-2 mt-2">
      <div class="font-normal text-xs mb-4">
        {{ address }}
      </div>

      <RoofInformationsBox :roofSurface="selectedRoof" :isDisplayBox="false" />
    </div>
  </div>
</template>
