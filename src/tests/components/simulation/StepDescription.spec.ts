import StepDescription from '@/components/simulation/StepDescription.vue'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

describe('StepDescription', () => {
  describe("I'm on step 1 and substep 1", () => {
    it('renders the correct description for step 1 and substep 1', () => {
      const props = {
        step: 1,
        substep: 1,
      }
      const wrapper = mount(StepDescription, { props })
      expect(wrapper.text()).toBe('Je sélectionne le meilleur pan de toit.')
    })
  })
  describe("I'm on step 2", () => {
    const descriptions = [
      "Je clique sur les éventuels obstacles empêchant l'installation de panneaux solaires sur ce pan de toit comme les vélux ou les cheminées.",
      'Mon installation photovoltaique simulée :',
      'Ce pan de toit ne peut accueillir aucun panneau solaire.',
    ]
    it('renders the correct description for each subStep in step', () => {
      for (let i = 1; i <= 3; i++) {
        const wrapper = mount(StepDescription, {
          props: {
            step: 2,
            substep: i,
          },
        })
        expect(wrapper.text()).toBe(descriptions[i - 1])
      }
    })
  })
  describe("I'm on step 3", () => {
    const descriptions = [
      'Estimez quelle sera votre production, quelle part vous consommerez directement (en fonction de votre profil de consommation) et quelle part sera injectée sur le réseau.',
      'Renseignez votre consommation électrique annuelle',
      '',
      '',
    ]
    it('renders the correct description for each subStep in step', () => {
      for (let i = 1; i <= 4; i++) {
        const wrapper = mount(StepDescription, {
          props: {
            step: 3,
            substep: i,
          },
        })
        expect(wrapper.text()).toBe(descriptions[i - 1])
      }
    })
  })
})
