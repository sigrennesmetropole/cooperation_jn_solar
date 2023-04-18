import InformationsEnergySaving from '@/components/simulation/InformationsEnergySaving.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'

describe('InformationsEnergySaving.vue', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(InformationsEnergySaving)
  })

  it('renders the component correctly', () => {
    expect(wrapper.exists()).toBe(true)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('displays the correct information for the currentInfo', () => {
    const title = wrapper.find('span.font-bold')
    const description = wrapper.find('span.font-normal')
    expect(title.text()).toBe('Qu’est-ce que l’autoconsommation ?')
    expect(description.text()).toContain('Consommer chez vous')
  })

  it('changes currentInfo when a different circle is clicked', async () => {
    const secondCircle = wrapper.findAll('.cursor-pointer')[1]
    await secondCircle.trigger('click')
    const title = wrapper.find('span.font-bold')
    const description = wrapper.find('span.font-normal')
    expect(title.text()).toBe('Maitriser au mieux votre budget électricité.')
    expect(description.text()).toContain('En devenant producteur')
  })
})
