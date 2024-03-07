import { aK as defineStore, ay as ref } from "./vendor.6c5e1db1.js";
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
  function setLayerVisibility(name, visibility) {
    visibilities.value = {
      ...visibilities.value,
      [name]: visibility
    };
  }
  return {
    visibilities,
    enableLayer,
    disableLayer,
    setLayerVisibility
  };
});
export {
  RENNES_LAYER as R
};
