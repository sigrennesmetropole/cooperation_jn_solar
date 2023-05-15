import { createRouter, createWebHistory } from 'vue-router'
import { _paq } from '@/matomo.js'

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
    to.name !== 'roof-selection' &&
    to.name !== 'legal-notice'
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
    meta: {
      title: 'Page Home',
      order: 1,
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'Page Home',
      order: 1,
    },
  },
  {
    path: '/roof-selection',
    name: 'roof-selection',
    component: () => import('../views/RoofSelectionView.vue'),
    meta: {
      title: 'Page Roof Selection',
      order: 2,
    },
  },
  {
    path: '/roof-selected-information',
    name: 'roof-selected-information',
    component: () => import('../views/RoofSelectedInformation.vue'),
    beforeEnter: redirectToRoofSelection,
    meta: {
      title: 'Page Roof Selected Information',
      order: 3,
    },
  },
  {
    path: '/step-sunshine',
    name: 'step-sunshine',
    component: () => import('../views/StepSunshineView.vue'),
    beforeEnter: redirectToRoofSelection,
    meta: {
      title: 'Page Step Sunshine',
      order: 4,
    },
  },
  {
    path: '/legalnotice/:legallink',
    name: 'legal-notice',
    component: () => import('../views/LegalNoticeView.vue'),
    beforeEnter: redirectToRoofSelection,
    meta: {
      title: 'Page Legal Notice',
      order: 7,
    },
  },
  {
    path: '/end-simulation',
    name: 'end-simulation',
    component: () => import('../views/SimulationAutocalsolView.vue'),
    beforeEnter: redirectToRoofSelection,
    meta: {
      title: 'Page End Simulation',
      order: 5,
    },
  },
  {
    path: '/simulation-results',
    name: 'simulation-results',
    component: () => import('../views/SimulationResultsView.vue'),
    beforeEnter: redirectToRoofSelection,
    meta: {
      title: 'Page Simulation Results',
      order: 6,
    },
  },

  // TODO: Create 404 route?
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

if (router !== undefined) {
  router.beforeEach((to, from, next) => {
    // @ts-ignore
    if (to.meta.order < from.meta.order) {
      if (window.confirm('Are you sure you want to leave this page?')) {
        next()
      } else {
        next(false)
      }
    } else {
      next()
    }
  })

  router.afterEach(
    (
      // @ts-ignore
      to
    ) => {
      // Track the page view after navigation is confirmed
      _paq.push(['setCustomUrl', to.fullPath])
      _paq.push(['setDocumentTitle', to.meta.title || 'My New Title'])
      _paq.push(['trackPageView'])
    }
  )
}

export { routes }
export default router
