import { mount, VueWrapper } from '@vue/test-utils'
import EnergiesRennes from '@/components/results/EnergiesRennes.vue'
import { createTestingPinia } from '@pinia/testing'
import { useConfigStore } from '@/stores/config'
import configuration from '@/tests/config/configuration_test.json'

describe('Energies.vue', () => {
  let wrapper: VueWrapper
  let configStore

  beforeEach(async () => {
    const testingPinia = createTestingPinia()
    configStore = useConfigStore(testingPinia)
    configStore.config = configuration
    wrapper = mount(EnergiesRennes, {
      global: {
        plugins: [testingPinia],
      },
    })
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
