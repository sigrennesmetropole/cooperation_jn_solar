import { aK as defineStore, ay as ref } from "./vendor.fe5b3fe2.js";
const useAddressStore = defineStore("address", () => {
  const latitude = ref(0);
  const longitude = ref(0);
  const address = ref("");
  const screenshotAddress = ref(null);
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
    resetAddress,
    screenshotAddress
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
const useSolarPanelStore = defineStore("solarPanel", () => {
  const maxNumberSolarPanel = ref(0);
  const currentNumberSolarPanel = ref(0);
  function resetPanelStore() {
    maxNumberSolarPanel.value = 0;
    currentNumberSolarPanel.value = 0;
  }
  return {
    maxNumberSolarPanel,
    currentNumberSolarPanel,
    resetPanelStore
  };
});
export {
  useConsumptionAndProductionStore as a,
  useAutocalsolStore as b,
  useSolarPanelStore as c,
  useAddressStore as u
};
