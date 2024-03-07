var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { ay as defineStore, az as ref, b8 as rt } from "./vendor.5b209f97.js";
const useSolarPanelStore = defineStore("solarPanel", () => {
  const maxNumberSolarPanel = ref(0);
  const currentNumberSolarPanel = ref(0);
  return {
    maxNumberSolarPanel,
    currentNumberSolarPanel
  };
});
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
class RennesNotification {
  constructor(type, text) {
    __publicField(this, "type", "success");
    __publicField(this, "text", "");
    this.type = type;
    this.text = text;
  }
  displayNotification() {
    const { notify } = rt();
    notify({
      type: this.type,
      text: this.text
    });
  }
}
function getEnv() {
  return {}.VITE_ENV;
}
function getUrlBackOffice() {
  return {}.VITE_URL_BACKOFFICE;
}
function getEnedisSandboxPrm() {
  return {}.VITE_ENEDIS_SANDBOX_PRM;
}
class ApiService {
  async callApiPost(url, dataPost, headers) {
    try {
      const response = await fetch(getUrlBackOffice() + url, {
        method: "POST",
        headers,
        credentials: "include",
        body: JSON.stringify(dataPost)
      });
      if (response.status !== 200) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      const notif = new RennesNotification(
        "error",
        "Une erreur est survenue, veuillez r\xE9essayer."
      );
      notif.displayNotification();
      throw error;
    }
  }
  async callApiGet(url) {
    try {
      const response = await fetch(getUrlBackOffice() + url, {
        method: "GET",
        credentials: "include"
      });
      if (response.status !== 200) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      const notif = new RennesNotification(
        "error",
        "Une erreur est survenue, veuillez r\xE9essayer."
      );
      notif.displayNotification();
      throw error;
    }
  }
}
const apiService = new ApiService();
export {
  useConsumptionAndProductionStore as a,
  apiService as b,
  getEnedisSandboxPrm as c,
  getEnv as g,
  useSolarPanelStore as u
};
