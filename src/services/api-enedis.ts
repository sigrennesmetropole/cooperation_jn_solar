import { apiService } from '@/services/api'

class ApiEnedisService {
  async getUrlUserAuthorization() {
    const data = await apiService.callApiGet(
      '/api/enedis/user/url-authorization'
    )
    return data.url
  }

  async getPRMUser() {
    const data = await apiService.callApiGet('/api/enedis/user/prm')
    return data.prm
  }

  async setPRMUser(prm: string) {
    const data = await apiService.callApiPost(
      '/api/enedis/user/prm',
      { prm: prm },
      {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      }
    )
    return data.prm
  }

  async getAnnualConsumption() {
    const data = await apiService.callApiGet(
      '/api/enedis/user/annual-consumption'
    )
    return data.consumption
  }
}

export const apiEnedisService = new ApiEnedisService()
