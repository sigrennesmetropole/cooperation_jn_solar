var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { bm as rt } from "./vendor.08389d7c.js";
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
  apiService as a,
  getEnedisSandboxPrm as g
};
