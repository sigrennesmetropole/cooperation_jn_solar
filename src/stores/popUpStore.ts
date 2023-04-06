import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const usePopUpStore = defineStore('popUpStore', () => {
  const isDisplayTermsOfUse: Ref<boolean> = ref(false)

  function displayTermsOfUse() {
    isDisplayTermsOfUse.value = true
  }

  function closeTermsOfUse() {
    isDisplayTermsOfUse.value = false
  }

  return {
    isDisplayTermsOfUse,
    displayTermsOfUse,
    closeTermsOfUse,
  }
})
