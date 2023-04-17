import { EventType, AbstractInteraction } from '@vcmap/core'
import { viewList } from '@/model/views.model'
import { useViewsStore } from '@/stores/views'
import { RENNES_LAYER } from '@/stores/layers'
import SelectRoofInteraction from '@/interactions/selectRoofInteraction'
import ForbidenClickInteraction from '@/interactions/forbidClickInteraction'
import type { RennesApp } from '@/services/RennesApp'
import SelectDistrictInteraction from '@/interactions/selectDistrictInteractions'
import { useSimulationStore } from '@/stores/simulations'
import { useDistrictStore } from '@/stores/districtInformations'

type InteractionsTypes =
  | typeof SelectRoofInteraction
  | typeof ForbidenClickInteraction
  | typeof SelectDistrictInteraction

function _getSelectRoofInteraction(
  rennesApp: RennesApp
): SelectRoofInteraction | undefined {
  let res = undefined
  rennesApp.maps.eventHandler.interactions.forEach((interaction) => {
    if (interaction instanceof SelectRoofInteraction) {
      res = interaction
    }
  })
  return res
}

export function enableSelectRoofInteraction(rennesApp: RennesApp) {
  const res = _getSelectRoofInteraction(rennesApp)
  if (res) {
    res.setActive(EventType.CLICKMOVE)
  }
}

export function disableSelectRoofInteraction(rennesApp: RennesApp) {
  const res = _getSelectRoofInteraction(rennesApp)
  if (res) {
    res.setActive(false)
  }
}

export function cleanHighlightedRoofs(rennesApp: RennesApp) {
  const res = _getSelectRoofInteraction(rennesApp)
  if (res) {
    res.unhighlight()
  }
}

export function isInteractionBuilding() {
  const viewStore = useViewsStore()
  return [
    viewList['roof-selected-information'],
    viewList['roof-selection'],
  ].includes(viewStore.currentView)
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

function isInteractionDistrict() {
  const viewStore = useViewsStore()
  const districtStore = useDistrictStore()
  return (
    [viewList['home'], viewList['roof-selection']].includes(
      viewStore.currentView
    ) && districtStore.checkboxChecked === true
  )
}

function isInteractionForbidClick() {
  const viewStore = useViewsStore()
  return viewStore.currentView === viewList.home
}

function inactiveInteractionsUnused(
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

function isInteractionToAdd(typeInteraction: InteractionsTypes) {
  if (typeInteraction === SelectRoofInteraction) {
    return isInteractionBuilding() || isInteractionPanRoof()
  }
  if (typeInteraction === ForbidenClickInteraction) {
    return isInteractionForbidClick()
  }
  if (typeInteraction === SelectDistrictInteraction) {
    return isInteractionDistrict()
  }
  return false
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
  return undefined
}

export function createMapInteractions(rennesApp: RennesApp) {
  const types_interaction = [
    SelectRoofInteraction,
    ForbidenClickInteraction,
    SelectDistrictInteraction,
  ]

  types_interaction.forEach((interactionType) => {
    if (isInteractionToAdd(interactionType)) {
      if (!isInteractionExist(rennesApp, interactionType)) {
        rennesApp.maps.eventHandler.featureInteraction.setActive(
          EventType.CLICK
        )
        const interaction = newTypeInteraction(rennesApp, interactionType)
        if (interaction)
          rennesApp.maps.eventHandler.addPersistentInteraction(interaction)
      } else {
        activeInteraction(rennesApp, interactionType)
      }
    } else {
      inactiveInteractionsUnused(rennesApp, interactionType)
    }
  })
}
