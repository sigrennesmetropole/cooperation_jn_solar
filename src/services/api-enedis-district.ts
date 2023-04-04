import { apiService } from '@/services/api'

class ApiEnedisDistrictService {
  async getDistrictDatas(codeIris: number) {
    const data = await apiService.callApiGet(`/api/enedis/district/${codeIris}`)
    return data
  }
}

export const apiEnedisDistrictService = new ApiEnedisDistrictService()
