import { describe, it, expect, vi } from 'vitest'
import { routes } from '@/router'
import { useSimulationStore } from '@/stores/simulations'
import { createRouter, createWebHistory, Router } from 'vue-router'
import { mount, VueWrapper } from '@vue/test-utils'
import FooterButton from '@/components/simulation/FooterButtons.vue'
import { createTestingPinia } from '@pinia/testing'

describe('FooterButton', () => {
  describe('when it is clicked on Suivant', () => {
    let router: Router
    let wrapper: VueWrapper
    const simulationStore = useSimulationStore()

    beforeEach(async () => {
      router = createRouter({
        history: createWebHistory(),
        routes: routes,
      })
      router.push('/')
      await router.isReady()

      wrapper = mount(FooterButton, {
        global: {
          plugins: [
            createTestingPinia({
              createSpy: vi.fn,
              stubActions: false,
              stubPatch: false,
              fakeApp: true,
            }),
            router,
          ],
        },
      })
    })
    it('goes to the next step', async () => {
      const footerButton = wrapper.findComponent(FooterButton)

      /////// quelle étape de la step ?
      const actualStep = simulationStore.currentStep

      const push = jest.spyOn(router, 'push')
      await footerButton?.trigger('click')
      expect(push).toHaveBeenCalledTimes(1)
      // expect(push).toHaveBeenCalledWith('/home')
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
