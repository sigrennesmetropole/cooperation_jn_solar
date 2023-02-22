import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useAddressStore = defineStore('address', () => {
  const address: Ref<string> = ref('')

  function setAddress(newAddress: string) {
    address.value = newAddress
  }

  return {
    address,
    setAddress,
  }
})
