import { mount } from '@vue/test-utils'
import ButtonVisitWebsite from '@/components/results/ButtonVisitWebsite.vue'

describe('ButtonVisitWebsite.vue', () => {
  const link = 'https://www.example.com/'

  it('renders the component correctly', () => {
    const wrapper = mount(ButtonVisitWebsite, {
      props: { link, isPdf: false },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders a link with the correct href', () => {
    const wrapper = mount(ButtonVisitWebsite, {
      props: { link, isPdf: false },
    })
    const a = wrapper.find('a')
    expect(a.attributes('href')).toBe(link)
  })

  it('adds "pb-4" class to the span when isPdf is true', () => {
    const wrapper = mount(ButtonVisitWebsite, {
      props: { link, isPdf: true },
    })
    const span = wrapper.find('span')
    expect(span.classes()).toContain('pb-4')
  })

  it('does not add "pb-4" class to the span when isPdf is false', () => {
    const wrapper = mount(ButtonVisitWebsite, {
      props: { link, isPdf: false },
    })
    const span = wrapper.find('span')
    expect(span.classes()).not.toContain('pb-4')
  })

  it('has the correct target attribute on the link', () => {
    const wrapper = mount(ButtonVisitWebsite, {
      props: { link, isPdf: false },
    })
    const a = wrapper.find('a')
    expect(a.attributes('target')).toBe('_blank')
  })

  it('has the correct link text', () => {
    const wrapper = mount(ButtonVisitWebsite, {
      props: { link, isPdf: false },
    })
    const span = wrapper.find('span')
    expect(span.text()).toBe('Visiter le site')
  })

  it('renders the correct img alt attribute', () => {
    const wrapper = mount(ButtonVisitWebsite, {
      props: { link, isPdf: false },
    })
    const img = wrapper.find('img')
    expect(img.attributes('alt')).toBe('')
  })

  it('renders the correct img src attribute', () => {
    const wrapper = mount(ButtonVisitWebsite, {
      props: { link, isPdf: false },
    })
    const img = wrapper.find('img')
    expect(img.attributes('src')).toContain('icon-external-link-white-thin.svg')
  })
})
