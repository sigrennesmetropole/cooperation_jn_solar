import WaitingAnimation from '@/components/simulation/WaitingAnimation.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'

describe('WaitingAnimation.vue', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(WaitingAnimation)
  })

  it('renders the component correctly', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
