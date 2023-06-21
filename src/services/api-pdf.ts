import { apiService } from '@/services/api'
import { useRoofsStore } from '@/stores/roof'
import { useAddressStore } from '@/stores/address'
import { azimuthForAutocalsol } from '@/model/autocalsol.model'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import { getPeakPower } from '@/services/solarPanel'
import { useSolarPanelStore } from '@/stores/solarPanels'
import type { AutocalsolResult as AutocalsolResultType } from '@/model/autocalsol.model'

class ApiPdfService {
  async getParams(autocalsolResult: AutocalsolResultType | null) {
    const roofsStore = useRoofsStore()
    const addressStore = useAddressStore()
    const consumptionAndProductionStore = useConsumptionAndProductionStore()
    const solarPanelStore = useSolarPanelStore()
    const selectedRoof = roofsStore.getRoofSurfaceModelOfSelectedPanRoof()

    function isEmptyParam() {
      if (
        selectedRoof === undefined ||
        selectedRoof?.inclinaison === undefined ||
        selectedRoof?.azimuth === undefined
      ) {
        return true
      }
      if (
        addressStore.latitude === 0 ||
        addressStore.longitude === 0 ||
        addressStore.screenshotAddress === null
      ) {
        return true
      }
      if (solarPanelStore.currentNumberSolarPanel <= 0) {
        return false
      }
      return false
    }

    if (isEmptyParam()) {
      return null
    }

    const blob = addressStore.screenshotAddress
    const base64data = await new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = function () {
        resolve(reader.result)
      }
      reader.onerror = reject
      reader.readAsDataURL(blob!)
    })

    const slope = selectedRoof!.inclinaison
    const azimuth = selectedRoof!.azimuth
    const data = {
      selectedRoof: selectedRoof,
      address: addressStore.address,
      annual_consumption: consumptionAndProductionStore.annualConsumption,
      currentNumSolarPanel: solarPanelStore.currentNumberSolarPanel,
      latitude: addressStore.latitude,
      longitude: addressStore.longitude,
      slope: slope,
      azimuth: azimuthForAutocalsol(azimuth!),
      peak_power: getPeakPower(),
      roofImageBase64: base64data,
      autocalsolResult: autocalsolResult,
    }
    return data
  }

  async getPdf(autocalsolResult: AutocalsolResultType | null = null) {
    const params = await this.getParams(autocalsolResult)
    if (params === null) {
      return null
    }

    const data = await apiService.callApiPost(
      `/api/pdf`,
      params,
      {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      'buffer'
    )
    return data
  }

  async sendPdfByEmail(
    email: string,
    autocalsolResult: AutocalsolResultType | null = null
  ) {
    let params = await this.getParams(autocalsolResult)
    if (params === null) {
      return null
    }

    params = { ...params, ...{ email: email } }

    const data = await apiService.callApiPost(`/api/email-pdf`, params, {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    })
    return data
  }
}

export const apiPdfService = new ApiPdfService()
