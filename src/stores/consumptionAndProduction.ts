import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useConsumptionAndProductionStore = defineStore(
  'consumptionAndProduction',
  () => {
    const annualConsumption: Ref<number> = ref(0)

    function setAnnualConsumption(new_annual_consumption: number) {
      annualConsumption.value = new_annual_consumption
    }

    function resetAnnualConsumption() {
      setAnnualConsumption(0)
    }

    return {
      annualConsumption,
      setAnnualConsumption,
      resetAnnualConsumption,
    }
  }
)
