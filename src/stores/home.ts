import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', () => {
  const isTermOfUseAccepted: Ref<boolean> = ref(false)
  const displayError: Ref<boolean> = ref(false)

  function setIsTermOfUseAccepted(newValue: boolean) {
    isTermOfUseAccepted.value = newValue
  }

  function setDisplayError(newValue: boolean) {
    displayError.value = newValue
  }

  return {
    isTermOfUseAccepted,
    displayError,
    setIsTermOfUseAccepted,
    setDisplayError,
  }
})
