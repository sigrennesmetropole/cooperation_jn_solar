import ElectricityConsumptionManual from '@/components/simulation/ElectricityConsumptionManual.vue'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'

describe('ElectricityConsumptionManual.vue', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(ElectricityConsumptionManual, {
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

  it('stores consumption value when input changes', async () => {
    const consumptionInput = wrapper.find('input[type="number"]')
    await consumptionInput.setValue('1500')
    await consumptionInput.trigger('keyup')
    const consumptionAndProductionStore = useConsumptionAndProductionStore()
    expect(consumptionAndProductionStore.annualConsumption).toBe(1500)
  })

  it('shows kWh unit when input is completed', async () => {
    const consumptionInput = wrapper.find('input[type="number"]')
    await consumptionInput.setValue('1500')
    const unitElement = wrapper.find('[append-unit="kWh"]')
    expect(unitElement.exists()).toBe(true)
  })

  it('hides kWh unit when input is empty', async () => {
    const consumptionInput = wrapper.find('input[type="number"]')
    await consumptionInput.setValue('')
    const unitElement = wrapper.find('[append-unit="kWh"]')
    expect(unitElement.exists()).toBe(false)
  })
})
