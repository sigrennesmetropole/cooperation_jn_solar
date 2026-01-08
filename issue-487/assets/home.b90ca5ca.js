import { aK as defineStore, ay as ref } from "./vendor.8d0dd8ca.js";
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
