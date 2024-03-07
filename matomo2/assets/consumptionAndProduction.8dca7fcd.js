import { aK as defineStore, ay as ref } from "./vendor.da1b6b85.js";
const useAutocalsolStore = defineStore("autocalsolStore", () => {
  const autocalsolResult = ref(null);
  function setAutocalsolResult(result) {
    autocalsolResult.value = result;
  }
  function resetAutocalsolResult() {
    autocalsolResult.value = {
      prodByMonth: [],
      consoByMonth: [],
      prodByHour: [],
      consoByHour: [],
      consoAnnualInjected: 0,
      consoAnnualAutoConsumed: 0
    };
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
  useAutocalsolStore as a,
  useConsumptionAndProductionStore as u
};
