<script setup lang="ts">
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
const consumptionAndProductionStore = useConsumptionAndProductionStore()
</script>

<template>
  <div
    class="flex flex-col gap-2 w-[100%] h-fit bg-white rounded-xl p-6 mx-auto shadow-md"
  >
    <p class="font-dm-sans font-bold text-base">Votre consommation actuelle</p>
    <p id="consumptionValue" class="font-dm-sans font-medium text-sm">
      {{ consumptionAndProductionStore.annualConsumption }} kWh/an
    </p>
  </div>
</template>
