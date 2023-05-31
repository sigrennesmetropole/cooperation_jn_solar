import { mount } from '@vue/test-utils'
import UiLinkWithIconArrow from '@/components/ui/UiLinkWithIconArrow.vue'

describe('UiLinkWithIconArrow.vue', () => {
  const link = 'https://www.example.com/'

  it('renders the component correctly', () => {
    const wrapper = mount(UiLinkWithIconArrow, {
      props: { link },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('sets the correct href and target attributes for both anchor tags', () => {
    const wrapper = mount(UiLinkWithIconArrow, {
      props: { link },
    })

    const anchorTags = wrapper.findAll('a')

    anchorTags.forEach((anchor) => {
      expect(anchor.attributes('href')).toBe(link)
      expect(anchor.attributes('target')).toBe('_blank')
    })
  })
})
