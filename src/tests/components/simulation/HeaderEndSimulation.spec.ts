import HeaderEndSimulation from '@/components/simulation/HeaderEndSimulation.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'

describe('HeaderEndSimulation.vue', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(HeaderEndSimulation)
  })

  it('renders the component correctly', () => {
    expect(wrapper.exists()).toBe(true)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
