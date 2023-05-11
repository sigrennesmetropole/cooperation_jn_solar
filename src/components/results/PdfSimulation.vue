<script setup lang="ts">
// @ts-ignore : html2pdf.js is not recognized
import html2pdf from 'html2pdf.js'
import iconDownload from '@/assets/icons/icon-download-white.svg'
import type { RoofSurfaceModel } from '@/model/roof.model'
import type { AutocalsolResult as AutocalsolResultType } from '@/model/autocalsol.model'
import UiSpinnerLoading from '@/components/ui/UiSpinnerLoading.vue'
import { ref } from 'vue'
import PdfPage1 from '@/components/pdf/PdfPage1.vue'
import PdfPage2 from '@/components/pdf/PdfPage2.vue'
import PdfPage3 from '@/components/pdf/PdfPage3.vue'
import PdfPage4 from '@/components/pdf/PdfPage4.vue'
import PdfPage5 from '@/components/pdf/PdfPage5.vue'
import PdfPage6 from '@/components/pdf/PdfPage6.vue'

const isLoading = ref(false)

const props = defineProps<{
  selectedRoof: RoofSurfaceModel
  autocalsolResult: AutocalsolResultType
}>()

async function exportToPDF() {
  isLoading.value = true
  setTimeout(async () => {
    await html2pdf()
      .set({
        filename: 'simulation-solaire-rennes.pdf',
        jsPDF: { unit: 'px', format: [900, 1130], orientation: 'portrait' },
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

.page-break-after {
  page-break-after: always;
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
      <PdfPage1 />
      <div class="page-break"></div>
      <PdfPage2 :selectedRoof="props.selectedRoof" />
      <div class="page-break"></div>
      <PdfPage3 :autocalsolResult="props.autocalsolResult" />
      <div class="page-break"></div>
      <PdfPage4 :autocalsolResult="props.autocalsolResult" />
      <div class="page-break"></div>
      <PdfPage5 />
      <div class="page-break"></div>
      <PdfPage6 />
    </div>
  </div>
</template>
