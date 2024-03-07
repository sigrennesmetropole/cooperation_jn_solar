import { aJ as defineStore, ay as ref } from "./vendor.c2871d15.js";
const useDistrictStore = defineStore("districtInformations", () => {
  const districtCode = ref(0);
  const districtName = ref("");
  const districtConsumption = ref(0);
  const districtProduction = ref(0);
  const districtNumberInstallations = ref(0);
  const districtPointFeature = ref(null);
  const previousViewPoint = ref(null);
  const newPointAbscissa = ref(0);
  const newPointOrdinate = ref(0);
  function setDistrictIrisCode(newDistrictCode) {
    districtCode.value = newDistrictCode;
  }
  function setDistrictName(newDistrictName) {
    districtName.value = newDistrictName;
  }
  function setDistrictConsumption(newDistrictConsumption) {
    districtConsumption.value = newDistrictConsumption;
  }
  function setDistrictProduction(newDistrictProduction) {
    districtProduction.value = newDistrictProduction;
  }
  function setDistrictNumberInstallations(newDistrictNumberInstallations) {
    districtNumberInstallations.value = newDistrictNumberInstallations;
  }
  function setDistrictInformations(newDistrictCode, newDistrictName, newDistrictConsumption, newDistrictProduction, newDistrictNumberInstallations) {
    setDistrictIrisCode(newDistrictCode);
    setDistrictName(newDistrictName);
    setDistrictConsumption(newDistrictConsumption);
    setDistrictProduction(newDistrictProduction);
    setDistrictNumberInstallations(newDistrictNumberInstallations);
  }
  function setNewPointFeatureOnSelectedDistrict(newPointFeature) {
    districtPointFeature.value = newPointFeature;
  }
  function setNewCoordinates(newAbscissa, newOrdinate) {
    newPointAbscissa.value = newAbscissa;
    newPointOrdinate.value = newOrdinate;
  }
  function resetDistrictStore() {
    setDistrictInformations(0, "", 0, 0, 0);
  }
  return {
    districtCode,
    districtName,
    districtConsumption,
    districtProduction,
    districtNumberInstallations,
    districtPointFeature,
    previousViewPoint,
    newPointAbscissa,
    newPointOrdinate,
    setDistrictIrisCode,
    setDistrictName,
    setDistrictConsumption,
    setDistrictProduction,
    setDistrictNumberInstallations,
    setDistrictInformations,
    setNewPointFeatureOnSelectedDistrict,
    setNewCoordinates,
    resetDistrictStore
  };
});
export {
  useDistrictStore as u
};
