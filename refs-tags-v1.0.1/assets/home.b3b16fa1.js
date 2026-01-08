import { aK as defineStore, ay as ref } from "./vendor.f4e55e85.js";
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
