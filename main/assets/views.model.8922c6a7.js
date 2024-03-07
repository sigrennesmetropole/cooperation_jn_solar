import { aK as defineStore, ay as ref } from "./vendor.28bc74db.js";
const useViewsStore = defineStore("views", () => {
  const currentView = ref(null);
  function setCurrentView(view) {
    currentView.value = view;
  }
  return { currentView, setCurrentView };
});
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
export {
  useViewsStore as u,
  viewList as v
};
