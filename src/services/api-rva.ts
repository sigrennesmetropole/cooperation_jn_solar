class ApiRvaService {
  //Documention of API : https://api-rva.sig.rennesmetropole.fr/documentation.php
  async fetchAddress(search: string) {
    const baseUrl = 'https://api-rva.sig.rennesmetropole.fr/'
    const api_key = import.meta.env.VITE_API_KEY_RVA
    const url =
      baseUrl +
      `?key=${api_key}&version=1.0&format=json&epsg=4326&cmd=getfulladdresses&insee=35051&query=${search}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
}

export const apiRvaService = new ApiRvaService()
