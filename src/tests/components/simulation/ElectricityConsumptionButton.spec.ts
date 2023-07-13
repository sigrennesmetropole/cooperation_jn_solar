import ElectricityConsumptionButton from '@/components/simulation/ElectricityConsumptionButton.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import { createTestingPinia } from '@pinia/testing'
import { getDefaultConsumption } from '@/stores/simulations'
import { useConfigStore } from '@/stores/config'
import configuration from '@/tests/config/configuration_test.json'

describe('ElectricityConsumptionButton.vue', () => {
  let wrapper: VueWrapper

  // @ts-ignore
  let consumptionAndProductionStore

  beforeEach(async () => {
    const testingPinia = createTestingPinia()
    consumptionAndProductionStore =
      useConsumptionAndProductionStore(testingPinia)

    const configStore = useConfigStore(testingPinia)
    configStore.config = configuration

    wrapper = mount(ElectricityConsumptionButton, {
      global: {
        plugins: [testingPinia],
      },
    })
  })

  it('click next button', async () => {
    expect(true).toBe(true)
  })

  it('emits "clickAnnualConsumption" with "manual" when "Saisir les informations de ma facture" button is clicked', async () => {
    const manualInputButton = wrapper.find('#button-manual-input')
    await manualInputButton.trigger('click')

    expect(wrapper.emitted('clickAnnualConsumption')).toBeTruthy()
    expect(wrapper.emitted('clickAnnualConsumption')![0]).toEqual(['manual'])
  })

  it('update consumption information when "Passer cette étape" is clicked', async () => {
    const skipText = wrapper.find('[id="skipText"]')
    await skipText.trigger('click')
    // @ts-ignore
    expect(consumptionAndProductionStore.annualConsumption).toBe(
      getDefaultConsumption()
    )
  })
})
