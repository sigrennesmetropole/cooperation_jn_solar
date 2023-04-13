import { createRouter, createWebHistory } from 'vue-router'
import { _paq } from '@/matomo.js'

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: 'Page Home',
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'Page Home',
    },
  },
  {
    path: '/roof-selected-information',
    name: 'roof-selected-information',
    component: () => import('../views/RoofSelectedInformation.vue'),
    meta: {
      title: 'Page Roof Selected Information',
    },
  },
  {
    path: '/roof-selection',
    name: 'roof-selection',
    component: () => import('../views/RoofSelectionView.vue'),
    meta: {
      title: 'Page Roof Selection',
    },
  },
  {
    path: '/step-sunshine',
    name: 'step-sunshine',
    component: () => import('../views/StepSunshineView.vue'),
    meta: {
      title: 'Page Step Sunshine',
    },
  },
  {
    path: '/legalnotice/:legallink',
    name: 'legal-notice',
    component: () => import('../views/LegalNoticeView.vue'),
    meta: {
      title: 'Page Legalnotice',
    },
  },
  {
    path: '/end-simulation',
    name: 'end-simulation',
    component: () => import('../views/SimulationAutocalsolView.vue'),
    meta: {
      title: 'Page End Simulation',
    },
  },
  {
    path: '/districts',
    name: 'districts',
    component: () => import('../views/DistrictsView.vue'),
    meta: {
      title: 'Page Districts',
    },
  },

  // TODO: Create 404 route?
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.beforeEach((to, from, next) => {
  // Continue navigation
  next()

  // Track the page view after navigation is confirmed
  router.afterEach(() => {
    _paq.push(['setCustomUrl', to.fullPath])
    _paq.push(['setDocumentTitle', to.meta.title || 'My New Title'])
    _paq.push(['trackPageView'])
  })
})

export { routes }
export default router
