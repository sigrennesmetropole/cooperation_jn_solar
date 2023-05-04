import { describe, it, expect } from 'vitest'
import SimulationSteps from '@/components/simulation/SimulationSteps.vue'
import { mount } from '@vue/test-utils'

describe('#SimulationsSteps render different step according to input', () => {
  it('renders the three steps', () => {
    const wrapper = mount(SimulationSteps)
    const divTravelTime = wrapper.findAll('#step-title')
    expect(divTravelTime.length).toBe(3)
  })
  it('highlight first step (sunshine) by default', () => {
    const wrapper = mount(SimulationSteps)
    const divTravelTime = wrapper.get('#step-title')
    expect(divTravelTime.text()).toBe('Ensoleillement')
  })
  it('renders first step (sunshine) with parameter input 1', () => {
    const wrapper = mount(SimulationSteps, {
      propsData: {
        selectedStep: 1,
      },
    })
    const divTravelTime = wrapper.findAll('#step-title')[0]
    expect(divTravelTime.classes().includes('text-neutral-400'))
  })
  it('renders step installation with parameter input 2', () => {
    const wrapper = mount(SimulationSteps, {
      propsData: {
        selectedStep: 2,
      },
    })
    const divTravelTime = wrapper.findAll('#step-title')[1]
    expect(divTravelTime.classes().includes('text-neutral-400'))
  })
  it('highlight step installation with parameter input 3', () => {
    const wrapper = mount(SimulationSteps, {
      propsData: {
        selectedStep: 3,
      },
    })
    const divTravelTime = wrapper.findAll('#step-title')[2]
    expect(divTravelTime.classes().includes('text-neutral-400'))
  })
})
