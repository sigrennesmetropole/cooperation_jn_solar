<script setup lang="ts">
import { onMounted, onUnmounted, inject } from 'vue'
import type { RennesApp } from '@/services/RennesApp'
import UiMap from '@/components/ui/UiMap.vue'
import { RENNES_LAYERNAMES, useLayersStore } from '@/stores/layers'
import type { Layer } from '@vcmap/core'
import NavigationButtons from '@/components/map/buttons/NavigationButtons.vue'
import { usePanelsStore } from '@/stores/panels'

const rennesApp = inject('rennesApp') as RennesApp
const layerStore = useLayersStore()
const panelStore = usePanelsStore()

onMounted(async () => {
  await rennesApp.initializeMap()
  await updateActiveMap()
  await updateLayersVisibility()
})

onUnmounted(() => {
  rennesApp.destroy()
})

async function updateActiveMap() {
  await rennesApp.maps.setActiveMap('cesium')
}

async function updateLayersVisibility() {
  for (const layer of RENNES_LAYERNAMES) {
    await setLayerVisible(layer, layerStore.visibilities[layer])
  }
}

async function setLayerVisible(layerName: string, visible: boolean) {
  const layer: Layer = rennesApp.maps.layerCollection.getByKey(layerName)
  if (visible) {
    await layer?.activate()
  } else {
    layer?.deactivate()
  }
}
</script>

<template>
  <UiMap></UiMap>
  <NavigationButtons
    :class="panelStore.typePanelDisplay == 'right' ? 'mr-[440px]' : ''"
  />
</template>
