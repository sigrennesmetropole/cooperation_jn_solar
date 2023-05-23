<script setup lang="ts">
import type { RoofSurfaceModel } from '@/model/roof.model'
import type { AutocalsolResult as AutocalsolResultType } from '@/model/autocalsol.model'
import UiSpinnerLoading from '@/components/ui/UiSpinnerLoading.vue'
import { ref } from 'vue'
import { apiPdfService } from '@/services/api-pdf'
import { UiButton } from '@sigrennesmetropole/cooperation_jn_common_ui'
import IconDownload from '@/assets/icons/components/IconDownload.vue'

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
    <UiButton
      class="ui-btn-primary shadow-md gap-3 px-4 py-3 h-12 w-fit items-center ml-auto"
      :icon="IconDownload"
      :disabled="isLoading"
      @click="exportToPDF()"
      id="nextButtonPopup"
    >
      <span class="font-dm-sans font-medium text-base">
        Télécharger en PDF
      </span>
      <UiSpinnerLoading v-if="isLoading" />
    </UiButton>
  </div>
</template>
