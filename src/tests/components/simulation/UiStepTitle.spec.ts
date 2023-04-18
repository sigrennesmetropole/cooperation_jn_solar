import UiStepTitle from '@/components/simulation/UiStepTitle.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'

describe('UiStepTitle.vue', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(UiStepTitle, {
      propsData: {
        imageSource: 'installation.svg',
        title: 'Votre installation',
      },
    })
  })

  it('renders the component correctly', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
