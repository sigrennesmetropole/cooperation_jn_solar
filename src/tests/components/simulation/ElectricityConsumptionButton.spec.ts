import ElectricityConsumptionButton from '@/components/simulation/ElectricityConsumptionButton.vue'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'

describe('ElectricityConsumptionButton.vue', () => {
  it('emits "clickAnnualConsumption" with "manual" when "Saisir les informations de ma facture" button is clicked', async () => {
    const wrapper = mount(ElectricityConsumptionButton)

    const manualInputButton = wrapper.find('#button-manual-input')
    await manualInputButton.trigger('click')

    expect(wrapper.emitted('clickAnnualConsumption')).toBeTruthy()
    expect(wrapper.emitted('clickAnnualConsumption')![0]).toEqual(['manual'])
  })

  it('emits "clickAnnualConsumption" with "linky" when "Connecter mon compteur Linky" button is clicked', async () => {
    const wrapper = mount(ElectricityConsumptionButton)

    const linkyButton = wrapper.find('#button-linky')
    await linkyButton.trigger('click')

    expect(wrapper.emitted('clickAnnualConsumption')).toBeTruthy()
    expect(wrapper.emitted('clickAnnualConsumption')![0]).toEqual(['linky'])
  })
  it('update consumption information when "Passer cette étape" is clicked', async () => {
    const consumptionAndProductionStore = useConsumptionAndProductionStore()
    const wrapper = mount(ElectricityConsumptionButton)

    const skipText = wrapper.find('[id="skipText"]')
    await skipText.trigger('click')
    expect(consumptionAndProductionStore.annualConsumption).toBe(6000)
  })
})
