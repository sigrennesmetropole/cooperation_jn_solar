import { apiService } from '@/services/api'

class ApiSitesorgService {
  async fetchOrganizations(search: string) {
    const data = await apiService.callApiGet(
      `/api/siteorg/organizations?q=${search}`
    )
    return data
  }

  async fetchOrganizationById(id: number) {
    const data = await apiService.callApiGet(`/api/siteorg/organization/${id}`)
    return data
  }

  async fetchSiteById(id: number) {
    const data = await apiService.callApiGet(`/api/siteorg/site/${id}`)
    return data
  }
}

export const apiSitesorgService = new ApiSitesorgService()
