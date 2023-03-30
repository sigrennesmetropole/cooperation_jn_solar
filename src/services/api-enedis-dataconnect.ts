import { apiService } from '@/services/api'

class ApiEnedisService {
  baseUrlApi = '/api/enedis/user'

  async getUrlUserAuthorization() {
    const data = await apiService.callApiGet(
      `${this.baseUrlApi}/url-authorization`
    )
    return data.url
  }

  async getPRMUser() {
    const data = await apiService.callApiGet(`${this.baseUrlApi}/prm`)
    return data.prm
  }

  async setPRMUser(prm: string) {
    const data = await apiService.callApiPost(
      `${this.baseUrlApi}/prm`,
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
      `${this.baseUrlApi}/annual-consumption`
    )
    return data.consumption
  }
}

export const apiEnedisService = new ApiEnedisService()
