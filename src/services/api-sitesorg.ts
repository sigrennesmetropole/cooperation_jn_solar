class ApiSitesorgService {
  //Documention of API : https://api-sitesorg.sig.rennesmetropole.fr/doc/api

  private baseUrl = 'https://api-sitesorg.sig.rennesmetropole.fr/v1/'

  async sendRequest(url: string) {
    const api_key = '025cc36fddfe4ae6bf013fbf0c9a623f'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': api_key,
      },
    })
    const data = await response.json()
    return data
  }

  async fetchOrganizations(search: string) {
    const baseUrl = this.baseUrl + 'recherche'
    const url =
      baseUrl +
      `?termes=${search}&termes_op=AND&types[]=organisme&offset=0&limit=3`
    return await this.sendRequest(url)
  }

  async fetchOrganizationById(id: number) {
    const url = this.baseUrl + 'organismes/' + id
    return await this.sendRequest(url)
  }

  async fetchSiteById(id: number) {
    const url = this.baseUrl + 'sites/' + id + '/asGeoJson'
    return await this.sendRequest(url)
  }
}

export const apiSitesorgService = new ApiSitesorgService()
