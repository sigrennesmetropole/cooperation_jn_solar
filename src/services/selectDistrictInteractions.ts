import {
  AbstractInteraction,
  EventType,
  ModificationKeyType,
} from '@vcmap/core'
import type { InteractionEvent } from '@vcmap/core'
import type { RennesApp } from './RennesApp'
import { apiEnedisDistrictService } from '@/services/api-enedis-district'
import { useDistrictStore } from '@/stores/districtInformations'

class SelectDistrictInteraction extends AbstractInteraction {
  _rennesApp: RennesApp

  constructor(rennesApp: RennesApp) {
    super(EventType.CLICK, ModificationKeyType.NONE)

    this._rennesApp = rennesApp
  }

  async gettingDistrictDatas(codeIris: number) {
    const districtStore = useDistrictStore()
    const districtDatas = await apiEnedisDistrictService.getDistrictDatas(
      codeIris
    )
    districtStore.setDistrictInformations(
      districtDatas.irisName,
      districtDatas.totalConsumption,
      districtDatas.totalProduction,
      districtDatas.totalPhotovoltaicSites
    )
  }

  async pipe(event: InteractionEvent) {
    const selectedDistrict = event.feature

    await this.gettingDistrictDatas(selectedDistrict?.getProperty('code_iris'))

    return event
  }
}

export default SelectDistrictInteraction
