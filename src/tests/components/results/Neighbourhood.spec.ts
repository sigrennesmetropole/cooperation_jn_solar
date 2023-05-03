import { mount, VueWrapper } from '@vue/test-utils'
import NeighbourhoodData from '@/components/results/NeighbourhoodData.vue'
import { createTestingPinia } from '@pinia/testing'

import fetchMock from 'jest-fetch-mock'
fetchMock.enableMocks()

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

  afterEach(() => {
    fetchMock.resetMocks()
  })

  it('renders correctly', async () => {
    const codeIris = '352750000'
    const districtDatas = {
      irisName: 'Ouest',
      totalConsumption: 15092.371834339263,
      totalProduction: 341.56210073174316,
      totalPhotovoltaicSites: 20,
    }

    console.log(codeIris)
    console.log(districtDatas)

    // wrapper.vm.gettingIrisCode = () => {
    //   codeIris
    // }
    // wrapper.vm.gettingDistrictDatas = () => {
    //   districtDatas
    // }

    // const spy = jest.spyOn(wrapper.vm, 'gettingIrisCode').mockReturnValue(codeIris)

    // fetchMock.mockResponse(
    //   [
    //     codeIris
    //   ],
    //   [
    //     districtDatas
    //   ]
    // )

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
})
