<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { getDataFromLocalStorage } from '@/services/enedisService'
import { apiEnedisService } from '@/services/api-enedis-dataconnect'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import { useEnedisStore } from '@/stores/enedis'
import { useRouter } from 'vue-router'

const route = useRoute()
const consumptionAndProductionStore = useConsumptionAndProductionStore()
const enedisStore = useEnedisStore()
const router = useRouter()

onBeforeMount(async () => {
  let prm = route.query.usage_points_id
  getDataFromLocalStorage()
  if (prm !== undefined && prm !== null) {
    if (Array.isArray(prm)) {
      prm = prm[0]
    }
    await apiEnedisService.setPRMUser(prm as string)
    const consumption = await apiEnedisService.getAnnualConsumption()
    console.log(consumption)
    if (consumption.annual_consumption !== undefined) {
      consumptionAndProductionStore.setAnnualConsumption(
        consumption.annual_consumption / 1000 // wh to kwh
      )
    }
  }
  enedisStore.setIsEnedisRedirection(true)
  router.push('/step-sunshine')
})
</script>

<template>
  <div></div>
</template>
