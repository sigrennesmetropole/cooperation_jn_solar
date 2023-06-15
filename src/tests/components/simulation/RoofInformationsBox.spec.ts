import { shallowMount } from '@vue/test-utils'
import type { RoofSurfaceModel } from '@/model/roof.model'
import RoofInformationsBox from '@/components/simulation/RoofInformationsBox.vue'

// Define a sample roofSurface object for testing
const roofSurface: RoofSurfaceModel = {
  surface_id: '53123',
  values: [13.832112, 74.012886, 12.155002, 0],
  favorable: 10,
  total: 87,
  orientation: 'EST',
  azimuth: 80,
  inclinaison: 1,
  total_building: 87,
}

describe('RoofInformationsBox.vue', () => {
  it('renders favorable and total surface values correctly', () => {
    const wrapper = shallowMount(RoofInformationsBox, {
      props: {
        roofSurface,
        isDisplayBox: true,
      },
    })

    expect(wrapper.find('h3').text()).toContain('10 m²')
    expect(wrapper.find('.text-neutral-900').text()).toContain(
      'de surface favorable'
    )
    expect(wrapper.find('.text-neutral-600').text()).toContain('sur 87 m²')
  })

  it('renders orientation and inclinaison values correctly', () => {
    const wrapper = shallowMount(RoofInformationsBox, {
      props: {
        roofSurface,
        isDisplayBox: true,
      },
    })

    expect(wrapper.findAll('.text-base')[0].text()).toContain('EST')
    expect(wrapper.findAll('.text-base')[1].text()).toContain('1°')
  })

  it('adds the box border style when isDisplayBox is true', () => {
    const wrapper = shallowMount(RoofInformationsBox, {
      props: {
        roofSurface,
        isDisplayBox: true,
      },
    })

    expect(wrapper.find('.flex.flex-col.gap-4').classes()).toContain(
      'box-border'
    )
    expect(wrapper.find('.flex.flex-col.gap-4').classes()).toContain('p-5')
    expect(wrapper.find('.flex.flex-col.gap-4').classes()).toContain(
      'border-[1px]'
    )
    expect(wrapper.find('.flex.flex-col.gap-4').classes()).toContain(
      'border-slate-200'
    )
    expect(wrapper.find('.flex.flex-col.gap-4').classes()).toContain(
      'rounded-lg'
    )
  })

  it('removes the box border style when isDisplayBox is false', () => {
    const wrapper = shallowMount(RoofInformationsBox, {
      props: {
        roofSurface,
        isDisplayBox: false,
      },
    })

    expect(wrapper.find('.flex.flex-col.gap-4').classes()).not.toContain(
      'box-border'
    )
    expect(wrapper.find('.flex.flex-col.gap-4').classes()).not.toContain('p-5')
    expect(wrapper.find('.flex.flex-col.gap-4').classes()).not.toContain(
      'border-[1px]'
    )
    expect(wrapper.find('.flex.flex-col.gap-4').classes()).not.toContain(
      'border-slate-200'
    )
    expect(wrapper.find('.flex.flex-col.gap-4').classes()).not.toContain(
      'rounded-lg'
    )
  })
})
