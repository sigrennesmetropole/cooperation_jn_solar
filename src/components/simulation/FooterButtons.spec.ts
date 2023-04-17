import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import FooterButtons from '@/components/simulation/FooterButtons.vue'
import { createTestingPinia } from '@pinia/testing'
import { useSimulationStore } from '@/stores/simulations'
import { createRouter, createWebHistory } from 'vue-router'
import router, { routes } from '@/router'

const routerWrapper = createRouter({
  history: createWebHistory(),
  routes: routes,
})
routerWrapper.push('/step-simulation')
await routerWrapper.isReady()

const wrapper = mount(FooterButtons, {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn,
        stubActions: false,
      }),
      routerWrapper,
    ],
  },
  propsData: {
    isDisplayNextButton: true,
  },
})
const simulationStore = useSimulationStore()
describe('FooterButton', () => {
  // Verification of the passage of step and substep
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
  describe("I'm on step 2 and subStep 2", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(2)
      simulationStore.setCurrentSubStep(2)
    })
    it('goes to the next step when it is clicked on Suivant', async () => {
      const nextButton = wrapper.find('#nextButton')
      await nextButton.trigger('click')
      expect(simulationStore.currentStep).toBe(3)
      expect(simulationStore.currentSubStep).toBe(1)
    })
  })
  describe("I'm on step 3 and subStep 1", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(3)
      simulationStore.setCurrentSubStep(1)
    })
    it('goes to the next step when it is clicked on Suivant', async () => {
      const nextButton = wrapper.find('#nextButton')
      await nextButton.trigger('click')
      expect(simulationStore.currentStep).toBe(3)
      expect(simulationStore.currentSubStep).toBe(2)
    })
  })
  describe("I'm on step 3 and subStep 2", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(3)
      simulationStore.setCurrentSubStep(2)
    })
    it('goes to the next step when it is clicked on Suivant', async () => {
      const nextButton = wrapper.find('#nextButton')
      await nextButton.trigger('click')
      expect(simulationStore.currentStep).toBe(3)
      expect(simulationStore.currentSubStep).toBe(3)
    })
  })

  // Checking text on next button
  describe("I'm on step 1 and subStep 1", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(1)
      simulationStore.setCurrentSubStep(1)
    })
    it('test content button text', async () => {
      const nextButton = wrapper.find('#nextButton')
      expect(nextButton.text()).toBe('Suivant')
    })
  })
  describe("I'm on step 3 and subStep 1", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(3)
      simulationStore.setCurrentSubStep(1)
    })
    it('test content button text', async () => {
      const nextButton = wrapper.find('#nextButton')
      expect(nextButton.text()).toBe('Suivant')
    })
  })
  describe("I'm on step 3 and subStep 2", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(3)
      simulationStore.setCurrentSubStep(2)
    })
    it('test content button text', async () => {
      const nextButton = wrapper.find('#nextButton')
      expect(nextButton.text()).toBe('Suivant')
    })
  })
  describe("I'm on step 2 and subStep 1", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(2)
      simulationStore.setCurrentSubStep(1)
    })
    it('test content button text', async () => {
      const nextButton = wrapper.find('#nextButton')
      expect(nextButton.text()).toBe('Valider')
    })
  })
  describe("I'm on step 2 and subStep 2", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(2)
      simulationStore.setCurrentSubStep(2)
    })
    it('test content button text', async () => {
      const nextButton = wrapper.find('#nextButton')
      expect(nextButton.text()).toBe('Valider')
    })
  })
  describe("I'm on step 3 and subStep 3", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(3)
      simulationStore.setCurrentSubStep(3)
    })
    it('test content button text', async () => {
      const nextButton = wrapper.find('#nextButton')
      expect(nextButton.text()).toBe('Terminer')
    })
  })
  describe("I'm on step 3 and subStep 4", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(3)
      simulationStore.setCurrentSubStep(4)
    })
    it('test content button text', async () => {
      const nextButton = wrapper.find('#nextButton')
      expect(nextButton.text()).toBe('Terminer')
    })
  })
  // Checking routing when click on Valider or Annuler
  describe("I'm on step 3 and subStep 3", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(3)
      simulationStore.setCurrentSubStep(3)
    })
    it('when I click on the button I go to the end-simulation view', async () => {
      const nextButton = wrapper.find('#nextButton')
      const push = jest.spyOn(router, 'push')
      await nextButton.trigger('click')
      expect(push).toHaveBeenCalledTimes(1)
      expect(push).toHaveBeenCalledWith('end-simulation')
    })
  })
  describe("I'm on step 3 and subStep 4", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(3)
      simulationStore.setCurrentSubStep(4)
    })
    it('when I click on the button I go to the end-simulation view', async () => {
      const nextButton = wrapper.find('#nextButton')
      const push = jest.spyOn(router, 'push')
      await nextButton.trigger('click')
      expect(push).toHaveBeenCalledTimes(1)
      expect(push).toHaveBeenCalledWith('end-simulation')
    })
  })

  /////////////////////when click on Annuler /////////////////////////////

  // describe("I'm on step 1 and subStep 1", () => {
  //   beforeEach(async () => {
  //     simulationStore.setCurrentStep(1)
  //     simulationStore.setCurrentSubStep(1)
  //   })
  //   it('when I click on the cancel button I go to the roof-selection view', async () => {
  //     const cancelButton = wrapper.find('#cancelButton')
  //     const push = jest.spyOn(router, 'push')
  //     await cancelButton.trigger('click')
  //     expect(push).toHaveBeenCalledTimes(1)
  //     expect(push).toHaveBeenCalledWith('roof-selection')
  //   })
  // })
})
