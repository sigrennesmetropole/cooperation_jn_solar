<script setup lang="ts">
import PdfFooter from '@/components/pdf/PdfFooter.vue'
import PdfHeader from '@/components/pdf/PdfHeader.vue'
import SunshineInformation from '@/components/results/SunshineInformation.vue'
import ConsumptionInformation from '@/components/results/ConsumptionInformation.vue'
import type { RoofSurfaceModel } from '@/model/roof.model'
import { useSolarPanelStore } from '@/stores/solarPanels'
import ProductionInformationText from '@/components/results/ProductionInformationText.vue'
// import { useAddressStore } from '@/stores/address'
import testscreen from '@/components/pdf/testscreen.png'

const props = defineProps<{
  selectedRoof: RoofSurfaceModel
}>()

const solarPanelStore = useSolarPanelStore()

// const addressStore = useAddressStore()
// const blob = addressStore.screenshotAddress
// let urlImg: null | string = null
// if (blob !== null) urlImg = URL.createObjectURL(blob)

const urlImg = testscreen
</script>

<template>
  <div class="w-[90%] font-dm-sans">
    <!-- Header -->
    <PdfHeader />

    <!-- Content -->
    <div class="w-[100%] flex flex-row font-medium gap-6 items-center mt-20">
      <div class="w-[50%] flex flex-col">
        <SunshineInformation
          v-if="props.selectedRoof !== undefined"
          :selected-roof="props.selectedRoof"
          :isPdf="true"
        />
        <ConsumptionInformation :isPdf="true" class="mt-5" />
      </div>
      <div class="w-[50%] flex flex-col">
        <div
          class="flex flex-col gap-3 w-full h-fit bg-white rounded-xl p-6 mx-auto font-dm-sans"
        >
          <ProductionInformationText
            v-if="solarPanelStore.currentNumberSolarPanel > 0"
            :currentNumSolarPanel="solarPanelStore.currentNumberSolarPanel"
            :isPdf="props.isPdf"
          />
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-3 w-full h-fit bg-white rounded-xl p-6 mx-auto mt-5"
    >
      <img
        v-if="urlImg !== null"
        :src="urlImg"
        alt=""
        class="h-[300px] rounded-md mt-5 object-fill"
      />
    </div>

    <!-- Footer -->
    <div class="mt-[70px]">
      <PdfFooter :numPage="2"></PdfFooter>
    </div>
  </div>
</template>
