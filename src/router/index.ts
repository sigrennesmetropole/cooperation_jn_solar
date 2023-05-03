import { createRouter, createWebHistory } from 'vue-router'

const redirectToRoofSelection = (
  // @ts-ignore
  to,
  // @ts-ignore
  from,
  // @ts-ignore
  next
) => {
  if (
    (from.name === undefined || from.name === null) &&
    to.name !== 'home' &&
    to.name !== 'roof-selection'
  ) {
    next({ name: 'roof-selection' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/roof-selection',
    name: 'roof-selection',
    component: () => import('../views/RoofSelectionView.vue'),
  },
  {
    path: '/roof-selected-information',
    name: 'roof-selected-information',
    component: () => import('../views/RoofSelectedInformation.vue'),
    beforeEnter: redirectToRoofSelection,
  },
  {
    path: '/step-sunshine',
    name: 'step-sunshine',
    component: () => import('../views/StepSunshineView.vue'),
    beforeEnter: redirectToRoofSelection,
  },
  {
    path: '/legalnotice/:legallink',
    name: 'legal-notice',
    component: () => import('../views/LegalNoticeView.vue'),
    beforeEnter: redirectToRoofSelection,
  },
  {
    path: '/end-simulation',
    name: 'end-simulation',
    component: () => import('../views/SimulationAutocalsolView.vue'),
    beforeEnter: redirectToRoofSelection,
  },
  {
    path: '/simulation-results',
    name: 'simulation-results',
    component: () => import('../views/SimulationResultsView.vue'),
    beforeEnter: redirectToRoofSelection,
  },

  // TODO: Create 404 route?
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export { routes }
export default router
