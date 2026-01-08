import { aJ as defineStore, ay as ref } from "./vendor.33105a1a.js";
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
  return {
    latitude,
    longitude,
    setLatitudeAndLongitude,
    address,
    setAddress
  };
});
export {
  useAddressStore as u
};
