import { apiAdresseDataGouvService } from '@/services/api-adresse-data-gouv'
import { useAddressStore } from '@/stores/address'
import fetchMock from 'jest-fetch-mock'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'

fetchMock.enableMocks()
const mockPinia = createPinia()

describe('ApiAdresseDataGouvService', () => {
  afterEach(() => {
    fetchMock.resetMocks()
  })

  beforeEach(() => {
    // Use the mock Pinia instance before each test
    mount({ template: '<div />' }, { global: { plugins: [mockPinia] } })

    const addressStore = useAddressStore()
    addressStore.setAddress('')
  })

  it('fetchAddressesFromLatLon should fetch address and update store', async () => {
    const lat = 48.11195336184506
    const lon = -1.6833433270659883
    const mockAddress = 'Some Address, 35000 Rennes, France'

    fetchMock.mockResponseOnce(
      JSON.stringify({
        features: [
          {
            properties: {
              label: mockAddress,
            },
          },
        ],
      })
    )

    await apiAdresseDataGouvService.fetchAddressesFromLatLon(lat, lon)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      `https://api-adresse.data.gouv.fr/reverse/?lon=${lon}&lat=${lat}`
    )

    const addressStore = useAddressStore()
    expect(addressStore.address).toEqual(mockAddress)
  })

  it('fetchAddressesFromLatLon should not update store if no addresses are found', async () => {
    const lat = 48.11195336184506
    const lon = -1.6833433270659883

    fetchMock.mockResponseOnce(
      JSON.stringify({
        features: [],
      })
    )

    await apiAdresseDataGouvService.fetchAddressesFromLatLon(lat, lon)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      `https://api-adresse.data.gouv.fr/reverse/?lon=${lon}&lat=${lat}`
    )

    const addressStore = useAddressStore()
    expect(addressStore.address).toEqual('')
  })
})
