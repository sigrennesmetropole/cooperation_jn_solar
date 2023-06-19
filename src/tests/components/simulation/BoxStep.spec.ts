import { mount } from '@vue/test-utils'
import BoxStep from '@/components/simulation/BoxStep.vue'

describe('BoxStep', () => {
  it('renders correctly', () => {
    const wrapper = mount(BoxStep, {
      slots: {
        nameOfStep: '<div>Name of Step</div>',
        image: '<img src="test-image.jpg" alt="Test Image">',
        text: '<p>Some text</p>',
        buttonContent: '<span>Click me</span>',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('emits buttonBoxAction event when the button is clicked', async () => {
    const wrapper = mount(BoxStep, {
      slots: {
        nameOfStep: '<div>Name of Step</div>',
        image: '<img src="test-image.jpg" alt="Test Image">',
        text: '<p>Some text</p>',
        buttonContent: '<span>Click me</span>',
      },
      props: {
        activeButton: true,
      },
    })

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(wrapper.emitted('buttonBoxAction')).toBeTruthy()
  })
})
