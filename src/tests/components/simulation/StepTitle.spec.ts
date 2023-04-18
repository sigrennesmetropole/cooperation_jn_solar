import StepTitle from '@/components/simulation/StepTitle.vue'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

describe('StepTitle', () => {
  it('renders the correct image and title for each step', () => {
    const imageSources = ['potentiel.svg', 'installation.svg', 'economies.svg']
    const titles = [
      'Votre ensoleillement',
      'Votre installation',
      'Vos économies d’énergie',
    ]

    for (let i = 1; i < imageSources.length; i++) {
      const wrapper = mount(StepTitle, {
        props: {
          step: i,
          'image-source': imageSources[i - 1],
          title: titles[i - 1],
        },
      })
      const image = wrapper.find('img')
      expect(image.exists()).toBe(true)
      expect(wrapper.find('img').attributes('src')).toBe(imageSources[i - 1])
      const h1 = wrapper.find('h1')
      expect(h1.exists()).toBe(true)
      expect(wrapper.find('h1').text()).toBe(titles[i - 1])
    }
  })
})
