<script setup lang="ts">
import { useViewsStore } from '@/stores/views'
import { onBeforeMount } from 'vue'
import { viewList } from '@/model/views.model'
import { usePanelsStore } from '@/stores/panels'

const viewStore = useViewsStore()
const panelsStore = usePanelsStore()

onBeforeMount(async () => {
  viewStore.setCurrentView(viewList['roof-selection'])
  panelsStore.setTypePanelDisplay('left')
  panelsStore.isInformationPanelShown = false
})
</script>

<template>
  <div></div>
</template>
