import { shallowMount } from '@vue/test-utils'
import LabelsProfitability from '@/components/results/LabelsProfitability.vue'
import { mount } from '@vue/test-utils'

describe('LabelsProfitability', () => {
  const wrapper = mount(LabelsProfitability, {
    slots: {
      img: '<img src="test-image.jpg" alt="Test Image">',
      title: '<div>Title test</div>',
      icon: '<div></div>',
    },
    props: {
      link: 'https://www.photovoltaique.info/fr',
    },
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('displays link', () => {
    const photovoltaiqueLink = wrapper.find('a'[0])
    expect(photovoltaiqueLink.exists()).toBe(true)
  })

  it('renders a link with the correct href', () => {
    const link = 'https://www.photovoltaique.info/fr/'
    const wrapper = shallowMount(LabelsProfitability, {
      props: { link },
    })
    const a = wrapper.find('a')
    expect(a.attributes('href')).toBe(link)
  })
})
