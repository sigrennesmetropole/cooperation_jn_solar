<script setup lang="ts">
import { onMounted } from 'vue'
import { usePanelsStore } from '@/stores/panels'

const panelStore = usePanelsStore()

onMounted(() => {
  panelStore.setTypePanelDisplay('right')
})
</script>

<template>Step Sunshine</template>
