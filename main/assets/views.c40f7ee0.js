import { aJ as defineStore, ay as ref } from "./vendor.c2871d15.js";
const viewList = {
  "/": "/",
  home: "home",
  "roof-selection": "roof-selection",
  "roof-selected-information": "roof-selected-information",
  "step-sunshine": "step-sunshine",
  "legal-notice": "legal-notice",
  "end-simulation": "end-simulation",
  districts: "districts"
};
const useViewsStore = defineStore("views", () => {
  const currentView = ref(viewList.home);
  function setCurrentView(view) {
    currentView.value = view;
  }
  return { currentView, setCurrentView };
});
export {
  useViewsStore as u,
  viewList as v
};
