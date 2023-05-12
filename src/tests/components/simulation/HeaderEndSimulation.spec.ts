import HeaderEndSimulation from '@/components/simulation/HeaderEndSimulation.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

describe('HeaderEndSimulation.vue', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    const testingpinia = createTestingPinia()
    wrapper = mount(HeaderEndSimulation, {
      global: {
        plugins: [testingpinia],
      },
    })
  })

  it('renders the component correctly', () => {
    expect(wrapper.exists()).toBe(true)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
