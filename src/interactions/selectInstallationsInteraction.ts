import type { RennesApp } from '@/services/RennesApp'
import {
  AbstractInteraction,
  EventType,
  ModificationKeyType,
  PointerKeyType,
} from '@vcmap/core'
import type { InteractionEvent } from '@vcmap/core'
import { useInstallationsStore } from '@/stores/installations'

class SelectInstallationsInteraction extends AbstractInteraction {
  private _rennesApp: RennesApp

  constructor(rennesApp: RennesApp) {
    super(EventType.CLICKMOVE, ModificationKeyType.NONE, PointerKeyType.ALL)
    this._rennesApp = rennesApp
  }

  async pipe(event: InteractionEvent) {
    if (event.type & EventType.CLICK) {
      const installationsStore = useInstallationsStore()
      const selectedInstallation = event.feature
      const installationName = selectedInstallation?.getProperty('nom')
      const installationYear = selectedInstallation?.getProperty('an_mes')
      const installationProduction = selectedInstallation?.getProperty(
        'production_annuelle'
      )
      const installationHouse = selectedInstallation?.getProperty(
        'consommation_equivalente_foyer'
      )
      installationsStore.setInstallationInformations(
        installationName,
        installationYear,
        installationProduction,
        installationHouse
      )

      console.log(installationsStore.installationYear)
    }
    return event
  }
}

export default SelectInstallationsInteraction
