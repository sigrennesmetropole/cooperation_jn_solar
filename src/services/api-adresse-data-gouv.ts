// import { RennesNotification } from '@/services/notification'
import { useAddressStore } from '@/stores/address'
import { apiService } from '@/services/api'

class ApiAdresseDataGouvService {
  //Documention of API : https://adresse.data.gouv.fr/api-doc/adresse

  async fetchAddressesFromLatLon(lat: number, lon: number) {
    const data = await apiService.callApiGet(
      `/api/address-reverse/${lat}/${lon}`
    )
    const addressStore = useAddressStore()
    addressStore.setAddress(data)
    return data
  }

  //   async fetchAddressesFromLatLon(lat: number, lon: number) {
  //     const baseUrl = 'https://api-adresse.data.gouv.fr/reverse/'
  //     const url = baseUrl + `?lon=${lon}&lat=${lat}`
  //     const errorMessage = 'Récupération d\'adresse échouée, mais position obtenue. Vous pouvez continuer la simulation.'

  //     try {
  //       return fetch(url).then(function (response) {
  //         if (response.ok) {
  //           return response.json().then(function (json) {
  //             if (json.features !== undefined && json.features.length > 0) {
  //               const addressStore = useAddressStore()
  //               addressStore.setAddress(json.features[0].properties.label)
  //             }
  //           })
  //         }
  //         else {
  //           const notif = new RennesNotification(
  //             'error',
  //             errorMessage
  //           )
  //           notif.displayNotification()
  //         }
  //       })
  //       .catch(function (error) {
  //         const notif = new RennesNotification(
  //           'error',
  //           errorMessage
  //         )
  //         notif.displayNotification()
  //       });
  //     } catch (error) {
  //       const notif = new RennesNotification(
  //         'error',
  //         errorMessage
  //       )
  //       notif.displayNotification()
  //     }
  //   }
}

export const apiAdresseDataGouvService = new ApiAdresseDataGouvService()
