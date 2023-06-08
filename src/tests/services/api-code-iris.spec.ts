import fetchMock from 'jest-fetch-mock'
import { describe, it, expect } from 'vitest'
import { apiIrisService } from '@/services/api-code-iris'
import { getUrlBackOffice } from '@/services/env'
fetchMock.enableMocks()
describe('ApiIrisService', () => {
  afterEach(() => {
    fetchMock.resetMocks()
  })
  it('getCodeIris should return code iris data when API response is valid', async () => {
    const lat = '48.123456'
    const lon = '-1.654321'
    const mockCodeIrisData = {
      code_iris: '0123456789',
      insee_code: '35000',
    }
    fetchMock.mockResponseOnce(JSON.stringify(mockCodeIrisData))
    const result = await apiIrisService.getCodeIris(lat, lon)
    expect(fetch).toHaveBeenCalledTimes(1)
    const urlBackOffice = await getUrlBackOffice()
    expect(fetch).toHaveBeenCalledWith(
      `${urlBackOffice}/api/codeiris/${lat}/${lon}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
    expect(result).toEqual(mockCodeIrisData)
  })
})
