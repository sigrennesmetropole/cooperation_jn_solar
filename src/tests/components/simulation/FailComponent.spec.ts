import { shallowMount } from '@vue/test-utils'
import FailComponent from '@/components/simulation/FailComponent.vue'

describe('MyComponent', () => {
  it('renders the correct content', () => {
    const wrapper = shallowMount(FailComponent)
    expect(wrapper.find('img').attributes('src')).toBe(
      '/src/assets/illustrations/fail.svg'
    )
    expect(wrapper.find('h2').text()).toBe('Oups...')
    expect(wrapper.find('p').text()).toBe(
      'les services interrogés sont indisponibles. Merci de réessayer dans quelques instants...'
    )
    expect(wrapper.find('button').text()).toBe('Réessayer')
  })

  it('emits the correct event on button click', () => {
    const wrapper = shallowMount(FailComponent)
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('retry-end-simulation')).toBeTruthy()
  })
})
