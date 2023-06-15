import type { RennesApp } from '@/services/RennesApp'
import {
  AbstractInteraction,
  EventType,
  ModificationKeyType,
  PointerKeyType,
} from '@vcmap/core'
import type { InteractionEvent } from '@vcmap/core'

class SelectInstallationsInteraction extends AbstractInteraction {
  private _rennesApp: RennesApp

  constructor(rennesApp: RennesApp) {
    super(EventType.CLICKMOVE, ModificationKeyType.NONE, PointerKeyType.ALL)
    this._rennesApp = rennesApp
  }

  async pipe(event: InteractionEvent) {
    if (event.type & EventType.CLICK) {
      console.log('click')
    }
    return event
  }
}

export default SelectInstallationsInteraction
