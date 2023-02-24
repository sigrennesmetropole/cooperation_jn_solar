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
    path: '/map-pcaet',
    name: 'map-pcaet',
    component: () => import('../views/MapPCAETView.vue'),
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
  // TODO: Create 404 route?
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export { routes }
export default router
