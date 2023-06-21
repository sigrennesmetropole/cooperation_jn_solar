import type { AbstractInteraction } from '@vcmap/core'
import { viewList } from '@/model/views.model'
import { useViewsStore } from '@/stores/views'
import { RENNES_LAYER } from '@/stores/layers'
import SelectRoofInteraction from '@/interactions/selectRoofInteraction'
import ForbidenClickInteraction from '@/interactions/forbidClickInteraction'
import type { RennesApp } from '@/services/RennesApp'
import SelectDistrictInteraction from '@/interactions/selectDistrictInteractions'
import SelectInstallationsInteraction from '@/interactions/selectInstallationsInteraction'
import { useSimulationStore } from '@/stores/simulations'
import { useInteractionsStore } from '@/stores/interactions'
import { useDistrictStore } from '@/stores/districtInformations'
import { useMapStore } from '@/stores/map'
import { getNumberFromConfig } from '@/services/configService'

type InteractionsTypes =
  | typeof SelectRoofInteraction
  | typeof ForbidenClickInteraction
  | typeof SelectDistrictInteraction
  | typeof SelectInstallationsInteraction

export function isInteractionBuilding() {
  const viewStore = useViewsStore()
  return [
    viewList['roof-selected-information'],
    viewList['roof-selection'],
  ].includes(viewStore.currentView!)
}

export function isInteractionPanRoof() {
  const viewStore = useViewsStore()
  const simulationStore = useSimulationStore()
  return (
    viewStore.currentView === viewList['step-sunshine'] &&
    simulationStore.currentStep === 1 &&
    simulationStore.currentSubStep === 1
  )
}

function disableUnusedInteraction(
  rennesApp: RennesApp,
  typeInteraction: InteractionsTypes
) {
  rennesApp.maps.eventHandler.interactions.forEach((interaction) => {
    if (interaction instanceof typeInteraction) {
      interaction.setActive(false)
    }
  })
}

function activeInteraction(
  rennesApp: RennesApp,
  typeInteraction: InteractionsTypes
) {
  rennesApp.maps.eventHandler.interactions.forEach((interaction) => {
    if (interaction instanceof typeInteraction) {
      interaction.setActive(true)
    }
  })
}

function isInteractionExist(
  rennesApp: RennesApp,
  typeInteraction: InteractionsTypes
) {
  let res = false
  rennesApp.maps.eventHandler.interactions.forEach((interaction) => {
    if (interaction instanceof typeInteraction) {
      res = true
    }
  })
  return res
}

function newTypeInteraction(
  rennesApp: RennesApp,
  typeInteraction: InteractionsTypes
): AbstractInteraction | undefined {
  if (typeInteraction === SelectRoofInteraction) {
    return new SelectRoofInteraction(
      rennesApp.maps.layerCollection.getByKey(RENNES_LAYER.roof3d),
      rennesApp
    )
  }
  if (typeInteraction === ForbidenClickInteraction) {
    return new ForbidenClickInteraction()
  }
  if (typeInteraction === SelectDistrictInteraction) {
    return new SelectDistrictInteraction(rennesApp)
  }
  if (typeInteraction === SelectInstallationsInteraction) {
    return new SelectInstallationsInteraction(rennesApp)
  }
  return undefined
}

export function updateInteractionsStoreAfterViewChange(rennesApp: RennesApp) {
  const interactionsStore = useInteractionsStore()
  const viewStore = useViewsStore()
  const simulationStore = useSimulationStore()
  if (
    viewStore.currentView === viewList.home ||
    viewStore.currentView === viewList['roof-selection']
  ) {
    interactionsStore.enableInteraction(SelectInstallationsInteraction)
  } else {
    interactionsStore.disableInteraction(SelectInstallationsInteraction)
  }
  // disable ForbiddenClick elsewhere than home
  if (viewStore.currentView === viewList.home) {
    interactionsStore.enableInteraction(ForbidenClickInteraction)
  } else {
    interactionsStore.disableInteraction(ForbidenClickInteraction)
  }

  // enable selectRoofInteraction whatever the zoom is on step sunshine
  if (
    viewStore.currentView === viewList['step-sunshine'] &&
    simulationStore.currentStep === 1 &&
    simulationStore.currentSubStep === 1
  ) {
    interactionsStore.enableInteraction(SelectRoofInteraction)
  }

  // switch between selectRoof and Iris on first pages
  // roof selection is block by Forbidden on home
  if (
    [
      viewList['home'],
      viewList['roof-selected-information'],
      viewList['roof-selection'],
    ].includes(viewStore.currentView!)
  ) {
    manageSelectAndIrisDependingOnZoom(rennesApp)
  }
  if (
    [viewList['roof-selected-information'], viewList['step-sunshine']].includes(
      viewStore.currentView!
    )
  ) {
    interactionsStore.disableInteraction(SelectDistrictInteraction)
  }
}

/**
 * Disable district interaction if too close to the ground
 * Activate selectRoofInteraction is close enough and selectable to true
 * @param rennesApp rennesApp
 */
export function manageSelectAndIrisDependingOnZoom(rennesApp: RennesApp) {
  const interactionsStore = useInteractionsStore()
  const districtStore = useDistrictStore()
  const mapStore = useMapStore()
  const distance_max_for_selection = getNumberFromConfig(
    'distance.distance_max_for_selection'
  )

  if (mapStore.isInitializeMap) {
    rennesApp
      .get3DMap()
      .getScene()
      .postRender.addEventListener(() => {
        const cameraDistance = rennesApp.getCurrentDistance()!
        // @ts-ignore
        if (cameraDistance > distance_max_for_selection) {
          if (interactionsStore.isActive(SelectRoofInteraction)) {
            interactionsStore.disableInteraction(SelectRoofInteraction)
          }
          districtStore.setCanBeDisplayed(true)
        } else if (
          !interactionsStore.isActive(SelectRoofInteraction) &&
          // @ts-ignore
          cameraDistance <= distance_max_for_selection
        ) {
          interactionsStore.enableInteraction(SelectRoofInteraction)
          districtStore.setCanBeDisplayed(false)
        }
      })
  }
}
export function updateInteractionsOnMap(rennesApp: RennesApp) {
  const interactionsStore = useInteractionsStore()
  interactionsStore.getActiveInteractions().forEach((int) => {
    if (!isInteractionExist(rennesApp, int)) {
      const interaction = newTypeInteraction(rennesApp, int)
      if (interaction) {
        rennesApp.maps.eventHandler.addPersistentInteraction(interaction)
      }
    }
    activeInteraction(rennesApp, int)
  })
  interactionsStore.getInactiveInteractions().forEach((int) => {
    disableUnusedInteraction(rennesApp, int)
  })
}
