import { apiService } from '@/services/api'

class ApiIrisService {
  async getCodeIris(lat: string, lon: string) {
    const data = await apiService.callApiGet(`/api/codeiris/${lat}/${lon}`)
    return data
  }
}

export const apiIrisService = new ApiIrisService()
