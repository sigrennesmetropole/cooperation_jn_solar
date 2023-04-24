import { mount } from '@vue/test-utils'
import LargeFooter from '@/components/simulation/LargeFooter.vue'
const mockUiLinkFooter = {
  name: 'UiLinkFooter',
  template: '<div @click="$emit(\'click\')"><slot/></div>',
}

describe('LargeFooter', () => {
  it('renders the UiRennesLogo component', () => {
    const wrapper = mount(LargeFooter)
    expect(wrapper.findComponent({ name: 'UiRennesLogo' }).exists()).toBe(true)
  })
  it('renders the legal items', () => {
    const legalList = [
      { name: 'Privacy Policy', link: 'https://example.com/privacy-policy' },
      {
        name: 'Terms of Service',
        link: 'https://example.com/terms-of-service',
      },
    ]
    const wrapper = mount(LargeFooter, {
      props: {
        legalList: legalList,
      },
      global: {
        stubs: {
          UiLinkFooter: mockUiLinkFooter,
        },
      },
    })
    expect(wrapper.exists()).toBe(true)
    legalList.forEach((item) => {
      expect(wrapper.text()).toContain(item.name)
    })
  })
})
