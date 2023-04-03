import { apiService } from '@/services/api'
import type { AutocalsolData } from '@/model/autocalsol.model'

class ApiAutocalsolService {
  async getComputeData(dataAutocalsol: AutocalsolData) {
    const url =
      '/api/autocalsol/data-compute' +
      '?' +
      `latitude=${dataAutocalsol.latitude}` +
      '&' +
      `longitude=${dataAutocalsol.longitude}` +
      '&' +
      `slope=${dataAutocalsol.slope}` +
      '&' +
      `azimuth=${dataAutocalsol.azimuth}` +
      '&' +
      `annual_consumption=${dataAutocalsol.annual_consumption}` +
      '&' +
      `peak_power=${dataAutocalsol.peak_power}`
    const data = await apiService.callApiGet(url)
    return data.compute
  }
}

export const apiAutocalsolService = new ApiAutocalsolService()
