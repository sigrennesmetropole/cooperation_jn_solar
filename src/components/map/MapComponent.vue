<script setup lang="ts">
import { onMounted, inject } from 'vue'
import type { RennesApp } from '@/services/RennesApp'
import UiMap from '@/components/ui/UiMap.vue'
import {
  RENNES_LAYER,
  RENNES_LAYERNAMES,
  useLayersStore,
} from '@/stores/layers'
import type { Layer } from '@vcmap/core'
import NavigationButtons from '@/components/map/buttons/NavigationButtons.vue'
import { useSimulationStore } from '@/stores/simulations'
import { useAddressStore } from '@/stores/address'
import { useSolarPanelStore } from '@/stores/solarPanels'
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
import {
  displaySolarPanel,
  filterSolarPanelByMaxSolarPanel,
  removeSolarPanel,
  zoomToSolarPanel,
} from '@/services/solarPanel'
import { solarPanelFixtures } from '@/model/solarPanel.fixtures'

const rennesApp = inject('rennesApp') as RennesApp
const layerStore = useLayersStore()
const simulationStore = useSimulationStore()
const addressStore = useAddressStore()
const solarPanelStore = useSolarPanelStore()

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
  } else if (
    simulationStore.currentStep === 2 &&
    simulationStore.currentSubStep == 2
  ) {
    const sampleSolarPanels = solarPanelFixtures()
    solarPanelStore.maxNumberSolarPanel = sampleSolarPanels.length
    solarPanelStore.currentNumberSolarPanel = sampleSolarPanels.length
    await displaySolarPanel(rennesApp, sampleSolarPanels)
    await layerStore.enableLayer(RENNES_LAYER.solarPanel)
    // Hide the solar panel
    // Zoom to solar panel
    await rennesApp.maps.setActiveMap('cesium')
    await zoomToSolarPanel(rennesApp)
  } else {
    await layerStore.disableLayer(RENNES_LAYER.roofSquaresArea)
    removeSolarPanel(rennesApp)
    removeRoofInteractionOn2dMap(rennesApp)
    removeRoofGrid(rennesApp)
    removeRoof2dShape(rennesApp)
    await rennesApp.maps.setActiveMap('cesium')
  }
})

solarPanelStore.$subscribe(async () => {
  console.log(
    `solarPanelStore.currentNumberSolarPanel: ${solarPanelStore.currentNumberSolarPanel}`
  )
  await filterSolarPanelByMaxSolarPanel(
    rennesApp,
    solarPanelStore.currentNumberSolarPanel
  )
})

layerStore.$subscribe(async () => {
  await updateLayersVisibility()
})
</script>

<template>
  <UiMap></UiMap>
  <NavigationButtons />
</template>
