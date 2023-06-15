import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import RoofAccordionOptions from '@/components/simulation/RoofAccordionOptions.vue'
import RoofAccordion from '@/components/simulation/RoofAccordion.vue'
import type { RoofSurfaceModel } from '@/model/roof.model'

const surfacesModelStub: RoofSurfaceModel[] = [
  {
    surface_id: '1',
    values: [10, 20, 30, 40],
    favorable: 2,
    total: 90,
    orientation: 'Sud',
    inclinaison: 47.9,
    total_building: 100,
  },
  {
    surface_id: '2',
    values: [10, 20, 30, 40],
    favorable: 85,
    total: 90,
    orientation: 'Nord',
    inclinaison: 20,
    total_building: 100,
  },
  {
    surface_id: '3',
    values: [10, 20, 30, 40],
    favorable: 44,
    total: 90,
    orientation: 'Est',
    inclinaison: 20,
    total_building: 100,
  },
]

const wrapper = mount(RoofAccordionOptions, {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn,
        stubActions: false,
        stubPatch: false,
        fakeApp: true,
        initialState: {
          roofs: {
            roofSurfacesList: surfacesModelStub,
          },
        },
      }),
    ],
  },
})

describe('#RoofAccordionOptions', async () => {
  it('renders', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('create a list with all the roof surface', () => {
    const accordionItems = wrapper.findAllComponents(RoofAccordion)
    expect(accordionItems.length).toBe(3)
  })
  it('place the best roof surface in first place', () => {
    const accordionItems = wrapper.findAllComponents(RoofAccordion)
    expect(accordionItems[0].props()['roofSurface']['surface_id']).toBe('2')
  })
  it('select the best and first roof surface by default', () => {
    const accordionItems = wrapper.findAllComponents(RoofAccordion)
    expect(accordionItems[0].props()['selected']).toBe(true)
  })
  it('open the best and first roof surface by default', () => {
    const accordionItems = wrapper.findAllComponents(RoofAccordion)
    expect(accordionItems[0].props()['isOpen']).toBe(true)
  })
  it('expand the item when click on it, and keep the others open', async () => {
    const accordionItems = wrapper.findAllComponents(RoofAccordion)
    //given first isOpen and second is closed
    expect(accordionItems[0].props()['isOpen']).toBe(true)
    expect(accordionItems[1].props()['isOpen']).toBe(false)
    //when user click on second item
    await accordionItems[1].trigger('click')
    //second is expanded and the first one stay that way too
    expect(accordionItems[0].props()['isOpen']).toBe(true)
    expect(accordionItems[1].props()['isOpen']).toBe(true)
  })
  it('shrink the item but stay selected when click on selected and expanded item', async () => {
    const accordionItems = wrapper.findAllComponents(RoofAccordion)
    //given first isOpen and selected
    expect(accordionItems[0].props()['isOpen']).toBe(true)
    expect(accordionItems[0].props()['selected']).toBe(true)
    //when click on it
    await accordionItems[0].trigger('click')
    //it became shrink but stay selected
    expect(accordionItems[0].props()['isOpen']).toBe(false)
    expect(accordionItems[0].props()['selected']).toBe(true)
  })
})
