import { a_ as defineStore, aC as ref } from "./vendor.8a61dc8b.js";
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
