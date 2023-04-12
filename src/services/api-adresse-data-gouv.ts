import { useAddressStore } from '@/stores/address'

class ApiAdresseDataGouvService {
  //Documention of API : https://adresse.data.gouv.fr/api-doc/adresse

  async fetchAddressesFromLatLon(lat: number, lon: number) {
    const baseUrl = 'https://api-adresse.data.gouv.fr/reverse/'
    const url = baseUrl + `?lon=${lon}&lat=${lat}`

    fetch(url).then(function (response) {
      if (response.ok) {
        return response.json().then(function (json) {
          if (json.features !== undefined && json.features.length > 0) {
            const addressStore = useAddressStore()
            addressStore.setAddress(json.features[0].properties.label)
          }
        })
      }
    })
  }
}

export const apiAdresseDataGouvService = new ApiAdresseDataGouvService()
