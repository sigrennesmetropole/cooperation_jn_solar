<script setup lang="ts">
import ButtonWithCheckboxBegin from '@/components/home/ButtonWithCheckboxBegin.vue'
import FooterAreaLink from '@/components/home/FooterAreaLink.vue'
import UiSolarPanelTitle from '@/components/ui/UiSolarPanelTitle.vue'
import ProcessSteps from '@/components/home/ProcessSteps.vue'
import TermsOfUsePopup from '@/components/home/TermsOfUsePopup.vue'
import { inject, onMounted } from 'vue'
import { usePanelsStore } from '@/stores/panels'
import { useViewsStore } from '@/stores/views'
import { viewList } from '@/model/views.model'
import { usePopUpStore } from '@/stores/popUpStore'
import type { RennesApp } from '@/services/RennesApp'
import { applyInstallationStyle } from '@/services/installationService'
import { useMapStore } from '@/stores/map'

const panelsStore = usePanelsStore()
const viewStore = useViewsStore()
const popUpStore = usePopUpStore()
const rennesApp = inject('rennesApp') as RennesApp
const mapStore = useMapStore()

// onBeforeMount(async() => {
//   await layerStore.enableLayer(RENNES_LAYER.installations)
// })

mapStore.$subscribe(async () => {
  if (mapStore.isInitializeMap) {
    await applyInstallationStyle(rennesApp)
  }
})

onMounted(async () => {
  viewStore.setCurrentView(viewList['home'])
  panelsStore.setTypePanelDisplay('left')
  panelsStore.isCompletelyHidden = false
  await applyInstallationStyle(rennesApp)
})
</script>

<template>
  <UiSolarPanelTitle></UiSolarPanelTitle>
  <ProcessSteps></ProcessSteps>
  <ButtonWithCheckboxBegin />
  <TermsOfUsePopup
    v-if="popUpStore.isDisplayTermsOfUse"
    @close="popUpStore.closeTermsOfUse()"
  />
  <FooterAreaLink></FooterAreaLink>
</template>
