<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { getDataFromLocalStorage } from '@/services/enedisService'
import { apiEnedisService } from '@/services/api-enedis-dataconnect'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import { useEnedisStore } from '@/stores/enedis'
import { useRouter } from 'vue-router'
import { useMapStore } from '@/stores/map'

const route = useRoute()
const consumptionAndProductionStore = useConsumptionAndProductionStore()
const enedisStore = useEnedisStore()
const router = useRouter()
const mapStore = useMapStore()

onBeforeMount(async () => {
  console.log('RedirectionEnedisView')
  mapStore.isLoadingMap = true
  let prm = route.query.usage_point_id // PRM is the name of customer id in enedis
  getDataFromLocalStorage()
  if (prm !== undefined && prm !== null) {
    if (Array.isArray(prm)) {
      prm = prm[0]
    }
    await apiEnedisService.setPRMUser(prm as string)
    const consumption = await apiEnedisService.getAnnualConsumption()
    if (consumption !== null && consumption.annual_consumption !== undefined) {
      consumptionAndProductionStore.setAnnualConsumption(
        consumption.annual_consumption / 1000 // wh to kwh
      )
    }
  }
  enedisStore.setIsEnedisRedirection(true)
  mapStore.isLoadingMap = false
  router.push('/step-sunshine')
})
</script>

<template>
  <div></div>
</template>
