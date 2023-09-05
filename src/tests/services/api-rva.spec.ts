import fetchMock from 'jest-fetch-mock'
import { apiRvaService } from '@/services/api-rva'
import { describe, afterEach, expect, it } from 'vitest'
import { getUrlBackOffice } from '@/services/env'

fetchMock.enableMocks()

describe('ApiRvaService', () => {
  afterEach(() => {
    fetchMock.resetMocks()
  })

  it('fetchFullAddresses should return addresses when API response is valid', async () => {
    const search = 'some-search'
    const mockAddresses = [{ address: 'Address 1' }, { address: 'Address 2' }]
    const resultJSON = {
      rva: {
        answer: {
          status: {
            code: 1,
            message: 'ok',
          },
          addresses: mockAddresses,
        },
      },
    }

    fetchMock.mockResponseOnce(JSON.stringify(resultJSON))

    const result = await apiRvaService.fetchFullAddresses(search)

    expect(fetch).toHaveBeenCalledTimes(1)
    const urlBackOffice = await getUrlBackOffice()

    expect(fetch).toHaveBeenCalledWith(
      `${urlBackOffice}/api/rva/fulladdress?q=${search}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
    expect(result).toEqual(resultJSON)
  })

  it('fetchStreets should return streets when API response is valid', async () => {
    const search = 'some-search'
    const mockStreets = [{ street: 'Street 1' }, { street: 'Street 2' }]
    const resultJSON = {
      rva: {
        answer: {
          status: {
            code: 1,
            message: 'ok',
          },
          lanes: mockStreets,
        },
      },
    }

    fetchMock.mockResponseOnce(JSON.stringify(resultJSON))

    const result = await apiRvaService.fetchStreets(search)

    expect(fetch).toHaveBeenCalledTimes(1)
    const urlBackOffice = await getUrlBackOffice()
    expect(fetch).toHaveBeenCalledWith(
      `${urlBackOffice}/api/rva/streets?q=${search}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
    expect(result).toEqual(resultJSON)
  })

  it('fetchCommunes should return communes when API response is valid and search string is included in city names', async () => {
    const search = 'city'
    const mockCities = [
      { name: 'City 1' },
      { name: 'City 2' },
      { name: 'Not Matching 1' },
      { name: 'Not Matching 2' },
    ]
    const resultJSON = {
      rva: {
        answer: {
          status: {
            code: 1,
            message: 'ok',
          },
          cities: mockCities,
        },
      },
    }

    fetchMock.mockResponseOnce(JSON.stringify(resultJSON))

    const result = await apiRvaService.fetchCommunes(search)

    expect(fetch).toHaveBeenCalledTimes(1)
    const urlBackOffice = await getUrlBackOffice()
    expect(fetch).toHaveBeenCalledWith(
      `${urlBackOffice}/api/rva/communes?q=${search}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
    expect(result).toEqual(resultJSON)
  })
})
