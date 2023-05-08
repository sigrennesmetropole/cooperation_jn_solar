import { mount, VueWrapper } from '@vue/test-utils'
import EnergiesRennes from '@/components/results/EnergiesRennes.vue'

describe('Energies.vue', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(EnergiesRennes)
  })
  it('renders the component correctly', () => {
    expect(wrapper.findComponent(EnergiesRennes).exists()).toBe(true)
  })

  it('renders the Énergies du pays de Rennes link correctly', () => {
    const link = wrapper.find('strong.underline')
    expect(link.text()).toContain('Énergies du pays de Rennes')
  })

  it('renders the Énergies du pays de Rennes link correctly', async () => {
    const spy = jest.spyOn(window, 'open').mockImplementation()
    const vilaine = wrapper.find('#vilaine')
    expect(vilaine.text()).toContain("l'association Soleil sur Vilaine")
    await vilaine.trigger('click')
    expect(spy).toHaveBeenCalledWith(
      'https://soleilsurvilaine.centralesvillageoises.fr/',
      '_blank'
    )
    spy.mockRestore()
  })
})
