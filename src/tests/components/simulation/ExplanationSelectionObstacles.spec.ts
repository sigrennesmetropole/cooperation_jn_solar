import ExplanationSelectionObstacles from '@/components/simulation/ExplanationSelectionObstacles.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'

describe('ExplanationSelectionObstacles.vue', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(ExplanationSelectionObstacles)
  })

  it('renders the component correctly', () => {
    expect(wrapper.exists()).toBe(true)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
