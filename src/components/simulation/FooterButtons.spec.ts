import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import FooterButtons from '@/components/simulation/FooterButtons.vue'
import { createTestingPinia } from '@pinia/testing'
import { useSimulationStore } from '@/stores/simulations'

const wrapper = mount(FooterButtons, {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn,
        stubActions: false,
      }),
    ],
  },
  propsData: {
    isDisplayNextButton: true,
  },
})
const simulationStore = useSimulationStore()
describe('FooterButton', () => {
  describe("I'm on step 1 and subStep 1", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(1)
      simulationStore.setCurrentSubStep(1)
    })
    it('goes to the next step when it is clicked on Suivant', async () => {
      const nextButton = wrapper.find('#nextButton')
      await nextButton.trigger('click')
      expect(simulationStore.currentStep).toBe(2)
      expect(simulationStore.currentSubStep).toBe(1)
    })
  }),
    describe("I'm on step 2 and subStep 1", () => {
      beforeEach(async () => {
        simulationStore.setCurrentStep(2)
        simulationStore.setCurrentSubStep(1)
      })
      it('goes to the next step when it is clicked on Suivant', async () => {
        const nextButton = wrapper.find('#nextButton')
        await nextButton.trigger('click')
        expect(simulationStore.currentStep).toBe(2)
        expect(simulationStore.currentSubStep).toBe(2)
      })
    })

  // describe('when it is clicked on Valider', () => {
  //     it('goes to the step 3', () => {

  //     })
  // })
  // describe('when it is clicked on Terminer', () => {
  //     it('goes to the /end-simulation page', () => {

  //     })
  // })
  // describe('when it is clicked on Précédent', () => {
  //     it('goes to the previous step', () => {

  //     })
  // })
  // describe('when it is clicked on Annuler', () => {
  //     it('goes to the /roof-selection page', () => {

  //     })
  // })
})
