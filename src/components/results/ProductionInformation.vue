<script setup lang="ts">
import { defineProps } from 'vue'
import { useAddressStore } from '@/stores/address'
import ProductionInformationText from '@/components/results/ProductionInformationText.vue'

const props = defineProps<{
  currentNumSolarPanel: number
  isPdf: boolean
}>()

const addressStore = useAddressStore()
const blob = addressStore.screenshotAddress
let urlImg: null | string = null
if (blob !== null) urlImg = URL.createObjectURL(blob)
</script>

<template>
  <div
    class="flex flex-col gap-3 w-full h-fit bg-white rounded-xl p-6 mx-auto font-dm-sans"
    :class="props.isPdf ? '' : 'shadow-md'"
  >
    <ProductionInformationText
      :currentNumSolarPanel="props.currentNumSolarPanel"
      :isPdf="props.isPdf"
    />

    <img
      v-if="urlImg !== null"
      :src="urlImg"
      alt=""
      class="h-[206px] rounded-md mt-5 object-fill"
    />
  </div>
</template>
