import { mount } from '@vue/test-utils'
import LargeFooter from '@/components/simulation/LargeFooter.vue'
import type { LegalItem } from '@/model/legalItem.model'

const mockUiLinkFooter = {
  name: 'UiLinkFooter',
  template: '<div @click="window.open(link, \'_blank\')"><slot/></div>',
}

describe('LargeFooter', () => {
  it('renders the UiRennesLogo component', () => {
    const wrapper = mount(LargeFooter)
    expect(wrapper.findComponent({ name: 'UiRennesLogo' }).exists()).toBe(true)
  })
  it('renders the legal items', () => {
    const legalList: LegalItem[] = [
      {
        name: 'Privacy Policy',
        link: 'https://example.com/privacy-policy',
        slug: '_',
      },
      {
        name: 'Terms of Service',
        link: 'https://example.com/terms-of-service',
        slug: '_',
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
