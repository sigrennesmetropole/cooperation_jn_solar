import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Coordinate } from 'ol/coordinate'

export const useAddressStore = defineStore('address', () => {
  const address: Ref<string> = ref('')
  const geolocAddress: Ref<Coordinate | null> = ref(null)

  function setAddress(newAddress: string) {
    address.value = newAddress
  }

  function setAddressGeoloc(point: Coordinate) {
    geolocAddress.value = point
  }

  return {
    address,
    geolocAddress,
    setAddress,
    setAddressGeoloc,
  }
})
