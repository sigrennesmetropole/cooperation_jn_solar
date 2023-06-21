// import { RennesNotification } from '@/services/notification'
import { useAddressStore } from '@/stores/address'
import { apiService } from '@/services/api'

class ApiAdresseDataGouvService {
  //Documention of API : https://adresse.data.gouv.fr/api-doc/adresse

  async fetchAddressesFromLatLon(lat: number, lon: number) {
    const errorMessage =
      "Récupération d'adresse échouée, mais position obtenue. Vous pouvez continuer la simulation."
    const data = await apiService.callApiGet(
      `/api/address-reverse/${lat}/${lon}`,
      errorMessage
    )
    const addressStore = useAddressStore()
    addressStore.setAddress(data)
    return data
  }
}

export const apiAdresseDataGouvService = new ApiAdresseDataGouvService()
