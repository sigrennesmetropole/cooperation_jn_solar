// import { useRoofsStore } from '@/stores/roof'
import { createRouter, createWebHistory } from 'vue-router'

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
    path: '/roof-selected-information',
    name: 'roof-selected-information',
    component: () => import('../views/RoofSelectedInformation.vue'),
  },
  {
    path: '/roof-selection',
    name: 'roof-selection',
    component: () => import('../views/RoofSelectionView.vue'),
  },
  {
    path: '/step-sunshine',
    name: 'step-sunshine',
    component: () => import('../views/StepSunshineView.vue'),
  },
  {
    path: '/legalnotice/:legallink',
    name: 'legal-notice',
    component: () => import('../views/LegalNoticeView.vue'),
  },
  {
    path: '/end-simulation',
    name: 'end-simulation',
    component: () => import('../views/SimulationAutocalsolView.vue'),
  },
  {
    path: '/simulation-results',
    name: 'simulation-results',
    component: () => import('../views/SimulationResultsView.vue'),
  },

  // TODO: Create 404 route?
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

// router.beforeEach((to, from, next) => {
//   console.log('avant le routing')
//   console.log('from', from.name)
//   console.log('to', to.name)
//   if (from.name === undefined && to.name !== 'home') {
//     next({ name: 'home' })
//   } else {
//     next()
//   }
// })

// const roofStore = useRoofsStore()

// router.beforeEach((to, from, next) => {
//   // if( roofStore.selectedBuildingId === null) {
//     console.log ("store vide")
//     // console.log(roofStore.selectedBuildingId)
//     // next({ name: 'roof-selection' })
//   // }
//   // else {
//     next()
//   // }
// })

export { routes }
export default router
