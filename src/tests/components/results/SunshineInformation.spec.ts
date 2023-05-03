// @ts-nocheck
import { mount, VueWrapper } from '@vue/test-utils'
import SunshineInformation from '@/components/results/SunshineInformation.vue'
import RoofInformationsBox from '@/components/simulation/RoofInformationsBox.vue'
import { useAddressStore } from '@/stores/address'
import { createTestingPinia } from '@pinia/testing'
import { vi } from 'vitest'

const mockedRoofSurface = {
  surface_id: 53123,
  values: [13.832112, 74.012886, 12.155002, 0],
  favorable: 10,
  total: 87,
  orientation: 'EST',
  azimuth: 80,
  inclinaison: 1,
}

describe('SunshineInformation.vue', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(SunshineInformation, {
      props: {
        selectedRoof: mockedRoofSurface,
      },
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

  it('renders the address correctly', async () => {
    const addressStore = useAddressStore()
    addressStore.setAddress('17, rue de la Finlande, 35000 Rennes')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('#div-address').text()).toContain(
      '17, rue de la Finlande, 35000 Rennes'
    )
  })

  it('renders the RoofInformationsBox component', () => {
    expect(wrapper.findComponent(RoofInformationsBox).exists()).toBe(true)
  })
})
