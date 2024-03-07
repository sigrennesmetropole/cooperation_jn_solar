import { ay as defineStore, az as ref, b4 as GeoJSON } from "./vendor.b8429d95.js";
const useRoofsStore = defineStore("roofs", () => {
  const selectedBuildingId = ref(null);
  const roofsFeatures = ref(null);
  const roofsFeaturesGroupBySurfaceId = ref(null);
  const selectedRoofFeature = ref(null);
  function setSelectedBuildingId(buildingId) {
    selectedBuildingId.value = buildingId;
  }
  function setRoofsFeatures(features) {
    roofsFeatures.value = features;
  }
  function setRoofsFeaturesGroupBySurfaceId(features) {
    roofsFeaturesGroupBySurfaceId.value = features;
  }
  function setSelectRoofFeature(feature) {
    selectedRoofFeature.value = feature;
  }
  function setSelectRoofFeatureFromSurfaceId(surface_id) {
    var _a;
    (_a = roofsFeatures.value) == null ? void 0 : _a.features.forEach((feature) => {
      const featureFormatted = mapRoofSurfaceModel(feature);
      if (featureFormatted.surface_id === surface_id) {
        setSelectRoofFeature(feature);
      }
    });
  }
  return {
    roofsFeatures,
    selectedRoofFeature,
    roofsFeaturesGroupBySurfaceId,
    setRoofsFeatures,
    setSelectRoofFeature,
    setSelectRoofFeatureFromSurfaceId,
    setSelectedBuildingId,
    setRoofsFeaturesGroupBySurfaceId
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
  if (azimuth > 337.5 || azimuth <= 22.5) {
    return "NORD";
  } else if (azimuth > 22.5 && azimuth <= 67.5) {
    return "NORD-EST";
  } else if (azimuth > 67.5 && azimuth <= 112.5) {
    return "EST";
  } else if (azimuth > 112.5 && azimuth <= 157.5) {
    return "SUD-EST";
  } else if (azimuth > 157.5 && azimuth <= 202.5) {
    return "SUD";
  } else if (azimuth > 202.5 && azimuth <= 247.5) {
    return "SUD-OUEST";
  } else if (azimuth > 247.5 && azimuth <= 292.5) {
    return "OUEST";
  } else if (azimuth > 292.5 && azimuth <= 337.5) {
    return "NORD-OUEST";
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
  const roofsFeaturesGroupBySurfaceId = roofsStore.roofsFeaturesGroupBySurfaceId;
  roofsFeaturesGroupBySurfaceId == null ? void 0 : roofsFeaturesGroupBySurfaceId.features.forEach((feature) => {
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
