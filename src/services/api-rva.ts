import { apiService } from '@/services/api'

class ApiRvaService {
  async fetchFullAddresses(search: string) {
    const data = await apiService.callApiGet(`/api/rva/fulladdress?q=${search}`)
    return data
  }

  async fetchStreets(search: string) {
    const data = await apiService.callApiGet(`/api/rva/streets?q=${search}`)
    return data
  }

  async fetchCommunes(search: string) {
    const data = await apiService.callApiGet(`/api/rva/communes?q=${search}`)
    return data
  }
}

export const apiRvaService = new ApiRvaService()
