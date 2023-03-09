<script setup lang="ts">
import { useViewsStore } from '@/stores/views'
import { onMounted } from 'vue'
import { viewList } from '@/model/views.model'
import { usePanelsStore } from '@/stores/panels'

const viewStore = useViewsStore()
const panelsStore = usePanelsStore()

onMounted(() => {
  viewStore.setCurrentView(viewList['roof-selection'])
  panelsStore.setTypePanelDisplay('left')
  panelsStore.isCompletelyHidden = true
})
</script>

<template>
  <div></div>
</template>
