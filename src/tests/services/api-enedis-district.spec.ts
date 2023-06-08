import fetchMock from 'jest-fetch-mock'
import { describe, it, expect } from 'vitest'
import { apiEnedisDistrictService } from '@/services/api-enedis-district'
import { getUrlBackOffice } from '@/services/env'
fetchMock.enableMocks()
describe('ApiEnedisDistrictService', () => {
  afterEach(() => {
    fetchMock.resetMocks()
  })
  it('getDistrictDatas should return district data when API response is valid', async () => {
    const codeIris = 1234567890
    const mockDistrictData = {
      energy_consumption: 15000,
      population: 5000,
    }
    fetchMock.mockResponseOnce(JSON.stringify(mockDistrictData))
    const result = await apiEnedisDistrictService.getDistrictDatas(codeIris)
    expect(fetch).toHaveBeenCalledTimes(1)
    const urlBackOffice = await getUrlBackOffice()
    expect(fetch).toHaveBeenCalledWith(
      `${urlBackOffice}/api/enedis/district/${codeIris}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
    expect(result).toEqual(mockDistrictData)
  })
})
