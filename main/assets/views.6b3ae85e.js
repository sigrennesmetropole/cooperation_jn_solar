import { aK as defineStore, ay as ref } from "./vendor.6a09d00b.js";
const viewList = {
  "/": "/",
  home: "home",
  "roof-selection": "roof-selection",
  "roof-selected-information": "roof-selected-information",
  "step-sunshine": "step-sunshine",
  "legal-notice": "legal-notice",
  "end-simulation": "end-simulation",
  "simulation-results": "simulation-results"
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
