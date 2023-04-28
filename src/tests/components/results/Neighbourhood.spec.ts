import { mount, VueWrapper } from '@vue/test-utils'
import NeighbourhoodData from '@/components/results/NeighbourhoodData.vue'
import { useAddressStore } from '@/stores/address'
import { useDistrictStore } from '@/stores/districtInformations'
import { createTestingPinia } from '@pinia/testing'
import { apiIrisService } from '@/services/api-code-iris'
import { apiEnedisDistrictService } from '@/services/api-enedis-district'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

import { vi } from 'vitest'

describe('NeighbourhoodData', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(NeighbourhoodData, {
      global: {
        provide: {
          apiIrisService,
          apiEnedisDistrictService,
        },
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

  afterEach(() => {
    fetchMock.resetMocks()
  })

  it('renders correctly', () => {
    const addressStore = useAddressStore()
    const districtStore = useDistrictStore()
    addressStore.setLatitudeAndLongitude(48.119741, -1.656597)
    districtStore.setDistrictProduction(40.5)
    districtStore.setDistrictNumberInstallations(13)

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
    console.log('nombre panneaux', districtNumberInstallations)
    const districtProduction = wrapper.find('#district-production').text()

    expect(districtNumberInstallations).toBe('13')
    expect(districtProduction).toBe('40.5 MWh.')
  })
})
