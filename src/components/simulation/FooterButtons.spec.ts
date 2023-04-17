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
  // Next button interaction and routing
  describe("I'm on step 1 and subStep 1", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(1)
      simulationStore.setCurrentSubStep(1)
    })
    it('test content button text', async () => {
      const nextButton = wrapper.find('#nextButton')
      expect(nextButton.text()).toBe('Suivant')
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
      it('test content button text', async () => {
        const nextButton = wrapper.find('#nextButton')
        expect(nextButton.text()).toBe('Valider')
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
    it('test content button text', async () => {
      const nextButton = wrapper.find('#nextButton')
      expect(nextButton.text()).toBe('Valider')
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
    it('test content button text', async () => {
      const nextButton = wrapper.find('#nextButton')
      expect(nextButton.text()).toBe('Suivant')
    })
    it('goes to the next step when it is clicked on Suivant', async () => {
      const nextButton = wrapper.find('#nextButton')
      await nextButton.trigger('click')
      expect(simulationStore.currentStep).toBe(3)
      expect(simulationStore.currentSubStep).toBe(2)
    })
  })
  describe("I'm on step 3 and subStep 2", () => {
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
        isDisplayNextButton: false,
      },
    })
    beforeEach(async () => {
      simulationStore.setCurrentStep(3)
      simulationStore.setCurrentSubStep(2)
    })
    it('test content button text', async () => {
      const nextButton = wrapper.find('#nextButton')
      expect(nextButton.exists()).toBe(false)
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
    it('test content button text', async () => {
      const nextButton = wrapper.find('#nextButton')
      expect(nextButton.text()).toBe('Terminer')
    })
    it('when I click on the button I go to the end-simulation view', async () => {
      const nextButton = wrapper.find('#nextButton')
      const push = jest.spyOn(router, 'push')
      await nextButton.trigger('click')
      expect(push).toHaveBeenCalledTimes(1)
      expect(push).toHaveBeenCalledWith('end-simulation')
    })
  })

  // Previous button interaction and routing
  describe("I'm on step 1 and subStep 1", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(1)
      simulationStore.setCurrentSubStep(1)
    })
    it('test content button text', async () => {
      const cancelButton = wrapper.find('#cancelButton')
      expect(cancelButton.text()).toBe('Annuler')
      const previousButton = wrapper.find('#previousButton')
      expect(previousButton.exists()).toBe(false)
    })
    // it('when I click on the cancel button I go to the roof-selection view', async () => {
    //   const cancelButton = wrapper.find('#cancelButton')
    //   const push = jest.spyOn(router, 'push')
    //   await cancelButton.trigger('click')
    //   expect(push).toHaveBeenCalledTimes(1)
    //   expect(push).toHaveBeenCalledWith('roof-selection')
    // })
  })
  describe("I'm on step 2 and subStep 1", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(2)
      simulationStore.setCurrentSubStep(1)
    })
    it('test content button text', async () => {
      const cancelButton = wrapper.find('#cancelButton')
      expect(cancelButton.exists()).toBe(false)
      const previousButton = wrapper.find('#previousButton')
      expect(previousButton.text()).toBe('Précédent')
    })
    it('on click on previous button', async () => {
      const previousButton = wrapper.find('#previousButton')
      await previousButton.trigger('click')
      expect(simulationStore.currentStep).toBe(1)
      expect(simulationStore.currentSubStep).toBe(1)
    })
  })
  describe("I'm on step 2 and subStep 2", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(2)
      simulationStore.setCurrentSubStep(2)
    })
    it('test content button text', async () => {
      const cancelButton = wrapper.find('#cancelButton')
      expect(cancelButton.exists()).toBe(false)
      const previousButton = wrapper.find('#previousButton')
      expect(previousButton.text()).toBe('Précédent')
    })
    it('on click on previous button', async () => {
      const previousButton = wrapper.find('#previousButton')
      await previousButton.trigger('click')
      expect(simulationStore.currentStep).toBe(2)
      expect(simulationStore.currentSubStep).toBe(1)
    })
  })
  describe("I'm on step 3 and subStep 1", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(3)
      simulationStore.setCurrentSubStep(1)
    })
    it('test content button text', async () => {
      const cancelButton = wrapper.find('#cancelButton')
      expect(cancelButton.exists()).toBe(false)
      const previousButton = wrapper.find('#previousButton')
      expect(previousButton.text()).toBe('Précédent')
    })
    it('on click on previous button', async () => {
      const previousButton = wrapper.find('#previousButton')
      await previousButton.trigger('click')
      expect(simulationStore.currentStep).toBe(2)
      expect(simulationStore.currentSubStep).toBe(2)
    })
  })
  describe("I'm on step 3 and subStep 2", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(3)
      simulationStore.setCurrentSubStep(2)
    })
    it('test content button text', async () => {
      const cancelButton = wrapper.find('#cancelButton')
      expect(cancelButton.exists()).toBe(false)
      const previousButton = wrapper.find('#previousButton')
      expect(previousButton.text()).toBe('Précédent')
    })
    it('on click on previous button', async () => {
      const previousButton = wrapper.find('#previousButton')
      await previousButton.trigger('click')
      expect(simulationStore.currentStep).toBe(3)
      expect(simulationStore.currentSubStep).toBe(1)
    })
  })
  describe("I'm on step 3 and subStep 3", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(3)
      simulationStore.setCurrentSubStep(3)
    })
    it('test content button text', async () => {
      const cancelButton = wrapper.find('#cancelButton')
      expect(cancelButton.exists()).toBe(false)
      const previousButton = wrapper.find('#previousButton')
      expect(previousButton.text()).toBe('Précédent')
    })
    it('on click on previous button', async () => {
      const previousButton = wrapper.find('#previousButton')
      await previousButton.trigger('click')
      expect(simulationStore.currentStep).toBe(3)
      expect(simulationStore.currentSubStep).toBe(2)
    })
  })
  describe("I'm on step 3 and subStep 4", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(3)
      simulationStore.setCurrentSubStep(4)
    })
    it('test content button text', async () => {
      const cancelButton = wrapper.find('#cancelButton')
      expect(cancelButton.exists()).toBe(false)
      const previousButton = wrapper.find('#previousButton')
      expect(previousButton.text()).toBe('Précédent')
    })
    it('on click on previous button', async () => {
      const previousButton = wrapper.find('#previousButton')
      await previousButton.trigger('click')
      expect(simulationStore.currentStep).toBe(3)
      expect(simulationStore.currentSubStep).toBe(2)
    })
  })
})
