import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { AutocalsolResult } from '@/model/autocalsol.model'

export const useAutocalsolStore = defineStore('autocalsolStore', () => {
  const autocalsolResult: Ref<AutocalsolResult | null> = ref(null)

  function setAutocalsolResult(result: AutocalsolResult) {
    autocalsolResult.value = result
  }

  return {
    autocalsolResult,
    setAutocalsolResult,
  }
})
