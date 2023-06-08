import { apiSitesorgService } from '@/services/api-sitesorg'
import fetchMock from 'jest-fetch-mock'
import { describe, it, expect } from 'vitest'

fetchMock.enableMocks()

describe('ApiSitesorgService', () => {
  afterEach(() => {
    fetchMock.resetMocks()
  })

  // Test case for fetchOrganizations
  it('fetchOrganizations should return organizations data when API response is valid', async () => {
    // Arrange
    const search = 'some-search'
    const mockOrganizations = { key: 'value' }

    fetchMock.mockResponseOnce(JSON.stringify(mockOrganizations))

    // Act
    const result = await apiSitesorgService.fetchOrganizations(search)

    // Assert
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      'https://api-sitesorg.sig.rennesmetropole.fr/v1/recherche?termes=some-search&termes_op=AND&types[]=organisme&offset=0&limit=3',
      {
        method: 'GET',
        headers: {
          'x-api-key': '025cc36fddfe4ae6bf013fbf0c9a623f',
        },
      }
    )
    expect(result).toEqual(mockOrganizations)
  })

  // Test case for fetchOrganizationById
  it('fetchOrganizationById should return organization data when API response is valid', async () => {
    // Arrange
    const id = 123
    const mockOrganization = { key: 'value' }

    fetchMock.mockResponseOnce(JSON.stringify(mockOrganization))

    // Act
    const result = await apiSitesorgService.fetchOrganizationById(id)

    // Assert
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      'https://api-sitesorg.sig.rennesmetropole.fr/v1/organismes/123',
      {
        method: 'GET',
        headers: {
          'x-api-key': '025cc36fddfe4ae6bf013fbf0c9a623f',
        },
      }
    )
    expect(result).toEqual(mockOrganization)
  })

  // Test case for fetchSiteById
  it('fetchSiteById should return site data when API response is valid', async () => {
    // Arrange
    const id = 456
    const mockSite = { key: 'value' }

    fetchMock.mockResponseOnce(JSON.stringify(mockSite))

    // Act
    const result = await apiSitesorgService.fetchSiteById(id)

    // Assert
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      'https://api-sitesorg.sig.rennesmetropole.fr/v1/sites/456/asGeoJson',
      {
        method: 'GET',
        headers: {
          'x-api-key': '025cc36fddfe4ae6bf013fbf0c9a623f',
        },
      }
    )
    expect(result).toEqual(mockSite)
  })
})
