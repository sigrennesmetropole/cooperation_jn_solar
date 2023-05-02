import { mount } from '@vue/test-utils'
import UiLinkWithIconArrow from '@/components/ui/UiLinkWithIconArrow.vue'

describe('UiLinkWithIconArrow.vue', () => {
  const link = 'https://www.example.com/'

  it('renders the component correctly', () => {
    const wrapper = mount(UiLinkWithIconArrow, {
      props: { link, isPdf: false },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('sets the correct href and target attributes for both anchor tags', () => {
    const wrapper = mount(UiLinkWithIconArrow, {
      props: { link, isPdf: false },
    })

    const anchorTags = wrapper.findAll('a')

    anchorTags.forEach((anchor) => {
      expect(anchor.attributes('href')).toBe(link)
      expect(anchor.attributes('target')).toBe('_blank')
    })
  })

  it('applies the correct class based on the isPdf prop', async () => {
    const wrapper = mount(UiLinkWithIconArrow, {
      props: { link, isPdf: false },
    })

    const img = wrapper.find('img')
    expect(img.classes()).toContain('mt-1')

    await wrapper.setProps({ isPdf: true })
    expect(img.classes()).toContain('mt-4')
  })
})
