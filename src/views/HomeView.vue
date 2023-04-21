<script setup lang="ts">
import ButtonWithCheckboxBegin from '@/components/home/ButtonWithCheckboxBegin.vue'
import FooterAreaLink from '@/components/home/FooterAreaLink.vue'
import UiSolarPanelTitle from '@/components/ui/UiSolarPanelTitle.vue'
import ProcessSteps from '@/components/home/ProcessSteps.vue'
import { onMounted } from 'vue'
import { usePanelsStore } from '@/stores/panels'

const panelsStore = usePanelsStore()

onMounted(() => {
  panelsStore.setTypePanelDisplay('left')
  panelsStore.isCompletelyHidden = false
})
</script>

<template>
  <UiSolarPanelTitle></UiSolarPanelTitle>
  <ProcessSteps></ProcessSteps>
  <ButtonWithCheckboxBegin />
  <FooterAreaLink></FooterAreaLink>
</template>
