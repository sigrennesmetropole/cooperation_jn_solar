import { aK as defineStore, ay as ref } from "./vendor.f9bc5d90.js";
const usePopUpStore = defineStore("popUpStore", () => {
  const isDisplayTermsOfUse = ref(false);
  function displayTermsOfUse() {
    isDisplayTermsOfUse.value = true;
  }
  function closeTermsOfUse() {
    isDisplayTermsOfUse.value = false;
  }
  return {
    isDisplayTermsOfUse,
    displayTermsOfUse,
    closeTermsOfUse
  };
});
export {
  usePopUpStore as u
};
