<script setup lang="ts">
import { onMounted, inject } from 'vue'
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
  bboxRoof,
  displayGridOnMap,
  displayRoofShape,
  filterGrid,
  generateRectangleGrid,
  removeRoof2dShape,
  removeRoofGrid,
  removeRoofInteractionOn2dMap,
  substractSelectedSquaresFromGrid,
} from '@/services/roofInteractionHelper'
import {
  displaySolarPanel,
  filterSolarPanelByMaxSolarPanel as filterSolarPanelBySolarPanelNumber,
  removeSolarPanel,
  zoomToSolarPanel,
} from '@/services/solarPanel'
import { solarPanelFixtures } from '@/model/solarPanel.fixtures'
import { useRoofsStore } from '@/stores/roof'
import { useMapStore } from '@/stores/map'
import { useViewsStore } from '@/stores/views'

import { getCenter } from 'ol/extent'
import type { Grid } from '@/helpers/rectangleGrid'
import { solarPanelPlacement } from '@/algorithm/solarPanelPlacement'

const rennesApp = inject('rennesApp') as RennesApp
const layerStore = useLayersStore()
const simulationStore = useSimulationStore()
const addressStore = useAddressStore()
const solarPanelStore = useSolarPanelStore()
const roofsStore = useRoofsStore()
const mapStore = useMapStore()
const viewStore = useViewsStore()

onMounted(async () => {
  await rennesApp.initializeMap()
  await updateActiveMap()
  await updateLayersVisibility()
  createMapInteractions(rennesApp)
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

async function setupGridInstallation() {
  //force synchrone switch for adding openlayer interaction, update the store
  await rennesApp.maps.setActiveMap('ol')
  await mapStore.activate2d()
  if (addressStore.latitude !== 0 && addressStore.longitude !== 0) {
    await layerStore.enableLayer(RENNES_LAYER.roofSquaresArea)
    await layerStore.enableLayer(RENNES_LAYER.roofShape)
    let roofShape = roofsStore.getFeaturesOfSelectedPanRoof()
    displayRoofShape(rennesApp, roofShape)
    let bboxOnRoof = bboxRoof(roofShape)
    let grid: Grid = generateRectangleGrid(roofShape, bboxOnRoof)
    let { grid: filterGeomGrid, matrix: gridMatrix } = filterGrid(
      roofShape,
      grid
    )
    roofsStore.gridMatrix = gridMatrix
    displayGridOnMap(rennesApp, filterGeomGrid.featureCollection)
    addRoofInteractionOn2dMap(rennesApp)
    rennesApp.getOpenlayerMap().getView().setZoom(22)
    rennesApp.getOpenlayerMap().getView().setCenter(getCenter(bboxOnRoof))
  }
}

async function setupSolarPanelFixtures() {
  substractSelectedSquaresFromGrid(roofsStore.gridMatrix!)
  console.log(
    'matrix for placement algo (filter by remove box): ',
    roofsStore.gridMatrix!
  )
  const result = solarPanelPlacement(roofsStore.gridMatrix!)
  console.log(result.orientation)
  console.log(result.solarPanels)
  // convert solarPanels to solarPanelModel
  const sampleSolarPanels = solarPanelFixtures()
  solarPanelStore.maxNumberSolarPanel = sampleSolarPanels.length
  solarPanelStore.currentNumberSolarPanel = sampleSolarPanels.length
  await displaySolarPanel(rennesApp, sampleSolarPanels)
  await layerStore.enableLayer(RENNES_LAYER.solarPanel)
  // Zoom to solar panel
  await mapStore.activate3d()
  await zoomToSolarPanel(rennesApp)
}

simulationStore.$subscribe(async () => {
  if (
    simulationStore.currentStep === 2 &&
    simulationStore.currentSubStep == 1
  ) {
    await setupGridInstallation()
  } else if (
    simulationStore.currentStep === 2 &&
    simulationStore.currentSubStep == 2
  ) {
    await setupSolarPanelFixtures()
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

layerStore.$subscribe(async () => {
  await updateLayersVisibility()
})

viewStore.$subscribe(async () => {
  createMapInteractions(rennesApp)
})

mapStore.$subscribe(async () => {
  if (rennesApp.maps.activeMap.name !== mapStore.activeMap) {
    await rennesApp.maps.setActiveMap(mapStore.activeMap)
  }
  if (rennesApp.maps.activeMap.getViewpointSync() !== mapStore.viewPoint!) {
    await rennesApp.maps.activeMap.gotoViewpoint(mapStore.viewPoint!)
  }
})
</script>

<template>
  <UiMap></UiMap>
  <NavigationButtons />
</template>
