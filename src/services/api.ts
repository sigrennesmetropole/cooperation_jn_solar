import { RennesNotification } from '@/services/notification'
import { getUrlBackOffice } from '@/services/env'
import { useMapStore } from '@/stores/map'

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
      const mapStore = useMapStore()
      mapStore.isLoadingMap = false
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
      const mapStore = useMapStore()
      mapStore.isLoadingMap = false
      throw error
    }
  }
}

export const apiService = new ApiService()
