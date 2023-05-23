import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import SetUpStep from '@/components/simulation/SetUpStep.vue'
import { createTestingPinia } from '@pinia/testing'
import { useSimulationStore } from '@/stores/simulations'
import { useRoofsStore } from '@/stores/roof'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import { useSolarPanelStore } from '@/stores/solarPanels'
const routerWrapper = createRouter({
  history: createWebHistory(),
  routes: routes,
})
routerWrapper.push('/step-sunshine')
await routerWrapper.isReady()
const wrapper = mount(SetUpStep, {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn,
        stubActions: false,
      }),
      routerWrapper,
    ],
  },
})
const simulationStore = useSimulationStore()
const roofsStore = useRoofsStore()
const solarPanelStore = useSolarPanelStore()
describe('SetUpStep', () => {
  it('renders the component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  describe("I'm on step 2", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(2)
      simulationStore.setCurrentSubStep(2)
      roofsStore.roofSurfacesList = [
        {
          surface_id: '53291',
          values: [21.108347, 3.439872, 74.66185, 0.7899346],
          favorable: 297,
          total: 393,
          orientation: 'EST',
          azimuth: 92,
          inclinaison: 20,
        },
        {
          surface_id: '53290',
          values: [24.966963, 4.5679884, 69.98584, 0.47920483],
          favorable: 273,
          total: 388,
          orientation: 'OUEST',
          azimuth: 272,
          inclinaison: 20,
        },
      ]
      roofsStore.selectedRoofSurfaceId = '53291'
      solarPanelStore.currentNumberSolarPanel = 2
    })
    // BoxStep Component
    it('test if boxStep exists', async () => {
      const boxStep = wrapper.find('#savingsCalculation')
      expect(boxStep.exists()).toBe(true)
    })
    it('test image component', async () => {
      const boxStep = wrapper.find('#savingsCalculation')
      const kitchenIcon = boxStep.find('img[src$="economies.svg"]')
      expect(kitchenIcon.exists()).toBe(true)
    })
    it('test title component', async () => {
      const boxStep = wrapper.find('#savingsCalculation')
      const span = boxStep.findAll('span')
      expect(span).toHaveLength(4)
      expect(span[0].text()).toBe('Étape 3')
      expect(span[1].text()).toBe(
        "Quelles économies d'énergie  grâce à cette installation ?"
      )
      // double span because use of UiButton which already span content
      expect(span[2].text()).toBe("Calculer mes économies d'énergie")
      expect(span[3].text()).toBe("Calculer mes économies d'énergie")
    })
    it('test emit function when button is clicked', async () => {
      const boxStep = wrapper.find('#savingsCalculation')
      const button = boxStep.find('button')
      expect(button.exists()).toBe(true)
      expect(button.text()).toBe("Calculer mes économies d'énergie")
      await button.trigger('click')
      expect(simulationStore.currentStep).toBe(3)
      expect(simulationStore.currentSubStep).toBe(1)
    })
    // SimulationResult component
    it('test if simulationResult exists', async () => {
      const result = wrapper.find('#simulationResult')
      expect(result.exists()).toBe(true)
    })
  })

  // ExplanationSelectionObstacles component
  describe("I'm on step 2 and subStep 1", () => {
    beforeEach(async () => {
      simulationStore.setCurrentStep(2)
      simulationStore.setCurrentSubStep(1)
    })
    it('test if ExplanationSelectionObstacles exists', async () => {
      const explanation = wrapper.find('#explanationSelectionObstacles')
      expect(explanation.exists()).toBe(true)
    })
    it('test if ExplanationSelectionObstacles exists', async () => {
      const explanation = wrapper.find('#explanationSelectionObstacles')
      expect(explanation.html()).toMatchSnapshot()
    })
    it('test image component', async () => {
      const explanation = wrapper.find('#explanationSelectionObstacles')
      const obstaclesIcon = explanation.find('img[src$="select-obstacles.jpg"]')
      const deleteIcon = explanation.find('img[src$="interface-delete.svg"]')
      expect(obstaclesIcon.exists()).toBe(true)
      expect(deleteIcon.exists()).toBe(true)
    })
    it('test text component', async () => {
      const explanation = wrapper.find('#explanationSelectionObstacles')
      const p = explanation.findAll('p')
      expect(p).toHaveLength(1)
      expect(p[0].text()).toBe(
        'Zones ne pouvant pas accueillir de panneaux solaires.'
      )
    })
  })
})
