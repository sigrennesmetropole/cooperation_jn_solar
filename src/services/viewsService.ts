import { viewList } from '@/model/views.model'
import { useViewsStore } from '@/stores/views'
import { EventType } from '@vcmap/core'
import SelectRoofInteraction from '@/services/selectRoofInteraction'
import { RENNES_LAYER } from '@/stores/layers'
import type { RennesApp } from '@/services/RennesApp'

export function viewStoreSubscribe(rennesApp: RennesApp) {
  const viewStore = useViewsStore()
  if (
    [
      viewList['roof-selection'],
      viewList['home'],
      viewList['map-pcaet'],
      viewList['roof-selected-information'],
    ].includes(viewStore.currentView)
  ) {
    rennesApp.maps.eventHandler.featureInteraction.setActive(
      EventType.CLICKMOVE
    )
    const selectInteraction = new SelectRoofInteraction(
      rennesApp.maps.layerCollection.getByKey(RENNES_LAYER.roof3d),
      rennesApp
    )
    rennesApp.maps.eventHandler.addExclusiveInteraction(
      selectInteraction,
      () => {}
    )
  } else {
    rennesApp.maps.eventHandler.removeExclusive()
  }
}
