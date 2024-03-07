import { ay as defineStore, az as ref, b2 as GeoJSON } from "./vendor.7c3bcb5d.js";
const useRoofsStore = defineStore("roofs", () => {
  const selectedBuildingId = ref(null);
  const buildingRoofsFeatures = ref(null);
  const selectedRoofFeature = ref(null);
  function setBuildingRoofsFeatures(features, buildingId) {
    buildingRoofsFeatures.value = features;
    selectedBuildingId.value = buildingId;
  }
  function setSelectRoofFeature(feature) {
    selectedRoofFeature.value = feature;
  }
  return {
    buildingRoofsFeatures,
    selectRoofFeature: selectedRoofFeature,
    setBuildingRoofsFeatures,
    setSelectRoofFeature
  };
});
function roundResult(num) {
  return parseInt(num.toFixed(2));
}
function calculateSurfaceFavorableOfRoofFeature(feature) {
  const percentageFavorable = feature.getProperty("rang_3") + feature.getProperty("rang_4");
  const total_surface = feature.getProperty("pan_area");
  return percentageFavorable * total_surface / 100;
}
function azimuthToOrientation(azimuth) {
  if (azimuth > 315 || azimuth <= 45) {
    return "NORD";
  } else if (azimuth > 45 && azimuth <= 135) {
    return "EST";
  } else if (azimuth > 135 && azimuth <= 225) {
    return "SUD";
  } else if (azimuth > 225 && azimuth <= 315) {
    return "OUEST";
  }
}
function mapRoofSurfaceModel(geojson) {
  const geoJSONFormat = new GeoJSON();
  const feature = geoJSONFormat.readFeature(geojson);
  return {
    surface_id: feature.getProperty("surface_id"),
    values: [
      feature.getProperty("rang_1"),
      feature.getProperty("rang_2"),
      feature.getProperty("rang_3"),
      feature.getProperty("rang_4")
    ],
    favorable: roundResult(calculateSurfaceFavorableOfRoofFeature(feature)),
    total: roundResult(feature.getProperty("pan_area")),
    orientation: azimuthToOrientation(feature.getProperty("azimuth")),
    azimuth: feature.getProperty("azimuth"),
    inclinaison: feature.getProperty("slope")
  };
}
function getDataBuilding() {
  let all_area = 0;
  let all_area_favorable = 0;
  const all_values = [0, 0, 0, 0];
  const roofsStore = useRoofsStore();
  const buildingRoofsFeatures = roofsStore.buildingRoofsFeatures;
  buildingRoofsFeatures == null ? void 0 : buildingRoofsFeatures.features.forEach((feature) => {
    const dataRoof = mapRoofSurfaceModel(feature);
    all_area += dataRoof.total;
    all_area_favorable += dataRoof.favorable;
    for (let i = 0; i < 4; i++) {
      all_values[i] += dataRoof.values[i] * dataRoof.total / 100;
    }
  });
  for (let i = 0; i < 4; i++) {
    all_values[i] = all_values[i] * 100 / all_area;
  }
  const dataBuilding = {
    total: roundResult(all_area),
    favorable: roundResult(all_area_favorable),
    values: all_values
  };
  return dataBuilding;
}
export {
  getDataBuilding as g,
  mapRoofSurfaceModel as m,
  useRoofsStore as u
};
