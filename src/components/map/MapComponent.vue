<script setup lang="ts">
import { onMounted, inject } from 'vue'
import type { RennesApp } from '@/services/RennesApp'
import UiMap from '@/components/ui/UiMap.vue'
import {
  RENNES_LAYER,
  RENNES_LAYERNAMES,
  useLayersStore,
} from '@/stores/layers'
import {
  updateInteractionsOnMap,
  updateInteractionsStoreAfterViewChange,
} from '@/services/interactionUtils'
import type { Layer } from '@vcmap/core'
import NavigationButtons from '@/components/map/buttons/NavigationButtons.vue'
import { useSimulationStore } from '@/stores/simulations'
import { useAddressStore } from '@/stores/address'
import { useSolarPanelStore } from '@/stores/solarPanels'
import {
  addRoofInteractionOn2dMap,
  displayGridOnMap,
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
  getInclinaisonSolarPanel,
  getAzimuthSolarPanel,
} from '@/services/solarPanel'
import { solarPanelGridToSolarPanelModel } from '@/services/solarPanel'
import { useRoofsStore } from '@/stores/roof'
import { useMapStore } from '@/stores/map'
import { useViewsStore } from '@/stores/views'
import { useInteractionsStore } from '@/stores/interactions'
import { solarPanelPlacement } from '@/algorithm/solarPanelPlacement'
import type { RoofSurfaceModel } from '@/model/roof.model'
import { saveScreenShot } from '@/services/screenshotService'
import ResetGridButton from '@/components/map/buttons/ResetGridButton.vue'
import worker from '@/worker'
import { useEnedisStore } from '@/stores/enedis'
import { applyInstallationStyle } from '@/services/installationService'

const rennesApp = inject('rennesApp') as RennesApp
const layerStore = useLayersStore()
const simulationStore = useSimulationStore()
const addressStore = useAddressStore()
const solarPanelStore = useSolarPanelStore()
const roofsStore = useRoofsStore()
const mapStore = useMapStore()
const viewStore = useViewsStore()
const interactionsStore = useInteractionsStore()
const enedisStore = useEnedisStore()

onMounted(async () => {
  if (
    viewStore.currentView !== 'step-sunshine' ||
    (viewStore.currentView === 'step-sunshine' &&
      enedisStore.isEnedisRedirection)
  ) {
    await rennesApp.initializeMap()
  }
  await updateActiveMap()
  await updateLayersVisibility()
  // force initialization of the interaction on init page
  updateInteractionsStoreAfterViewChange(rennesApp)
  updateInteractionsOnMap(rennesApp)
  if (simulationStore.shouldShowSolarPanelLayer()) {
    await displaySolarPanelLayer()
  }
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

function displayGridAndAddInteractions() {
  displayGridOnMap(rennesApp, roofsStore.gridGeom!.featureCollection)
  addRoofInteractionOn2dMap(rennesApp, roofsStore.getPreviouslySelected() ?? [])
  rennesApp.getOpenlayerMap().getView().setZoom(22)
  rennesApp.getOpenlayerMap().getView().setMinZoom(21)
}

async function setupGridInstallation() {
  //force synchrone switch for adding openlayer interaction, update the store
  mapStore.viewPointPrevious = mapStore.viewPoint
  await rennesApp.maps.setActiveMap('ol')
  await mapStore.activate2d()
  if (addressStore.latitude !== 0 && addressStore.longitude !== 0) {
    await layerStore.enableLayer(RENNES_LAYER.roofSquaresArea)
    await layerStore.enableLayer(RENNES_LAYER.roofShape)
    // avoid recompute everything when came back from solar placement
    if (!roofsStore.gridMatrix) {
      let roofShape = roofsStore.getFeaturesOfSelectedPanRoof()
      // Handle web worker messages
      // Create a promise to handle the asynchronous behavior
      let roofSlope =
        useRoofsStore().getRoofSurfaceModelOfSelectedPanRoof()?.inclinaison
      const selectedRoofModel: RoofSurfaceModel =
        roofsStore.getRoofSurfaceModelOfSelectedPanRoof()!
      mapStore.isLoadingMap = true
      const roofAzimuth = getAzimuthSolarPanel(selectedRoofModel.azimuth!)
      worker
        .send({
          roofShape: JSON.stringify(roofShape),
          roofSlope: roofSlope,
          roofAzimuth: roofAzimuth,
        })
        .then((reply) => {
          mapStore.isLoadingMap = false
          roofsStore.gridGeom = reply.grid
          roofsStore.gridMatrix = reply.matrix
          displayGridAndAddInteractions()
        })
    } else {
      roofsStore.restoreMatrixToClean()
      displayGridAndAddInteractions()
    }
  }
}

async function setupSolarPanel() {
  mapStore.isLoadingMap = true
  roofsStore.saveCleanMatrix()
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
    getInclinaisonSolarPanel(selectedRoofModel.inclinaison),
    getAzimuthSolarPanel(selectedRoofModel.azimuth!)
  )
  solarPanelStore.currentNumberSolarPanel = solarPanelModels.length
  solarPanelStore.solarPanels = solarPanelModels
  mapStore.isLoadingMap = false
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
  await zoomToSolarPanel(rennesApp)
}

simulationStore.$subscribe(async () => {
  if (
    simulationStore.currentStep === 1 &&
    simulationStore.currentSubStep == 1
  ) {
    roofsStore.resetGridAndMatrix()
  } else if (
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
      await displaySolarPanelLayer()
    } else if (
      simulationStore.currentStep === 3 &&
      simulationStore.currentSubStep == 1
    ) {
      await saveScreenShot(rennesApp)
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
  // triger mandatory store change after changing view
  updateInteractionsStoreAfterViewChange(rennesApp)
})

mapStore.$subscribe(async () => {
  if (rennesApp.maps.activeMap.name !== mapStore.activeMap) {
    await rennesApp.maps.setActiveMap(mapStore.activeMap)
  }
  if (rennesApp.maps.activeMap.getViewpointSync() !== mapStore.viewPoint!) {
    if (mapStore.isInitializeMap) {
      await rennesApp.maps.activeMap.gotoViewpoint(mapStore.viewPoint!)
    }
  }
  if (
    viewStore.currentView === 'home' ||
    viewStore.currentView === 'roof-selection'
  ) {
    await applyInstallationStyle(rennesApp)
  } else {
    const installationLayer = await rennesApp.getLayerByKey('installations')
    await installationLayer.deactivate()
  }
})

interactionsStore.$subscribe(async () => {
  // update map interactions on the mapobject
  updateInteractionsOnMap(rennesApp)
})
</script>

<template>
  <UiMap></UiMap>
  <NavigationButtons />
  <ResetGridButton />
</template>
