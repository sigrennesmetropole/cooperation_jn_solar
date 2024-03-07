import { aK as defineStore, ay as ref } from "./vendor.9c97a0a0.js";
const useMapStore = defineStore("map", () => {
  const isInitializeMap = ref(false);
  const viewPoint = ref(null);
  const activeMap = ref("cesium");
  function is3D() {
    return activeMap.value == "cesium";
  }
  function activate2d() {
    activeMap.value = "ol";
  }
  function activate3d() {
    activeMap.value = "cesium";
  }
  return {
    isInitializeMap,
    viewPoint,
    activeMap,
    is3D,
    activate2d,
    activate3d
  };
});
export {
  useMapStore as u
};
