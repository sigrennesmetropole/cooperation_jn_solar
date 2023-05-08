import { mount, VueWrapper } from '@vue/test-utils'
import SolarCoop from '@/components/results/SolarCoop.vue'

describe('PhotoVoltaique.vue', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(SolarCoop)
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
