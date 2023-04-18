import ElectricityConsumptionButton from '@/components/simulation/ElectricityConsumptionButton.vue'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useSimulationStore } from '@/stores/simulations'

describe('ElectricityConsumptionButton.vue', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(ElectricityConsumptionButton, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
            stubPatch: false,
            fakeApp: true,
          }),
        ],
      },
    })
  })

  it('renders the component correctly', () => {
    expect(wrapper.exists()).toBe(true)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('updates currentSubStep to 3 when the first button is clicked', async () => {
    const simulationStore = useSimulationStore()
    const firstButton = wrapper.find('[id="button-manual-input"]')
    await firstButton.trigger('click')
    expect(simulationStore.currentSubStep).toBe(3)
  })

  it('updates currentSubStep to 4 when the second button is clicked', async () => {
    const simulationStore = useSimulationStore()
    const secondButton = wrapper.find('[id="button-linky"]')
    await secondButton.trigger('click')
    expect(simulationStore.currentSubStep).toBe(4)
  })
})
