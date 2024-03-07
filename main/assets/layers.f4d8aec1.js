import { ay as defineStore, az as ref } from "./vendor.723158cd.js";
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
const RENNES_LAYER = {
  rennesOrtho: "rennesOrtho",
  rennesBase: "rennesBase",
  customLayerSearchAddress: "customLayerSearchAddress",
  roofSquaresArea: "roofSquaresArea",
  roofShape: "roofShape",
  solarPanel: "solarPanel",
  roof3d: "roof3d"
};
defineStore("layers", () => {
  const visibilities = ref({
    rennesOrtho: true,
    rennesBase: false,
    roofSquaresArea: false,
    solarPanel: false,
    roof3d: true
  });
  function enableLayer(name) {
    visibilities.value = {
      ...visibilities.value,
      [name]: true
    };
  }
  function disableLayer(name) {
    visibilities.value = {
      ...visibilities.value,
      [name]: false
    };
  }
  return {
    visibilities,
    enableLayer,
    disableLayer
  };
});
export {
  RENNES_LAYER as R,
  useAddressStore as u
};
