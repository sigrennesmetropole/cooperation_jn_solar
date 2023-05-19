import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useAddressStore = defineStore('address', () => {
  const latitude: Ref<number> = ref(0)
  const longitude: Ref<number> = ref(0)
  const address: Ref<string> = ref('')
  const screenshotAddress: Ref<Blob | null> = ref(null)

  function setLatitudeAndLongitude(
    new_latitude: number,
    new_longitude: number
  ) {
    latitude.value = new_latitude
    longitude.value = new_longitude
  }

  function setAddress(new_address: string) {
    address.value = new_address
  }

  function resetLatitureAndLongitude() {
    setLatitudeAndLongitude(0, 0)
  }

  function resetAddress() {
    setAddress('')
  }

  return {
    latitude,
    longitude,
    setLatitudeAndLongitude,
    address,
    setAddress,
    resetAddress,
    resetLatitureAndLongitude,
    screenshotAddress,
  }
})
