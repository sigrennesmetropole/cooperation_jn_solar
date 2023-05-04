import StepIllustration from '@/components/simulation/StepIllustration.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'

describe('StepIllustration.vue', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(StepIllustration, {
      propsData: {
        image: 'potentiel.svg',
        text: 'Ensoleillement',
        selected: true,
      },
    })
  })

  it('renders the component correctly', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
