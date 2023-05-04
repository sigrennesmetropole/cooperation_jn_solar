import fetchMock from 'jest-fetch-mock'
import { apiRvaService } from '@/services/api-rva'
import { describe, afterEach, expect, it } from 'vitest'

fetchMock.enableMocks()

describe('ApiRvaService', () => {
  afterEach(() => {
    fetchMock.resetMocks()
  })

  it('fetchFullAddresses should return addresses when API response is valid', async () => {
    const search = 'some-search'
    const mockAddresses = [{ address: 'Address 1' }, { address: 'Address 2' }]

    fetchMock.mockResponseOnce(
      JSON.stringify({
        rva: {
          answer: {
            status: {
              code: 1,
              message: 'ok',
            },
            addresses: mockAddresses,
          },
        },
      })
    )

    const result = await apiRvaService.fetchFullAddresses(search)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      `https://api-rva.sig.rennesmetropole.fr/?key=b44535986cf3abf2428d&version=1.0&format=json&epsg=4326&cmd=getfulladdresses&query=${search}`
    )
    expect(result).toEqual(mockAddresses)
  })

  it('fetchStreets should return streets when API response is valid', async () => {
    const search = 'some-search'
    const mockStreets = [{ street: 'Street 1' }, { street: 'Street 2' }]

    fetchMock.mockResponseOnce(
      JSON.stringify({
        rva: {
          answer: {
            status: {
              code: 1,
              message: 'ok',
            },
            lanes: mockStreets,
          },
        },
      })
    )

    const result = await apiRvaService.fetchStreets(search)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      `https://api-rva.sig.rennesmetropole.fr/?key=b44535986cf3abf2428d&version=1.0&format=json&epsg=4326&cmd=getlanes&query=${search}&insee=all`
    )
    expect(result).toEqual(mockStreets)
  })

  it('fetchCommunes should return communes when API response is valid and search string is included in city names', async () => {
    const search = 'city'
    const mockCities = [
      { name: 'City 1' },
      { name: 'City 2' },
      { name: 'Not Matching 1' },
      { name: 'Not Matching 2' },
    ]

    fetchMock.mockResponseOnce(
      JSON.stringify({
        rva: {
          answer: {
            status: {
              code: 1,
              message: 'ok',
            },
            cities: mockCities,
          },
        },
      })
    )

    const result = await apiRvaService.fetchCommunes(search)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      `https://api-rva.sig.rennesmetropole.fr/?key=b44535986cf3abf2428d&version=1.0&format=json&epsg=4326&cmd=getcities&query=${search}&insee=all`
    )
    expect(result).toEqual([{ name: 'City 1' }, { name: 'City 2' }])
  })
})
