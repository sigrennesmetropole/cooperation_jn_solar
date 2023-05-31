import { mount } from '@vue/test-utils'
import ButtonVisitWebsite from '@/components/results/ButtonVisitWebsite.vue'

describe('ButtonVisitWebsite.vue', () => {
  const link = 'https://www.example.com/'

  it('renders the component correctly', () => {
    const wrapper = mount(ButtonVisitWebsite, {
      props: { link },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders a link with the correct href', () => {
    const wrapper = mount(ButtonVisitWebsite, {
      props: { link },
    })
    const a = wrapper.find('a')
    expect(a.attributes('href')).toBe(link)
  })

  it('has the correct target attribute on the link', () => {
    const wrapper = mount(ButtonVisitWebsite, {
      props: { link },
    })
    const a = wrapper.find('a')
    expect(a.attributes('target')).toBe('_blank')
  })

  it('has the correct link text', () => {
    const wrapper = mount(ButtonVisitWebsite, {
      props: { link },
    })
    const span = wrapper.find('span')
    expect(span.text()).toBe('Visiter le site')
  })

  it('renders the correct img alt attribute', () => {
    const wrapper = mount(ButtonVisitWebsite, {
      props: { link },
    })
    const img = wrapper.find('img')
    expect(img.attributes('alt')).toBe('')
  })

  it('renders the correct img src attribute', () => {
    const wrapper = mount(ButtonVisitWebsite, {
      props: { link },
    })
    const img = wrapper.find('img')
    expect(img.attributes('src')).toContain('icon-external-link-white-thin.svg')
  })
})
