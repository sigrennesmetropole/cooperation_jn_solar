import { aK as defineStore, ay as ref } from "./vendor.2da8e0a3.js";
const useAddressStore = defineStore("address", () => {
  const latitude = ref(0);
  const longitude = ref(0);
  const address = ref("");
  function setLatitudeAndLongitude(new_latitude, new_longitude) {
    latitude.value = new_latitude;
    longitude.value = new_longitude;
  }
  function setAddress(new_address) {
    address.value = new_address;
  }
  function resetAddress() {
    setLatitudeAndLongitude(0, 0), setAddress("");
  }
  return {
    latitude,
    longitude,
    setLatitudeAndLongitude,
    address,
    setAddress,
    resetAddress
  };
});
export {
  useAddressStore as u
};
