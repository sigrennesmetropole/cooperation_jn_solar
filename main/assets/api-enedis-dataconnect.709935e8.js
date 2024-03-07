var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { aL as defineStore, ay as ref } from "./vendor.73b285d3.js";
import { a as apiService } from "./api.8dd20882.js";
const useEnedisStore = defineStore("enedisStore", () => {
  const isEnedisRedirection = ref(false);
  function setIsEnedisRedirection(newValue) {
    isEnedisRedirection.value = newValue;
  }
  return {
    isEnedisRedirection,
    setIsEnedisRedirection
  };
});
class ApiEnedisService {
  constructor() {
    __publicField(this, "baseUrlApi", "/api/enedis/user");
  }
  async getUrlUserAuthorization() {
    const data = await apiService.callApiGet(
      `${this.baseUrlApi}/url-authorization`
    );
    return data.url;
  }
  async getPRMUser() {
    const data = await apiService.callApiGet(`${this.baseUrlApi}/prm`);
    return data.prm;
  }
  async setPRMUser(prm) {
    const data = await apiService.callApiPost(
      `${this.baseUrlApi}/prm`,
      { prm },
      {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    );
    if (data !== void 0 && data.prm !== void 0) {
      return data.prm;
    } else {
      return null;
    }
  }
  async getAnnualConsumption() {
    const data = await apiService.callApiGet(
      `${this.baseUrlApi}/annual-consumption`
    );
    if (data !== void 0 && data.consumption !== void 0) {
      return data.consumption;
    } else {
      return null;
    }
  }
}
const apiEnedisService = new ApiEnedisService();
export {
  apiEnedisService as a,
  useEnedisStore as u
};
