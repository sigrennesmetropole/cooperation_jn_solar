import { apiService } from '@/services/api'

class ApiInseeIrisService {
  async getCodeIris(lat: string, lon: string) {
    const data = await apiService.callApiGet(
      `/api/insee/codeiris/${lat}/${lon}`
    )
    return data
  }
}

export const apiInseeIrisService = new ApiInseeIrisService()
