import { apiService } from '@/services/api'

class ApiPdfService {
  async sendPdfByEmail() {
    const data = await apiService.callApiPost(
      `/api/pdf`,
      { test: 'test' },
      {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      }
    )
    return data
  }
}

export const apiPdfService = new ApiPdfService()
