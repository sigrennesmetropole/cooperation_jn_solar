<script setup lang="ts">
import { onMounted, inject } from 'vue'
import type { RennesApp } from '@/services/RennesApp'
import UiMap from '@/components/ui/UiMap.vue'
import {
  RENNES_LAYER,
  RENNES_LAYERNAMES,
  useLayersStore,
} from '@/stores/layers'
import { viewList } from '@/model/views.model'
import type { Layer } from '@vcmap/core'
import NavigationButtons from '@/components/map/buttons/NavigationButtons.vue'
import { useSimulationStore } from '@/stores/simulations'
import { useAddressStore } from '@/stores/address'
import {
  addRoofInteractionOn2dMap,
  displayGridOnMap,
  displayRoofShape,
  generateRandomRoofShape,
  generateSquareGrid,
  removeRoof2dShape,
  removeRoofGrid,
  removeRoofInteractionOn2dMap,
} from '@/services/roofInteraction'
import { useViewsStore } from '@/stores/views'
import { useRoofsStore } from '@/stores/roof'

const rennesApp = inject('rennesApp') as RennesApp
const layerStore = useLayersStore()
const simulationStore = useSimulationStore()
const addressStore = useAddressStore()
const viewStore = useViewsStore()
const roofsStore = useRoofsStore()

onMounted(async () => {
  await rennesApp.initializeMap()
  await updateActiveMap()
  await updateLayersVisibility()
})

// onUnmounted(() => {
//   rennesApp.destroy()
// })

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

simulationStore.$subscribe(async () => {
  if (
    simulationStore.currentStep === 2 &&
    simulationStore.currentSubStep == 1
  ) {
    await rennesApp.maps.setActiveMap('ol')
    if (addressStore.geolocAddress !== null) {
      await layerStore.enableLayer(RENNES_LAYER.roofSquaresArea)
      await layerStore.enableLayer(RENNES_LAYER.roofShape)
      let roofShape = generateRandomRoofShape(addressStore.geolocAddress)
      displayRoofShape(rennesApp, roofShape)
      let grid = await generateSquareGrid(rennesApp, roofShape)
      displayGridOnMap(rennesApp, grid)
      addRoofInteractionOn2dMap(rennesApp)
    }
  } else {
    await layerStore.disableLayer(RENNES_LAYER.roofSquaresArea)
    removeRoofInteractionOn2dMap(rennesApp)
    removeRoofGrid(rennesApp)
    removeRoof2dShape(rennesApp)
    await rennesApp.maps.setActiveMap('cesium')
  }
})

viewStore.$subscribe(async () => {
  if (viewStore.currentView === viewList['roof-selection']) {
    await layerStore.enableLayer(RENNES_LAYER.building)
    await layerStore.disableLayer(RENNES_LAYER.roof3d)
  } else {
    await layerStore.enableLayer(RENNES_LAYER.building)
    await layerStore.disableLayer(RENNES_LAYER.roof3d)
  }
})

layerStore.$subscribe(async () => {
  await updateLayersVisibility()
})

roofsStore.$subscribe(async () => {})
</script>

<template>
  <UiMap></UiMap>
  <NavigationButtons />
</template>
