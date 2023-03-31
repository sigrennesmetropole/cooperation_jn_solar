<script setup lang="ts">
import { useViewsStore } from '@/stores/views'
import { onMounted } from 'vue'
import { viewList } from '@/model/views.model'
import { usePanelsStore } from '@/stores/panels'

const viewStore = useViewsStore()
const panelsStore = usePanelsStore()

onMounted(() => {
  viewStore.setCurrentView(viewList['districts'])
  panelsStore.setTypePanelDisplay('left')
  panelsStore.isCompletelyHidden = true
})
console.log(viewStore.currentView)
</script>

<template>
  <div></div>
</template>
