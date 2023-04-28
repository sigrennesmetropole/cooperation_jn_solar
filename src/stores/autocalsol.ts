import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { AutocalsolResult } from '@/model/autocalsol.model'

export const useAutocalsolStore = defineStore('autocalsolStore', () => {
  const autocalsolResult: Ref<AutocalsolResult | null> = ref(null)

  function setAutocalsolResult(result: AutocalsolResult | null) {
    autocalsolResult.value = result
  }

  function resetAutocalsolResult() {
    autocalsolResult.value = {
      prodByMonth: [],
      consoByMonth: [],
      prodByHour: [],
      consoByHour: [],
      consoAnnualInjected: 0,
      consoAnnualAutoConsumed: 0,
    }
  }

  return {
    autocalsolResult,
    setAutocalsolResult,
    resetAutocalsolResult,
  }
})
