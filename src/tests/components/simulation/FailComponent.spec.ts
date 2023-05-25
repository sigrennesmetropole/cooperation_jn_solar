import { mount, shallowMount } from '@vue/test-utils'
import FailComponent from '@/components/simulation/FailComponent.vue'

describe('MyComponent', () => {
  it('exists', () => {
    const wrapper = shallowMount(FailComponent)
    expect(wrapper.exists()).toBe(true)
  })

  it('emits the correct event on button click', () => {
    const wrapper = mount(FailComponent)
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('retry-end-simulation')).toBeTruthy()
  })
})
