import { aK as defineStore, ay as ref, bb as featureCollection } from "./vendor.2da8e0a3.js";
const useRoofsStore = defineStore("roofs", () => {
  const selectedBuildingId = ref(null);
  const roofsFeatures = ref(null);
  const roofSurfacesList = ref(null);
  const selectedRoofSurfaceId = ref(null);
  function setSelectedBuildingId(buildingId) {
    selectedBuildingId.value = buildingId;
  }
  function setRoofsFeatures(features) {
    roofsFeatures.value = features;
  }
  function setRoofSurfacesList(list) {
    roofSurfacesList.value = list;
  }
  function setSelectRoofSurfaceId(surfaceId) {
    selectedRoofSurfaceId.value = surfaceId;
  }
  function getFeaturesOfSelectedPanRoof() {
    var _a, _b;
    const features = [];
    (_b = (_a = roofsFeatures.value) == null ? void 0 : _a.features) == null ? void 0 : _b.forEach((f) => {
      var _a2;
      if (((_a2 = f.properties) == null ? void 0 : _a2.surface_id) === selectedRoofSurfaceId.value) {
        features.push(f);
      }
    });
    return featureCollection(features);
  }
  function getRoofSurfaceModelOfSelectedPanRoof() {
    var _a;
    return (_a = roofSurfacesList.value) == null ? void 0 : _a.find((roofSuface) => {
      return roofSuface.surface_id == selectedRoofSurfaceId.value;
    });
  }
  function resetRoofStore() {
    setSelectRoofSurfaceId(""), setSelectedBuildingId(""), setRoofSurfacesList([]);
  }
  return {
    roofsFeatures,
    selectedRoofSurfaceId,
    roofSurfacesList,
    selectedBuildingId,
    setRoofsFeatures,
    setSelectRoofSurfaceId,
    setSelectedBuildingId,
    setRoofSurfacesList,
    getFeaturesOfSelectedPanRoof,
    getRoofSurfaceModelOfSelectedPanRoof,
    resetRoofStore
  };
});
export {
  useRoofsStore as u
};
