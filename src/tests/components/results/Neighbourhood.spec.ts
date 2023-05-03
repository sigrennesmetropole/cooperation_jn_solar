import { mount, VueWrapper } from '@vue/test-utils'
import NeighbourhoodData from '@/components/results/NeighbourhoodData.vue'
import { useAddressStore } from '@/stores/address'
import { useDistrictStore } from '@/stores/districtInformations'
import { createTestingPinia } from '@pinia/testing'
/* eslint-disable */
import fetchMock from 'jest-fetch-mock'
/* eslint-enable */

import { vi } from 'vitest'

describe('NeighbourhoodData', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(NeighbourhoodData, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
            stubPatch: false,
            fakeApp: true,
          }),
        ],
      },
    })
  })

  it('renders correctly', () => {
    const addressStore = useAddressStore()
    addressStore.setLatitudeAndLongitude(48.119741, -1.656597)
    const districtStore = useDistrictStore()
    districtStore.setDistrictNumberInstallations(13)
    districtStore.setDistrictProduction(40.5)
    districtStore.setDistrictIrisCode(35200000)

    expect(wrapper.exists()).toBe(true)
  })

  it('displays the warning icon', () => {
    expect(wrapper.find('img').attributes('src')).toBe(
      '/src/assets/icons/chat-message-warning.svg'
    )
  })

  it('keeps the correct number of decimals', () => {
    // @ts-ignore
    expect(wrapper.vm.keepDecimals(3.14159, 2)).toBe('3.14')
  })

  it('displays the district informations correctly', async () => {
    const districtStore = useDistrictStore()
    districtStore.setDistrictProduction(40.5)
    districtStore.setDistrictNumberInstallations(13)
    await wrapper.vm.$nextTick()

    const districtNumberInstallations = wrapper.find('#number-panel').text()
    const districtProduction = wrapper.find('#district-production').text()

    expect(districtNumberInstallations).toBe('13')
    expect(districtProduction).toBe('40.5 MWh.')
  })
})
