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
    const link = wrapper.find('strong.underline')
    expect(link.text()).toContain('photovoltaique.info')
  })
})
