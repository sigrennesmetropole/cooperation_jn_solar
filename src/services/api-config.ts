import { apiService } from '@/services/api'
import { useConfigStore } from '@/stores/config'

class ApiConfigService {
  async getConfig() {
    const configStore = useConfigStore()
    const data = await apiService.callApiGet(`/api/config`)
    if (data.config) {
      configStore.setConfig(data.config)
    }
  }
}

export const apiConfigService = new ApiConfigService()
