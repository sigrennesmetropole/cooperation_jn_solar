type ApiData = {
  rva: {
    answer: {
      status: {
        code: number
        message: string
      }
    }
  }
}

class ApiRvaService {
  //Documention of API : https://api-rva.sig.rennesmetropole.fr/documentation.php

  async fetchAddress(
    search: string,
    filter: string,
    displayInsee: boolean = false
  ) {
    const baseUrl = 'https://api-rva.sig.rennesmetropole.fr/'
    const api_key = 'b44535986cf3abf2428d'
    let url =
      baseUrl +
      `?key=${api_key}&version=1.0&format=json&epsg=4326&cmd=${filter}&query=${search}`
    if (displayInsee) {
      url += '&insee=all'
    }
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  isDataValid(data: ApiData) {
    const answer = data.rva.answer
    return answer.status.code == 1 && answer.status.message == 'ok'
  }

  async fetchFullAddresses(search: string) {
    const filter = 'getfulladdresses'
    const data = await this.fetchAddress(search, filter)
    if (!this.isDataValid(data)) {
      return []
    }
    return data.rva.answer.addresses
  }

  async fetchStreets(search: string) {
    const filter = 'getlanes'
    const data = await this.fetchAddress(search, filter, true)
    if (!this.isDataValid(data)) {
      return []
    }
    return data.rva.answer.lanes
  }

  normalizeString(str: string) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/-/g, ' ')
      .toLowerCase()
  }

  isString1IncludedInString2(string1: string, string2: string) {
    const normalizedString1 = this.normalizeString(string1)
    const normalizedString2 = this.normalizeString(string2)

    return normalizedString2.includes(normalizedString1)
  }

  async fetchCommunes(search: string) {
    const filter = 'getcities'
    const data = await this.fetchAddress(search, filter, true)
    if (!this.isDataValid(data)) {
      return []
    }
    const communes = []
    for (const city of data.rva.answer.cities) {
      if (this.isString1IncludedInString2(search, city.name)) {
        communes.push(city)
      }
    }
    return communes
  }
}

export const apiRvaService = new ApiRvaService()
