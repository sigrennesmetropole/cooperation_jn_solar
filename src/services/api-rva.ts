class ApiRvaService {
  //Documention of API : https://api-rva.sig.rennesmetropole.fr/documentation.php
  async fetchAddress(search: string) {
    const baseUrl = 'https://api-rva.sig.rennesmetropole.fr/'
    const api_key = 'b44535986cf3abf2428d'
    const url =
      baseUrl +
      `?key=${api_key}&version=1.0&format=json&epsg=4326&cmd=getfulladdresses&query=${search}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
}

export const apiRvaService = new ApiRvaService()
