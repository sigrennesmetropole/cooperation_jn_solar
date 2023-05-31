import { mount, VueWrapper } from '@vue/test-utils'
import PhotoVoltaique from '@/components/results/PhotoVoltaique.vue'
import { createTestingPinia } from '@pinia/testing'
import { useConfigStore } from '@/stores/config'
import configuration from '@/tests/config/configuration_test.json'

describe('PhotoVoltaique.vue', () => {
  let wrapper: VueWrapper
  let configStore

  beforeEach(async () => {
    const testingPinia = createTestingPinia()
    configStore = useConfigStore(testingPinia)
    configStore.config = configuration
    wrapper = mount(PhotoVoltaique, {
      global: {
        plugins: [testingPinia],
      },
    })
  })

  it('renders the component correctly', () => {
    expect(wrapper.findComponent(PhotoVoltaique).exists()).toBe(true)
  })

  it('renders the photovoltaique.info link correctly', () => {
    const link = wrapper.find('strong.underline')
    expect(link.text()).toContain('photovoltaique.info')
  })
})
