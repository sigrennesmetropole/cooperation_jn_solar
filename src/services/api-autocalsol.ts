import { apiService } from '@/services/api'

class ApiAutocalsolService {
  async getComputeData() {
    const fakeData = {
      latitude: 48.110694413833,
      longitude: -1.6713621480316,
      slope: 30,
      azimuth: 0,
      annual_consumption: 6000,
      peak_power: 3,
    }
    const url =
      '/api/autocalsol/data-compute' +
      '?' +
      `latitude=${fakeData.latitude}` +
      '&' +
      `longitude=${fakeData.longitude}` +
      '&' +
      `slope=${fakeData.slope}` +
      '&' +
      `azimuth=${fakeData.azimuth}` +
      '&' +
      `annual_consumption=${fakeData.annual_consumption}` +
      '&' +
      `peak_power=${fakeData.peak_power}`
    const data = await apiService.callApiGet(url)
    return data.compute
  }
}

export const apiAutocalsolService = new ApiAutocalsolService()
