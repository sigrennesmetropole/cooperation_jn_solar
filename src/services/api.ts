import { RennesNotification } from '@/services/notification'
import { getUrlBackOffice } from '@/services/env'

class ApiService {
  async callApiPost(
    url: string,
    dataPost: {},
    headers: {},
    type: string = 'json'
  ) {
    try {
      const urlBack = await getUrlBackOffice()
      const response = await fetch(urlBack + url, {
        method: 'POST',
        headers: headers,
        credentials: 'include',
        body: JSON.stringify(dataPost),
      })

      if (response.status !== 200) {
        throw new Error(`HTTP error status: ${response.status}`)
      }

      if (type == 'buffer') {
        const arrayBuffer = await response.arrayBuffer() // get array buffer
        return arrayBuffer
      } else {
        const data = await response.json()
        return data
      }
    } catch (error) {
      const notif = new RennesNotification(
        'error',
        'Une erreur est survenue, veuillez réessayer.'
      )
      notif.displayNotification()
    }
  }

  async callApiGet(url: string) {
    try {
      const urlBack = await getUrlBackOffice()
      const response = await fetch(urlBack + url, {
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
    }
  }
}

export const apiService = new ApiService()
