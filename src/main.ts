import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'
import Notifications from '@kyvg/vue3-notification'
import HighchartsVue from 'highcharts-vue'

import './assets/main.css'
import '@sigrennesmetropole/cooperation_jn_common_ui/dist/style.css'
import { apiConfigService } from '@/services/api-config'

declare global {
  interface Window {
    CESIUM_BASE_URL: string
  }
}
window.CESIUM_BASE_URL = '/node_modules/@vcmap-cesium/engine/Build/'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(VueApexCharts)
app.use(Notifications)
// @ts-ignore
app.use(HighchartsVue)
apiConfigService.getConfig().then(() => {
  app.mount('#app')
})
