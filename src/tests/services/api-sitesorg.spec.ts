import { apiSitesorgService } from '@/services/api-sitesorg'
import fetchMock from 'jest-fetch-mock'
import { describe, it, expect } from 'vitest'
import { getUrlBackOffice } from '@/services/env'

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
    const urlBackOffice = await getUrlBackOffice()

    expect(fetch).toHaveBeenCalledWith(
      `${urlBackOffice}/api/siteorg/organizations?q=${search}`,
      {
        method: 'GET',
        credentials: 'include',
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
    const urlBackOffice = await getUrlBackOffice()

    expect(fetch).toHaveBeenCalledWith(
      `${urlBackOffice}/api/siteorg/organization/${id}`,
      {
        method: 'GET',
        credentials: 'include',
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
    const urlBackOffice = await getUrlBackOffice()

    expect(fetch).toHaveBeenCalledWith(
      `${urlBackOffice}/api/siteorg/site/${id}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
    expect(result).toEqual(mockSite)
  })
})
