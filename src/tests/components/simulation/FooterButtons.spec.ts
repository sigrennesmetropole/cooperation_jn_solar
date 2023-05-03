// @ts-ignore
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import FooterButtons from '@/components/simulation/FooterButtons.vue'
import { createTestingPinia } from '@pinia/testing'
import { useSimulationStore } from '@/stores/simulations'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'

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
        stubPatch: false,
        fakeApp: true,
      }),
      routerWrapper,
    ],
  },
  propsData: {
    isDisplayNextButton: true,
  },
})
const simulationStore = useSimulationStore()

const availableSteps = [
  { step: 1, subStep: 1, isFinal: false, text: 'Suivant' }, // Choose roof side
  { step: 2, subStep: 1, isFinal: false, text: 'Valider' }, // Select obstacle
  { step: 2, subStep: 2, isFinal: false, text: 'Valider' }, // Select the number of solar panel
  { step: 3, subStep: 1, isFinal: false, text: 'Suivant' }, // Energy saving information
  { step: 3, subStep: 2, isFinal: false }, // Select input invoice or connect to Linky
]

describe('FooterButton', () => {
  describe('Next button', () => {
    it('click next button', async () => {
      for (let i = 0; i < availableSteps.length - 1; i++) {
        simulationStore.setCurrentStep(availableSteps[i].step)
        simulationStore.setCurrentSubStep(availableSteps[i].subStep)
        const nextButton = wrapper.find('#nextButton')
        expect(nextButton.text()).toBe(availableSteps[i].text)
        await nextButton.trigger('click')
        expect(simulationStore.currentStep).toBe(availableSteps[i + 1].step)
        expect(simulationStore.currentSubStep).toBe(
          availableSteps[i + 1].subStep
        )
      }
      const nextButton = wrapper.find('#nextButton')
      expect(nextButton.exists()).toBe(true)
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

    describe("I'm on step final", () => {
      beforeEach(async () => {
        simulationStore.setCurrentStep(3)
        simulationStore.setCurrentSubStep(3)
      })

      it('test content button text', async () => {
        simulationStore.setCurrentStep(3)
        simulationStore.setCurrentSubStep(3)
        let nextButton = wrapper.find('#nextButton')
        expect(nextButton.text()).toBe('Terminer')

        simulationStore.setCurrentSubStep(4)
        nextButton = wrapper.find('#nextButton')
        expect(nextButton.text()).toBe('Terminer')
      })
    })
  })

  describe('Previous button', () => {
    it('click previous button', async () => {
      for (let i = availableSteps.length - 1; i > 1; i--) {
        simulationStore.setCurrentStep(availableSteps[i].step)
        simulationStore.setCurrentSubStep(availableSteps[i].subStep)

        const cancelButton = wrapper.find('#cancelButton')
        expect(cancelButton.exists()).toBe(false)
        const previousButton = wrapper.find('#previousButton')
        expect(previousButton.text()).toBe('Précédent')
        await previousButton.trigger('click')
        expect(simulationStore.currentStep).toBe(availableSteps[i - 1].step)
        expect(simulationStore.currentSubStep).toBe(
          availableSteps[i - 1].subStep
        )
      }
    })
  })
})
