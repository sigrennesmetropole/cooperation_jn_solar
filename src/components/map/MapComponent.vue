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
  initializeSolarPanelLayer,
  filterSolarPanelByMaxSolarPanel,
  removeSolarPanel,
  zoomToSolarPanel,
} from '@/services/solarPanel'
import { solarPanelGridToSolarPanelModel } from '@/services/solarPanel'
import { useRoofsStore } from '@/stores/roof'
import { useMapStore } from '@/stores/map'
import { useViewsStore } from '@/stores/views'
import { getCenter } from 'ol/extent'
import type { Grid } from '@/helpers/rectangleGrid'
import { solarPanelPlacement } from '@/algorithm/solarPanelPlacement'
import type { RoofSurfaceModel } from '@/model/roof.model'
import { saveScreenShot } from '@/services/screenshotService'
import ResetGridButton from '@/components/map/buttons/ResetGridButton.vue'
import { viewList } from '@/model/views.model'

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
    rennesApp.getOpenlayerMap().getView().setMinZoom(21)
    rennesApp.getOpenlayerMap().getView().setCenter(getCenter(bboxOnRoof))
  }
}

async function setupSolarPanel() {
  substractSelectedSquaresFromGrid(roofsStore.gridMatrix!)
  const result = solarPanelPlacement(roofsStore.gridMatrix!)
  const selectedRoofModel: RoofSurfaceModel =
    roofsStore.getRoofSurfaceModelOfSelectedPanRoof()!
  // Make sure the active map is the 3D one sot hat the height of solar panel
  // can be computed properly
  await rennesApp.maps.setActiveMap('cesium')
  mapStore.activate3d()
  const solarPanelModels = solarPanelGridToSolarPanelModel(
    rennesApp,
    roofsStore.gridMatrix!,
    result.solarPanels,
    result.orientation,
    selectedRoofModel.inclinaison,
    selectedRoofModel.azimuth
  )
  solarPanelStore.currentNumberSolarPanel = solarPanelModels.length
  solarPanelStore.solarPanels = solarPanelModels
  await displaySolarPanelLayer()
}

async function displaySolarPanelLayer() {
  const solarPanelLayer = await rennesApp.getLayerByKey(RENNES_LAYER.solarPanel)
  // Make sure that the solar panel layer has features
  if (
    solarPanelStore.maxNumberSolarPanel() > 0 &&
    solarPanelLayer.getFeatures().length == 0
  ) {
    await initializeSolarPanelLayer(rennesApp, solarPanelStore.solarPanels)
    await filterSolarPanelByMaxSolarPanel(
      rennesApp,
      solarPanelStore.currentNumberSolarPanel
    )
  }
  layerStore.enableLayer(RENNES_LAYER.solarPanel)
}

simulationStore.$subscribe(async () => {
  if (
    simulationStore.currentStep === 2 &&
    simulationStore.currentSubStep == 1
  ) {
    await setupGridInstallation()
  } else {
    await disableOlInteraction()
    mapStore.activate3d()

    if (
      simulationStore.currentStep === 2 &&
      simulationStore.currentSubStep == 2
    ) {
      await setupSolarPanel()
      await zoomToSolarPanel(rennesApp)
    } else if (
      simulationStore.currentStep === 3 &&
      simulationStore.currentSubStep == 1
    ) {
      saveScreenShot(rennesApp)
    }
  }

  layerStore.setLayerVisibility(
    RENNES_LAYER.solarPanel,
    simulationStore.shouldShowSolarPanelLayer()
  )
})

solarPanelStore.$subscribe(async () => {
  await filterSolarPanelByMaxSolarPanel(
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
  <ResetGridButton />
</template>
