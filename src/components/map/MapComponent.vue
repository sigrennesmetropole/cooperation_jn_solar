<script setup lang="ts">
import { inject, onMounted } from 'vue'
import type { RennesApp } from '@/services/RennesApp'
import UiMap from '@/components/ui/UiMap.vue'
import {
  RENNES_LAYER,
  RENNES_LAYERNAMES,
  useLayersStore,
} from '@/stores/layers'
import {
  IsSolarPanelVisibleOnStep,
  updateInteractionsOnMap,
  updateInteractionsStoreAfterViewChange,
} from '@/services/interactionUtils'
import type { Layer, Viewpoint } from '@vcmap/core'
import NavigationButtons from '@/components/map/buttons/NavigationButtons.vue'
import { useSimulationStore } from '@/stores/simulations'
import { useAddressStore } from '@/stores/address'
import { useSolarPanelStore } from '@/stores/solarPanels'
import {
  addRoofInteractionOn2dMap,
  cleanRoofShape2d,
  displayGridOnMap,
  displayRoofShape2d,
  removeRoof2dShape,
  removeRoofGrid,
  removeRoofInteractionOn2dMap,
  substractSelectedSquares,
} from '@/services/roofInteractionHelper'
import {
  filterSolarPanelByMaxSolarPanel,
  getAzimuthSolarPanel,
  getInclinaisonSolarPanel,
  initializeSolarPanelLayer,
  removeSolarPanel,
  solarPanelGridToSolarPanelModel,
  zoomToSolarPanel,
} from '@/services/solarPanel'
import { useRoofsStore } from '@/stores/roof'
import { useMapStore } from '@/stores/map'
import { useViewsStore } from '@/stores/views'
import { useInteractionsStore } from '@/stores/interactions'
import { useConfigStore } from '@/stores/config'

import type { RoofSurfaceModel } from '@/model/roof.model'
import { saveScreenShot } from '@/services/screenshotService'
import ResetGridButton from '@/components/map/buttons/ResetGridButton.vue'
import worker from '@/worker'

import { useEnedisStore } from '@/stores/enedis'
import { applyInstallationStyle } from '@/services/installationService'
import type { FeatureCollection } from '@turf/helpers'
import { roofWfsService } from '@/services/roofWfsService'

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
const configStore = useConfigStore()

let previousVp: Viewpoint | null = null

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
  mapStore.activate3d()
}

async function updateLayersVisibility() {
  for (const layer of RENNES_LAYERNAMES) {
    await setLayerVisible(layer, layerStore.visibilities[layer])
  }
}

async function setLayerVisible(layerName: string, visible: boolean) {
  const layer: Layer = rennesApp.maps.layerCollection.getByKey(layerName)!
  if (visible) {
    await layer?.activate()
  } else {
    layer?.deactivate()
  }
}

async function disableOlInteraction() {
  if (mapStore.activeMap === 'ol') {
    layerStore.disableLayer(RENNES_LAYER.roofSquaresArea)
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

async function computeOptimalGrid() {
  cleanRoofShape2d(rennesApp)
  let roofFavorableArea = roofsStore.getFeaturesOfSelectedPanRoof()
  // Handle web worker messages
  // Create a promise to handle the asynchronous behavior
  let roofSlope =
    useRoofsStore().getRoofSurfaceModelOfSelectedPanRoof()?.inclinaison
  const selectedRoofModel: RoofSurfaceModel =
    roofsStore.getRoofSurfaceModelOfSelectedPanRoof()!
  mapStore.isLoadingMap = true
  const roofAzimuth = getAzimuthSolarPanel(selectedRoofModel.azimuth!)
  if (roofFavorableArea.features.length > 0) {
    const surfaceId = roofFavorableArea.features[0].properties?.surface_id
    let fc: FeatureCollection = await roofWfsService.fetch2dRoofShapeFromWfs(
      surfaceId
    )
    displayRoofShape2d(rennesApp, fc)
    let reply = await worker.send({
      type: 'compute-grid',
      roofShape: JSON.stringify(fc),
      roofFavorableArea: JSON.stringify(roofFavorableArea),
      roofSlope: roofSlope,
      rectangleWidth: configStore.config?.solar.grid.rectangle_width!,
      rectangleHeight: configStore.config?.solar.grid.rectangle_height!,
      roofAzimuth: roofAzimuth,
    })
    mapStore.isLoadingMap = false
    roofsStore.gridGeom = reply.grid
    roofsStore.usableIds = reply.usableIds
    roofsStore.ori = reply.ori
  }
}

async function setupGridInstallation() {
  //force synchrone switch for adding openlayer interaction, update the store
  mapStore.viewPointPrevious = mapStore.viewPoint
  await rennesApp.maps.setActiveMap('ol')
  mapStore.activate2d()
  if (addressStore.latitude !== 0 && addressStore.longitude !== 0) {
    layerStore.enableLayer(RENNES_LAYER.roofSquaresArea)
    layerStore.enableLayer(RENNES_LAYER.roofShape)
    // avoid recompute everything when came back from solar placement
    if (!roofsStore.usableIds) {
      await computeOptimalGrid()
    } else {
      roofsStore.restoreMatrixToClean()
      roofsStore.restoreGridGeom()
    }
    displayGridAndAddInteractions()
  }
}

async function setupSolarPanel() {
  mapStore.isLoadingMap = true
  roofsStore.saveGridGeom()
  roofsStore.saveCleanMatrix()

  let roofFavorableArea = roofsStore.getFeaturesOfSelectedPanRoof()
  roofsStore.usableIds = await worker.send({
    type: 'center-filter',
    roofFavorableArea: JSON.stringify(roofFavorableArea),
    usableIds: JSON.stringify(roofsStore.usableIds),
  })
  substractSelectedSquares(roofsStore.usableIds!)
  const selectedRoofModel: RoofSurfaceModel =
    roofsStore.getRoofSurfaceModelOfSelectedPanRoof()!
  // Make sure the active map is the 3D one sot hat the height of solar panel
  // can be computed properly
  await rennesApp.maps.setActiveMap('cesium')
  mapStore.activate3d()
  const solarPanelModels = await solarPanelGridToSolarPanelModel(
    rennesApp,
    roofsStore.usableIds!,
    roofsStore.ori,
    getInclinaisonSolarPanel(selectedRoofModel.inclinaison),
    getAzimuthSolarPanel(selectedRoofModel.azimuth!)
  )

  solarPanelStore.currentNumberSolarPanel = solarPanelModels.length
  solarPanelStore.solarPanels = solarPanelModels
  mapStore.isLoadingMap = false
  return
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

function setMaxZoomIn() {
  const cesiumMap = rennesApp.get3DMap()
  cesiumMap.getScene()!.screenSpaceCameraController.minimumZoomDistance = 40
}

simulationStore.$subscribe(async () => {
  if (
    simulationStore.currentStep === 1 &&
    simulationStore.currentSubStep == 1
  ) {
    roofsStore.resetGridAndMatrix()
    await disableOlInteraction()
    mapStore.activate3d()
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
  if (IsSolarPanelVisibleOnStep()) {
    setMaxZoomIn()
  }
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
  if (rennesApp.maps.activeMap!.name !== mapStore.activeMap) {
    await rennesApp.maps.setActiveMap(mapStore.activeMap)
  }
  if (
    previousVp !== mapStore.viewPoint &&
    rennesApp.maps.activeMap!.getViewpointSync() !== mapStore.viewPoint!
  ) {
    if (mapStore.isInitializeMap) {
      previousVp = mapStore.viewPoint!
      await rennesApp.maps.activeMap!.gotoViewpoint(mapStore.viewPoint!)
    }
  }
  if (
    viewStore.currentView === 'home' ||
    viewStore.currentView === 'roof-selection'
  ) {
    await applyInstallationStyle(rennesApp)
  } else {
    const installationLayer = await rennesApp.getLayerByKey('installations')
    installationLayer.deactivate()
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
