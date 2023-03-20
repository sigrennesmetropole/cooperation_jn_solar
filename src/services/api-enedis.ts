import { getUrlBackOffice } from '@/services/env'

class ApiEnedisService {
  async callApiGet(url: string) {
    const response = await fetch(getUrlBackOffice() + url, {
      method: 'GET',
      credentials: 'include',
    })
    const data = await response.json()
    return data
  }

  async callApiPost(url: string, dataPost: {}) {
    const response = await fetch(getUrlBackOffice() + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(dataPost),
    })
    const data = await response.json()
    return data
  }

  async getUrlUserAuthorization() {
    const data = await this.callApiGet('/api/enedis/user/url-authorization')
    return data.url
  }

  async getPRMUser() {
    const data = await this.callApiGet('/api/enedis/user/prm')
    return data.prm
  }

  async setPRMUser(prm: string) {
    const data = await this.callApiPost('/api/enedis/user/prm', { prm: prm })
    return data.prm
  }

  async getAnnualConsumption() {
    const data = await this.callApiGet('/api/enedis/user/annual-consumption')
    return data.consumption
  }
}

export const apiEnedisService = new ApiEnedisService()
