import { aK as defineStore, ay as ref } from "./vendor.443b37cc.js";
const RENNES_LAYER = {
  rennesOrtho: "rennesOrtho",
  rennesBase: "rennesBase",
  customLayerSearchAddress: "customLayerSearchAddress",
  roofSquaresArea: "roofSquaresArea",
  roofShape: "roofShape",
  solarPanel: "solarPanel",
  roof3d: "roof3d",
  iris: "iris",
  customLayerDistrict: "customLayerDistrict"
};
defineStore("layers", () => {
  const visibilities = ref({
    rennesOrtho: true,
    rennesBase: false,
    roofSquaresArea: false,
    solarPanel: false,
    roof3d: true,
    iris: false,
    customLayerDistrict: false
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
  RENNES_LAYER as R,
  useSolarPanelStore as u
};
