import { aK as defineStore, ay as ref } from "./vendor.fce036ea.js";
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
  useSolarPanelStore as u
};
