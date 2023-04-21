import { mount, VueWrapper } from '@vue/test-utils'
import PhotoVoltaique from '@/components/results/PhotoVoltaique.vue'

describe('PhotoVoltaique.vue', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(PhotoVoltaique)
  })
  it('renders the component correctly', () => {
    expect(wrapper.findComponent(PhotoVoltaique).exists()).toBe(true)
  })

  it('renders the photovoltaique.info link correctly', () => {
    const link = wrapper.find('span.underline')
    expect(link.text()).toContain('photovoltaique.info')
  })

  it('calls goToPhotovoltaiqueInfo() function when the button is clicked', async () => {
    const spy = jest.spyOn(window, 'open').mockImplementation()
    const button = wrapper.find('#photovoltaiqueButton')
    await button.trigger('click')
    expect(spy).toHaveBeenCalledWith(
      'https://www.photovoltaique.info/fr/',
      '_blank'
    )
    spy.mockRestore()
  })
})
