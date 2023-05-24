<script setup lang="ts">
import iconDownload from '@/assets/icons/icon-download-white.svg'
import type { RoofSurfaceModel } from '@/model/roof.model'
import type { AutocalsolResult as AutocalsolResultType } from '@/model/autocalsol.model'
import UiSpinnerLoading from '@/components/ui/UiSpinnerLoading.vue'
import { ref } from 'vue'
import { apiPdfService } from '@/services/api-pdf'

const isLoading = ref(false)

const props = defineProps<{
  selectedRoof: RoofSurfaceModel
  autocalsolResult: AutocalsolResultType
}>()

async function exportToPDF() {
  isLoading.value = true
  try {
    const pdfBuffer = await apiPdfService.getPdf(props.autocalsolResult)
    const blob = new Blob([pdfBuffer], { type: 'application/pdf' })
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = 'solar-simulation.pdf'
    link.click()
  } catch (error) {
    console.error('Error downloading PDF:', error)
    isLoading.value = false
  } finally {
    isLoading.value = false
  }
}
</script>

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
  </div>
</template>
