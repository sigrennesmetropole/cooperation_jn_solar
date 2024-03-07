import { ay as defineStore, az as ref } from "./vendor.84b2ee0c.js";
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
