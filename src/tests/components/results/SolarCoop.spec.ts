import { mount, VueWrapper } from '@vue/test-utils'
import SolarCoop from '@/components/results/SolarCoop.vue'
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
    wrapper = mount(SolarCoop, {
      global: {
        plugins: [testingPinia],
      },
    })
  })

  it('renders the component correctly', () => {
    expect(wrapper.findComponent(SolarCoop).exists()).toBe(true)
  })

  it('calls goToSolarCoopInfo() function when the button is clicked', async () => {
    const spy = jest.spyOn(window, 'open').mockImplementation()
    const img = wrapper.find('#solarCoopImg')
    await img.trigger('click')
    expect(spy).toHaveBeenCalledWith('https://www.solarcoop.fr/', '_blank')
    spy.mockRestore()
  })
})
