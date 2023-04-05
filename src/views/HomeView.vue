<script setup lang="ts">
import ButtonWithCheckboxBegin from '@/components/home/ButtonWithCheckboxBegin.vue'
import FooterAreaLink from '@/components/home/FooterAreaLink.vue'
import UiSolarPanelTitle from '@/components/ui/UiSolarPanelTitle.vue'
import ProcessSteps from '@/components/home/ProcessSteps.vue'
import { onMounted, inject } from 'vue'
import { usePanelsStore } from '@/stores/panels'
import { useViewsStore } from '@/stores/views'
import { viewList } from '@/model/views.model'
import { viewStoreSubscribe } from '@/services/viewsService'
import type { RennesApp } from '@/services/RennesApp'

const panelsStore = usePanelsStore()
const viewStore = useViewsStore()
const rennesApp = inject('rennesApp') as RennesApp

onMounted(() => {
  viewStore.setCurrentView(viewList['home'])
  panelsStore.setTypePanelDisplay('left')
  viewStoreSubscribe(rennesApp)
})
</script>

<template>
  <UiSolarPanelTitle></UiSolarPanelTitle>
  <ProcessSteps></ProcessSteps>
  <ButtonWithCheckboxBegin />
  <FooterAreaLink></FooterAreaLink>
</template>
