import { aK as defineStore, ay as ref } from "./vendor.6a09d00b.js";
const useConsumptionAndProductionStore = defineStore(
  "consumptionAndProduction",
  () => {
    const annualConsumption = ref(0);
    function setAnnualConsumption(new_annual_consumption) {
      annualConsumption.value = new_annual_consumption;
    }
    return {
      annualConsumption,
      setAnnualConsumption
    };
  }
);
export {
  useConsumptionAndProductionStore as u
};
