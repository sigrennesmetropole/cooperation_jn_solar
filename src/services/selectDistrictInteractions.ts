import {
  AbstractInteraction,
  EventType,
  ModificationKeyType,
} from '@vcmap/core'
import type { InteractionEvent } from '@vcmap/core'
import type { RennesApp } from './RennesApp'
import { apiEnedisDistrictService } from '@/services/api-enedis-district'
import { useDistrictStore } from '@/stores/districtInformations'
import { updateDistrictStyle } from './viewStyles'

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
      codeIris,
      districtDatas.irisName,
      districtDatas.totalConsumption,
      districtDatas.totalProduction,
      districtDatas.totalPhotovoltaicSites
    )
  }

  async pipe(event: InteractionEvent) {
    const selectedDistrict = event.feature
    const irisCode = selectedDistrict?.getProperty('code_iris')
    if (irisCode) {
      updateDistrictStyle(this._rennesApp, irisCode)
      await this.gettingDistrictDatas(irisCode)
    }
    return event
  }
}

export default SelectDistrictInteraction
