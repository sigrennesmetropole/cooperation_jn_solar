<script setup lang="ts">
import { useViewsStore } from '@/stores/views'
import { inject, onMounted } from 'vue'
import { viewList } from '@/model/views.model'
import { usePanelsStore } from '@/stores/panels'
import { addGenericListenerForUpdatePositions } from '@/services/AboveMapService'
import type { RennesApp } from '@/services/RennesApp'
const rennesApp = inject('rennesApp') as RennesApp

const viewStore = useViewsStore()
const panelsStore = usePanelsStore()

onMounted(() => {
  viewStore.setCurrentView(viewList['districts'])
  panelsStore.setTypePanelDisplay('left')
  panelsStore.isCompletelyHidden = true
  addGenericListenerForUpdatePositions(rennesApp)
})
</script>

<template>
  <div></div>
</template>
