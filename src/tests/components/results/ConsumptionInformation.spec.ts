import { mount, VueWrapper } from '@vue/test-utils'
import ConsumptionInformation from '@/components/results/ConsumptionInformation.vue'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import { createTestingPinia } from '@pinia/testing'
import { vi } from 'vitest'

describe('ConsumptionInformation', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(ConsumptionInformation, {
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

  it('renders correctly', () => {
    const consumptionAndProductionStore = useConsumptionAndProductionStore()
    consumptionAndProductionStore.setAnnualConsumption(6000)
    expect(wrapper.exists()).toBe(true)
  })
  it('display annual consumption', async () => {
    const consumptionAndProductionStore = useConsumptionAndProductionStore()
    consumptionAndProductionStore.setAnnualConsumption(6000)
    await wrapper.vm.$nextTick()
    const consumptionValue = wrapper.find('[id="consumptionValue"]')
    expect(consumptionAndProductionStore.annualConsumption + ' kWh/an').toBe(
      consumptionValue.text()
    )
  })
})
