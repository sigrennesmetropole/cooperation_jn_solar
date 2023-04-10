class ApiAdresseDataGouvService {
  //Documention of API : https://adresse.data.gouv.fr/api-doc/adresse

  async fetchAddressesFromLatLon(lat: number, lon: number) {
    const baseUrl = 'https://api-adresse.data.gouv.fr/reverse/'
    const url = baseUrl + `?lon=${lon}&lat=${lat}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
}

export const apiAdresseDataGouvService = new ApiAdresseDataGouvService()
