import { getUrlBackOffice } from '@/services/env'
import { useNotification } from '@kyvg/vue3-notification'

class ApiService {
  async callApiPost(url: string, dataPost: {}, headers: {}) {
    try {
      const response = await fetch(getUrlBackOffice() + url, {
        method: 'POST',
        headers: headers,
        credentials: 'include',
        body: JSON.stringify(dataPost),
      })

      if (response.status !== 200) {
        throw new Error(`HTTP error status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      const { notify } = useNotification()
      notify({
        type: 'error',
        text: 'Une erreur est survenue, veuillez réessayer.',
      })
      throw error
    }
  }

  async callApiGet(url: string) {
    try {
      const response = await fetch(getUrlBackOffice() + url, {
        method: 'GET',
        credentials: 'include',
      })

      if (response.status !== 200) {
        throw new Error(`HTTP error status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      const { notify } = useNotification()
      notify({
        type: 'error',
        text: 'Une erreur est survenue, veuillez réessayer.',
      })
      throw error
    }
  }
}

export const apiService = new ApiService()
