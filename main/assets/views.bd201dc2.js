import { aZ as defineStore, aB as ref } from "./vendor.3e1891ce.js";
const viewList = {
  home: "home",
  "map-pcaet": "map-pcaet",
  "roof-selection": "roof-selection",
  "roof-selected-information": "roof-selected-information",
  "step-sunshine": "step-sunshine",
  "legal-notice": "legal-notice",
  simulation: "simulation"
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
