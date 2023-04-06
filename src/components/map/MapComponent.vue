<script setup lang="ts">
import { onMounted, inject, computed } from 'vue'
import type { RennesApp } from '@/services/RennesApp'
import UiMap from '@/components/ui/UiMap.vue'
import {
  RENNES_LAYER,
  RENNES_LAYERNAMES,
  useLayersStore,
} from '@/stores/layers'
import { createMapInteractions } from '@/services/interactionUtils'
import type { Layer } from '@vcmap/core'
import NavigationButtons from '@/components/map/buttons/NavigationButtons.vue'
import { useSimulationStore } from '@/stores/simulations'
import { useAddressStore } from '@/stores/address'
import { useSolarPanelStore } from '@/stores/solarPanels'
import {
  addRoofInteractionOn2dMap,
  displayGridOnMap,
  displayRoofShape,
  generateSquareGrid,
  removeRoof2dShape,
  removeRoofGrid,
  removeRoofInteractionOn2dMap,
} from '@/services/roofInteractionHelper'
import {
  displaySolarPanel,
  filterSolarPanelByMaxSolarPanel as filterSolarPanelBySolarPanelNumber,
  removeSolarPanel,
  zoomToSolarPanel,
} from '@/services/solarPanel'
import { solarPanelFixtures } from '@/model/solarPanel.fixtures'
import { useViewsStore } from '@/stores/views'
import { useRoofsStore } from '@/stores/roof'
import { useMapStore } from '@/stores/map'
import { EventType } from '@vcmap/core'
import SelectDistrictInteraction from '@/services/selectDistrictInteractions'
import { viewList } from '@/model/views.model'

const rennesApp = inject('rennesApp') as RennesApp
const layerStore = useLayersStore()
const simulationStore = useSimulationStore()
const addressStore = useAddressStore()
const solarPanelStore = useSolarPanelStore()
const viewStore = useViewsStore()
const roofsStore = useRoofsStore()
const mapStore = useMapStore()

onMounted(async () => {
  await rennesApp.initializeMap()
  await updateActiveMap()
  await updateLayersVisibility()
  createMapInteractions(rennesApp)
})

// onUnmounted(() => {
//   rennesApp.destroy()
// })

const isRemoveExclusivelistView = computed(() => {
  return [
    viewList['roof-selected-information'],
    viewList['roof-selection'],
    viewList['districts'],
  ].includes(viewStore.currentView)
})

async function updateActiveMap() {
  await mapStore.activate3d()
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

async function disableOlInteraction() {
  if (mapStore.activeMap === 'ol') {
    await layerStore.disableLayer(RENNES_LAYER.roofSquaresArea)
    removeSolarPanel(rennesApp)
    removeRoofInteractionOn2dMap(rennesApp)
    removeRoofGrid(rennesApp)
    removeRoof2dShape(rennesApp)
  }
}

simulationStore.$subscribe(async () => {
  if (
    simulationStore.currentStep === 2 &&
    simulationStore.currentSubStep == 1
  ) {
    //force synchrone switch for adding openlayer interaction, update the store
    await rennesApp.maps.setActiveMap('ol')
    await mapStore.activate2d()
    if (addressStore.latitude !== 0 && addressStore.longitude !== 0) {
      await layerStore.enableLayer(RENNES_LAYER.roofSquaresArea)
      await layerStore.enableLayer(RENNES_LAYER.roofShape)
      let roofShape = roofsStore.selectedRoofFeature!
      displayRoofShape(rennesApp, roofShape)
      let grid = generateSquareGrid(rennesApp, roofShape)
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
    // Zoom to solar panel
    await mapStore.activate3d()
    await zoomToSolarPanel(rennesApp)
  } else {
    await disableOlInteraction()
    await mapStore.activate3d()
  }
})

solarPanelStore.$subscribe(async () => {
  await filterSolarPanelBySolarPanelNumber(
    rennesApp,
    solarPanelStore.currentNumberSolarPanel
  )
})

viewStore.$subscribe(async () => {
  createMapInteractions(rennesApp)
  if (viewStore.currentView == viewList['districts']) {
    await layerStore.enableLayer(RENNES_LAYER.iris)

    rennesApp.maps.eventHandler.featureInteraction.setActive(EventType.CLICK)
    const selectInteraction = new SelectDistrictInteraction(rennesApp)
    rennesApp.maps.eventHandler.addExclusiveInteraction(
      selectInteraction,
      () => {}
    )
  }
  if (!isRemoveExclusivelistView.value) {
    rennesApp.maps.eventHandler.removeExclusive()
  }
})

layerStore.$subscribe(async () => {
  await updateLayersVisibility()
})

mapStore.$subscribe(async () => {
  if (rennesApp.maps.activeMap.name !== mapStore.activeMap) {
    await rennesApp.maps.setActiveMap(mapStore.activeMap)
  }
  if (rennesApp.maps.activeMap.getViewpointSync() !== mapStore.viewPoint!) {
    await rennesApp.maps.activeMap.gotoViewpoint(mapStore.viewPoint!)
  }
})

roofsStore.$subscribe(async () => {})
</script>

<template>
  <UiMap></UiMap>
  <NavigationButtons />
</template>
