import { mount } from '@vue/test-utils'
import LabelsProfitability from '@/components/results/LabelsProfitability.vue'

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
    const photovoltaiqueLink = wrapper.find('p')
    expect(photovoltaiqueLink.exists()).toBe(true)
  })

  it('renders a link with the correct href', () => {
    const link = 'https://www.photovoltaique.info/fr/'
    const wrapper = mount(LabelsProfitability, {
      props: { link },
      slots: {
        img: '<img src="test-image.jpg" alt="Test Image">',
        title: '<div>Title test</div>',
        icon: '<div></div>',
      },
      global: {
        stubs: {
          UiLinkWithIconArrow: {
            template: '<a :href="link" target="_blank" class="stub"></a>',
            props: ['link'],
          },
        },
      },
    })

    const a = wrapper.find('.stub')
    expect(a.attributes('href')).toBe(link)
  })
})
