import { createRouter, createWebHistory } from 'vue-router'
import { _paq } from '@/matomo.js'
import { useViewsStore } from '@/stores/views'

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
    to.name !== 'legal-notice' &&
    to.name !== 'redirect-enedis'
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
    path: '/roof-selection',
    name: 'roof-selection',
    component: () => import('../views/RoofSelectionView.vue'),
    meta: {
      title: 'Page Roof Selection',
    },
  },
  {
    path: '/roof-selected-information',
    name: 'roof-selected-information',
    component: () => import('../views/RoofSelectedInformation.vue'),
    beforeEnter: redirectToRoofSelection,
    meta: {
      title: 'Page Roof Selected Information',
    },
  },
  {
    path: '/step-sunshine',
    name: 'step-sunshine',
    component: () => import('../views/StepSunshineView.vue'),
    beforeEnter: redirectToRoofSelection,
    meta: {
      title: 'Page Step Sunshine',
    },
  },
  {
    path: '/legalnotice/:legallink',
    name: 'legal-notice',
    component: () => import('../views/LegalNoticeView.vue'),
    beforeEnter: redirectToRoofSelection,
    meta: {
      title: 'Page Legal Notice',
    },
  },
  {
    path: '/end-simulation',
    name: 'end-simulation',
    component: () => import('../views/SimulationAutocalsolView.vue'),
    beforeEnter: redirectToRoofSelection,
    meta: {
      title: 'Page End Simulation',
    },
  },
  {
    path: '/simulation-results',
    name: 'simulation-results',
    component: () => import('../views/SimulationResultsView.vue'),
    beforeEnter: redirectToRoofSelection,
    meta: {
      title: 'Page Simulation Results',
    },
  },
  {
    path: '/redirect-enedis',
    name: 'redirect-enedis',
    component: () => import('../views/RedirectionEnedisView.vue'),
    beforeEnter: redirectToRoofSelection,
    meta: {
      title: 'Page Redirection Enedis',
    },
  },

  // TODO: Create 404 route?
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

if (router !== undefined) {
  router.afterEach(
    (
      // @ts-ignore
      to,
      // @ts-ignore
      from
    ) => {
      // Track the page view after navigation is confirmed
      _paq.push(['setCustomUrl', to.fullPath])
      _paq.push(['setDocumentTitle', to.meta.title || 'My New Title'])
      _paq.push(['trackPageView'])

      //Store the previous route
      const viewStore = useViewsStore()
      viewStore.previousRoute = from.name as string
    }
  )
}

export { routes }
export default router
