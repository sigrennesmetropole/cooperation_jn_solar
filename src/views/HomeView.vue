<script setup lang="ts">
import ButtonWithCheckboxBegin from '@/components/home/ButtonWithCheckboxBegin.vue'
import { FooterArea } from '@sigrennesmetropole/cooperation_jn_common_ui'
import UiSolarPanelTitle from '@/components/ui/UiSolarPanelTitle.vue'
import ProcessSteps from '@/components/home/ProcessSteps.vue'
import { onBeforeMount } from 'vue'
import { usePanelsStore } from '@/stores/panels'

const panelsStore = usePanelsStore()

onBeforeMount(() => {
  panelsStore.setTypePanelDisplay('left')
})
</script>

<template>
  <UiSolarPanelTitle></UiSolarPanelTitle>
  <ProcessSteps></ProcessSteps>
  <ButtonWithCheckboxBegin />
  <FooterArea class="mt-auto"></FooterArea>
</template>
