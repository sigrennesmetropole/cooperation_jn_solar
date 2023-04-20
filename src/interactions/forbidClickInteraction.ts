import {
  AbstractInteraction,
  EventType,
  VcsEvent,
  ModificationKeyType,
} from '@vcmap/core'
import type { InteractionEvent } from '@vcmap/core'
import { useViewsStore } from '@/stores/views'
import { viewList } from '@/model/views.model'
import { useHomeStore } from '@/stores/home'

class ForbidenClickInteraction extends AbstractInteraction {
  mapClicked: VcsEvent<any> // eslint-disable-line
  constructor() {
    super(EventType.CLICK, ModificationKeyType.ALL)
    this.mapClicked = new VcsEvent()
  }

  _isClickOnHomePageValid() {
    const viewStore = useViewsStore()
    if (viewStore.currentView !== viewList.home) {
      return true
    }
    const homeRouter = useHomeStore()
    if (homeRouter.isTermOfUseAccepted) {
      return true
    }
    homeRouter.setDisplayError(true)
    return false
  }

  async pipe(event: InteractionEvent) {
    this._isClickOnHomePageValid()
    return event
  }
}

export default ForbidenClickInteraction
