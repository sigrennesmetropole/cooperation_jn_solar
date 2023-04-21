<script setup lang="ts">
import { useRoofsStore } from '@/stores/roof'
import ConsumptionInformation from '@/components/results/ConsumptionInformation.vue'
import GoFurther from '@/components/results/GoFurther.vue'
import SunshineInformation from '@/components/results/SunshineInformation.vue'
import AutocalsolResult from '@/components/results/AutocalsolResult.vue'
import { useAutocalsolStore } from '@/stores/autocalsol'
// import autocalsolResultExample from '@/tests/stores/autocalsolResultExample.json'
// import { useAddressStore } from '@/stores/address'
// import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'

const roofsStore = useRoofsStore()
const autocalsolStore = useAutocalsolStore()

const selectedRoof = roofsStore.getRoofSurfaceModelOfSelectedPanRoof()
const autocalsolResult = autocalsolStore.autocalsolResult

//TO TEST : remove comment bellow | TODO : remove for production
// const consumptionAndProductionStore = useConsumptionAndProductionStore()
// const addressStore = useAddressStore()
// // @ts-ignore
// autocalsolStore.setAutocalsolResult(autocalsolResultExample)
// const autocalsolResult = autocalsolStore.autocalsolResult
// consumptionAndProductionStore.setAnnualConsumption(6000)
// addressStore.setAddress('17, rue de la Finlande, 35000 Rennes')
// const selectedRoof = {
//   surface_id: '53123',
//   values: [13.832112, 74.012886, 12.155002, 0],
//   favorable: 10,
//   total: 87,
//   orientation: 'EST',
//   azimuth: 80,
//   inclinaison: 1,
// }
</script>

<template>
  <div class="bg-slate-100 w-full overflow-y-auto">
    <div class="flex flex-row mx-auto mt-[184px] w-full gap-6 justify-center">
      <div
        class="w-[25%] max-w-[360px] font-dm-sans font-medium flex flex-col gap-6"
      >
        <SunshineInformation
          v-if="selectedRoof !== undefined"
          :selected-roof="selectedRoof"
        />
        <ConsumptionInformation />
      </div>
      <div
        class="w-[55%] max-w-[800px] font-dm-sans font-medium flex flex-col gap-8 bg-blue-50"
      >
        <AutocalsolResult
          v-if="autocalsolResult !== null"
          :autocalsolResult="autocalsolResult"
        />
        <GoFurther></GoFurther>
      </div>
    </div>
  </div>
</template>
