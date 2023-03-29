import { RennesNotification } from '@/services/notification'
import { getUrlBackOffice } from '@/services/env'

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
      const notif = new RennesNotification(
        'error',
        'Une erreur est survenue, veuillez réessayer.'
      )
      notif.displayNotification()
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
      const notif = new RennesNotification(
        'error',
        'Une erreur est survenue, veuillez réessayer.'
      )
      notif.displayNotification()
      throw error
    }
  }
}

export const apiService = new ApiService()
