// @ts-nocheck
import SavingsStep from '@/components/simulation/SavingsStep.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import ElectricityConsumptionButton from '@/components/simulation/ElectricityConsumptionButton.vue'
import InformationsLinky from '@/components/simulation/InformationsLinky.vue'
import AllowAnnualConsumptionPopup from '@/components/simulation/AllowAnnualConsumptionPopup.vue'
import InformationsEnergySaving from '@/components/simulation/InformationsEnergySaving.vue'
import ElectricityConsumptionManual from '@/components/simulation/ElectricityConsumptionManual.vue'
import { useSimulationStore } from '@/stores/simulations'
import { getDefaultConsumption } from '@/stores/simulations'

describe('SavingsStep.vue', () => {
  let wrapper: VueWrapper

  let consumptionAndProductionStore
  let simulationStore

  beforeEach(async () => {
    const testingPinia = createTestingPinia()
    consumptionAndProductionStore =
      useConsumptionAndProductionStore(testingPinia)
    simulationStore = useSimulationStore(testingPinia)

    wrapper = mount(SavingsStep, {
      global: {
        plugins: [testingPinia],
      },
    })
  })

  it('renders the component correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('renders InformationsEnergySaving component when currentSubStep is 1', async () => {
    simulationStore.setCurrentStep(3)
    simulationStore.setCurrentSubStep(1)
    await wrapper.vm.$nextTick()
    expect(wrapper.findComponent(InformationsEnergySaving).exists()).toBe(true)
  })

  it('renders ElectricityConsumptionButton component when currentSubStep is 2', async () => {
    simulationStore.setCurrentStep(3)
    await wrapper.vm.$nextTick()
    simulationStore.currentSubStep = 2
    await wrapper.vm.$nextTick()
    expect(wrapper.findComponent(ElectricityConsumptionButton).exists()).toBe(
      true
    )
  })

  it('renders ElectricityConsumptionManual component when currentSubStep is 3', async () => {
    simulationStore.setCurrentStep(3)
    simulationStore.currentSubStep = 3
    await wrapper.vm.$nextTick()
    expect(wrapper.findComponent(ElectricityConsumptionManual).exists()).toBe(
      true
    )
  })

  it('renders InformationsLinky component when currentSubStep is 4', async () => {
    simulationStore.setCurrentStep(3)
    simulationStore.currentSubStep = 4
    await wrapper.vm.$nextTick()
    expect(wrapper.findComponent(InformationsLinky).exists()).toBe(true)
  })

  describe('PopUp.vue', () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(3)
      simulationStore.currentSubStep = 2
      await wrapper.vm.$nextTick()
      wrapper.vm.showPopUpAllowAnnualConsumption('manual')
    })

    it('display pop up when trigger function showPopUpAllowAnnualConsumption', async () => {
      wrapper.vm.showPopUpAllowAnnualConsumption('manual')
      expect(
        wrapper.findComponent(AllowAnnualConsumptionPopup).isVisible()
      ).toBe(true)
    })

    it('checbox not display when @close is emit', async () => {
      wrapper.vm.showPopUpAllowAnnualConsumption('manual')
      const closeButton = wrapper
        .findComponent(AllowAnnualConsumptionPopup)
        .find('#closeButtonPopup')
      await closeButton.trigger('click')
      expect(wrapper.findComponent(AllowAnnualConsumptionPopup).exists()).toBe(
        false
      )
    })

    it('executes clickContinuePopup with stepAnnualConsumption = manual', async () => {
      wrapper.vm.clickContinuePopup()
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.isDisplayPopup).toBe(false)
      expect(simulationStore.currentSubStep).toBe(3)
    })

    it('executes clickContinuePopup with stepAnnualConsumption = linky', async () => {
      wrapper.vm.showPopUpAllowAnnualConsumption('linky')
      wrapper.vm.clickContinuePopup()
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.isDisplayPopup).toBe(false)
      expect(simulationStore.currentSubStep).toBe(4)
    })

    it('executes goToEndSimulation function correctly', async () => {
      const goToFinalViewSpy = jest.spyOn(simulationStore, 'goToFinalView')

      wrapper.vm.goToEndSimulation()
      await wrapper.vm.$nextTick()

      expect(wrapper.vm.isDisplayPopup).toBe(false)
      expect(consumptionAndProductionStore.annualConsumption).toBe(
        getDefaultConsumption()
      )
      expect(goToFinalViewSpy).toHaveBeenCalled()

      goToFinalViewSpy.mockRestore()
    })
  })
})
