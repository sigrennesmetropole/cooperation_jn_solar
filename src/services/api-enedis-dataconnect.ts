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
    if (data !== undefined && data.prm !== undefined) {
      return data.prm
    } else {
      return null
    }
  }

  async getAnnualConsumption() {
    const data = await apiService.callApiGet(
      `${this.baseUrlApi}/annual-consumption`
    )
    if (data !== undefined && data.consumption !== undefined) {
      return data.consumption
    } else {
      return null
    }
  }
}

export const apiEnedisService = new ApiEnedisService()
