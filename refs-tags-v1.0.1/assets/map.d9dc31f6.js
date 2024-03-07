import { aK as defineStore, ay as ref } from "./vendor.f4e55e85.js";
const useMapStore = defineStore("map", () => {
  const isInitializeMap = ref(false);
  const viewPoint = ref(null);
  const isLoadingMap = ref(false);
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
    isLoadingMap,
    is3D,
    activate2d,
    activate3d
  };
});
export {
  useMapStore as u
};
