import { describe, it, expect } from 'vitest'
import RoofAccordion from '@/components/simulation/RoofAccordion.vue'
import { mount } from '@vue/test-utils'
import type { RoofSurfaceModel } from '@/model/roof.model'
import RoofInformationsBox from '@/components/simulation/RoofInformationsBox.vue'

const roofSurface: RoofSurfaceModel = {
  surface_id: '1',
  values: [10, 20, 30, 40],
  favorable: 2,
  total: 90,
  orientation: 'Sud',
  inclinaison: 47.9,
  total_building: 100,
}
describe('#RoofAccordion', () => {
  it('renders', () => {
    const props = {
      roofSurface: roofSurface,
      label: 'Label test',
      selected: true,
      isOpen: true,
      isRecommended: true,
      index: 0,
    }
    const wrapper = mount(RoofAccordion, { props })
    expect(wrapper.exists()).toBe(true)
  })
  it('is expanded when isOpen to true', () => {
    const props = {
      roofSurface: roofSurface,
      label: 'Label test',
      selected: true,
      isOpen: true,
      isRecommended: true,
      index: 0,
    }
    const wrapper = mount(RoofAccordion, { props })
    const divTravelTime = wrapper.findAllComponents(RoofInformationsBox)
    expect(divTravelTime.length).toBe(1)
  })
  it('is not expanded when isOpen to false', () => {
    const props = {
      roofSurface: roofSurface,
      label: 'Label test',
      selected: true,
      isOpen: false,
      isRecommended: true,
      index: 0,
    }
    const wrapper = mount(RoofAccordion, { props })
    const divTravelTime = wrapper.findAll('#info-box')
    expect(divTravelTime.length).toBe(0)
  })
  it('radio button is selected when selected to true', () => {
    const props = {
      roofSurface: roofSurface,
      label: 'Label test',
      selected: true,
      isOpen: true,
      isRecommended: true,
      index: 0,
    }
    const wrapper = mount(RoofAccordion, { props })
    const radioInput = wrapper.find('input[type="radio"]')
    // @ts-ignore
    expect(radioInput.element.checked).toBeTruthy()
  })
  it('radio button is not selected when selected to false', () => {
    const props = {
      roofSurface: roofSurface,
      label: 'Label test',
      selected: false,
      isOpen: false,
      isRecommended: true,
      index: 0,
    }
    const wrapper = mount(RoofAccordion, { props })
    const radioInput = wrapper.find('input[type="radio"]')
    // @ts-ignore
    expect(radioInput.element.checked).toBeFalsy()
  })
  it('emit a select event when click on button or his label', async () => {
    const props = {
      roofSurface: roofSurface,
      label: 'Label test',
      selected: false,
      isOpen: false,
      isRecommended: true,
      index: 0,
    }
    const wrapper = mount(RoofAccordion, { props })
    const radioInput = wrapper.find('input[type="radio"]')
    await radioInput.trigger('click')
    expect(wrapper.emitted().clickRoofAccordion).toBeTruthy()
  })
  it('does not emit a select event when click on something else that the button label', async () => {
    const props = {
      roofSurface: roofSurface,
      label: 'Label test',
      selected: false,
      isOpen: false,
      isRecommended: true,
      index: 0,
    }
    const wrapper = mount(RoofAccordion, { props })
    const allElt = wrapper.findAll('div')
    for (const elt of allElt) {
      await elt.trigger('click')
      expect(wrapper.emitted().clickRoofAccordion).toBeFalsy()
    }
  })
})
