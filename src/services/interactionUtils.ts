import { EventType } from '@vcmap/core'
import { viewList } from '@/model/views.model'
import { useViewsStore } from '@/stores/views'
import { RENNES_LAYER } from '@/stores/layers'
import SelectRoofInteraction from '@/interactions/selectRoofInteraction'
import ForbidenClickInteraction from '@/interactions/forbidClickInteraction'
import type { RennesApp } from '@/services/RennesApp'
import SelectDistrictInteraction from './selectDistrictInteractions'
import { useSimulationStore } from '@/stores/simulations'
import { useDistrictStore } from '@/stores/districtInformations'

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

export function createMapInteractions(rennesApp: RennesApp) {
  const viewStore = useViewsStore()
  const districtStore = useDistrictStore()

  let selectInteraction
  if (
    [viewList['home'], viewList['roof-selection']].includes(
      viewStore.currentView
    ) &&
    districtStore.checkboxChecked === true
  ) {
    rennesApp.maps.eventHandler.featureInteraction.setActive(EventType.CLICK)
    const selectDistrictInteraction = new SelectDistrictInteraction(rennesApp)
    rennesApp.maps.eventHandler.addExclusiveInteraction(
      selectDistrictInteraction,
      () => {}
    )
  } else if (isInteractionBuilding() || isInteractionPanRoof()) {
    if (_getSelectRoofInteraction(rennesApp) == null) {
      selectInteraction = new SelectRoofInteraction(
        rennesApp.maps.layerCollection.getByKey(RENNES_LAYER.roof3d),
        rennesApp
      )
      selectInteraction.setActive(false)
      rennesApp.maps.eventHandler.addExclusiveInteraction(
        selectInteraction,
        () => {}
      )
    } else if (viewStore.currentView === viewList.home) {
      const forbidClickInteraction = new ForbidenClickInteraction()
      rennesApp.maps.eventHandler.addExclusiveInteraction(
        forbidClickInteraction,
        () => {}
      )
    } else {
      rennesApp.maps.eventHandler.removeExclusive()
    }
  }
}
