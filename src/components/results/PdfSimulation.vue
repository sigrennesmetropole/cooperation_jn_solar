<script setup lang="ts">
// @ts-ignore : html2pdf.js is not recognized
import html2pdf from 'html2pdf.js'
import iconDownload from '@/assets/icons/icon-download-white.svg'
import type { RoofSurfaceModel } from '@/model/roof.model'
import SunshineInformation from '@/components/results/SunshineInformation.vue'
import ConsumptionInformation from '@/components/results/ConsumptionInformation.vue'
import type { AutocalsolResult as AutocalsolResultType } from '@/model/autocalsol.model'
import GoFurther from '@/components/results/GoFurther.vue'
import SolarCoop from '@/components/results/SolarCoop.vue'
import EnergiesRennes from '@/components/results/EnergiesRennes.vue'
import AutocalsolResultGlobal from '@/components/results/AutocalsolResultGlobal.vue'
import economies from '@/assets/icons/economies.svg'
import AutocalsolResultGraph from '@/components/results/AutocalsolResultGraph.vue'
import UiSpinnerLoading from '@/components/ui/UiSpinnerLoading.vue'
import { ref } from 'vue'
import { useSolarPanelStore } from '@/stores/solarPanels'
import ProductionInformation from '@/components/results/ProductionInformation.vue'

const isLoading = ref(false)

const props = defineProps<{
  selectedRoof: RoofSurfaceModel
  autocalsolResult: AutocalsolResultType
}>()

const solarPanelStore = useSolarPanelStore()

async function exportToPDF() {
  isLoading.value = true
  setTimeout(async () => {
    await html2pdf()
      .set({
        filename: 'simulation-solaire-rennes.pdf',
      })
      .from(document.getElementById('element-to-convert'))
      .save()
      .then(() => {
        isLoading.value = false
      })
  }, 100)
}
</script>

<style>
.page-break {
  page-break-before: always;
}

@media screen {
  .pdf-container #element-to-convert {
    visibility: hidden;
    display: none;
    position: absolute;
  }
}

@media print {
  .pdf-container #element-to-convert {
    visibility: visible;
    position: static;
  }
}
</style>

<template>
  <div ref="document" class="pdf-container">
    <button
      class="bg-black text-white rounded-lg py-4 px-3 flex flex-row gap-3 w-fit items-center ml-auto"
      @click="exportToPDF()"
      :disabled="isLoading"
    >
      <img :src="iconDownload" alt="" />
      <span class="font-dm-sans font-medium text-base">
        Télécharger en PDF
      </span>
      <UiSpinnerLoading v-if="isLoading" />
    </button>

    <div
      id="element-to-convert"
      class="flex flex-col items-center h-full bg-slate-100"
    >
      <h1 class="font-bold text-3xl">Résultat de votre simulation</h1>
      <div class="w-[90%] flex flex-row font-medium gap-6 ml-2 mr-2 mt-10">
        <div class="w-[50%] flex flex-col">
          <SunshineInformation
            v-if="props.selectedRoof !== undefined"
            :selected-roof="props.selectedRoof"
            :isPdf="true"
          />
        </div>
        <div class="w-[50%] flex flex-col">
          <ConsumptionInformation :isPdf="true" />
          <ProductionInformation
            class="mt-2"
            :isPdf="true"
            v-if="solarPanelStore.currentNumberSolarPanel > 0"
            :current-num-solar-panel="solarPanelStore.currentNumberSolarPanel"
          />
        </div>
      </div>

      <div class="page-break"></div>

      <div
        class="flex flex-col gap-2 w-[90%] h-fit bg-white rounded-xl p-6 mt-10"
      >
        <div class="flex flex-row items-center gap-2">
          <img :src="economies" alt="" class="w-11 h-10" />
          <span class="font-bold text-2xl"> Votre production d'énergie </span>
        </div>

        <AutocalsolResultGlobal
          :injected="props.autocalsolResult.consoAnnualInjected"
          :autoConsumed="props.autocalsolResult.consoAnnualAutoConsumed"
          :production="
            props.autocalsolResult.consoAnnualInjected +
            props.autocalsolResult.consoAnnualAutoConsumed
          "
          :isPdf="true"
        />
      </div>

      <div class="page-break"></div>

      <div
        class="flex flex-col gap-2 w-[90%] h-fit bg-white rounded-xl p-6 mt-10"
      >
        <span class="font-bold text-xl mt-10">
          Comment réduire au maximum sa facture d'électricité ?
        </span>
        <p class="font-normal text-sm">
          Votre production solaire varie selon la course du soleil. La nuit,
          votre consommation est intégralement soutirée au réseau. Pour réduire
          au maximum votre facture d'électricité, il vous faut adapter vos
          habitudes de consommation, par exemple mettre en route vos appareils
          électriques en journée au moment de la production photovoltaïque.
        </p>

        <AutocalsolResultGraph
          :prodByHour="props.autocalsolResult.prodByHour"
          :consoByHour="props.autocalsolResult.consoByHour"
        />
      </div>

      <div class="page-break"></div>

      <div
        class="font-dm-sans font-medium flex flex-col gap-8 w-[90%] h-fit bg-white rounded-xl p-6 mt-10"
      >
        <GoFurther :isPdf="true"></GoFurther>
      </div>

      <div class="page-break"></div>

      <div
        class="font-dm-sans font-medium flex flex-col gap-8 w-[90%] bg-white rounded-xl p-6 mt-10 mb-[300px]"
      >
        <SolarCoop :isPdf="true"></SolarCoop>
        <EnergiesRennes :isPdf="true"></EnergiesRennes>
      </div>
    </div>
  </div>
</template>
