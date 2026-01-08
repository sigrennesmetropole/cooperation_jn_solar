import { aK as defineStore, ay as ref } from "./vendor.08389d7c.js";
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
const useAutocalsolStore = defineStore("autocalsolStore", () => {
  const autocalsolResult = ref(null);
  function setAutocalsolResult(result) {
    autocalsolResult.value = result;
  }
  function resetAutocalsolResult() {
    autocalsolResult.value = null;
  }
  return {
    autocalsolResult,
    setAutocalsolResult,
    resetAutocalsolResult
  };
});
const useConsumptionAndProductionStore = defineStore(
  "consumptionAndProduction",
  () => {
    const annualConsumption = ref(0);
    function setAnnualConsumption(new_annual_consumption) {
      annualConsumption.value = new_annual_consumption;
    }
    function resetAnnualConsumption() {
      setAnnualConsumption(0);
    }
    return {
      annualConsumption,
      setAnnualConsumption,
      resetAnnualConsumption
    };
  }
);
export {
  useConsumptionAndProductionStore as a,
  useAutocalsolStore as b,
  useAddressStore as u
};
