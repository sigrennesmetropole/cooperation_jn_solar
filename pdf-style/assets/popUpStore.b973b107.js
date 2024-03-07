import { aK as defineStore, ay as ref } from "./vendor.a9784a3c.js";
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
