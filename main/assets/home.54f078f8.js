import { aK as defineStore, ay as ref } from "./vendor.4ec0c93c.js";
const useHomeStore = defineStore("home", () => {
  const isTermOfUseAccepted = ref(false);
  const displayError = ref(false);
  function setIsTermOfUseAccepted(newValue) {
    isTermOfUseAccepted.value = newValue;
  }
  function setDisplayError(newValue) {
    displayError.value = newValue;
  }
  return {
    isTermOfUseAccepted,
    displayError,
    setIsTermOfUseAccepted,
    setDisplayError
  };
});
export {
  useHomeStore as u
};
