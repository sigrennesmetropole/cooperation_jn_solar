import { ay as defineStore, az as ref } from "./vendor.5b209f97.js";
const usePanelsStore = defineStore("panels", () => {
  const typePanelDisplay = ref("left");
  const isInformationPanelShown = ref(true);
  const isCompletelyHidden = ref(false);
  function toggleInformationPanel() {
    isInformationPanelShown.value = !isInformationPanelShown.value;
  }
  function setTypePanelDisplay(typePanel) {
    typePanelDisplay.value = typePanel;
  }
  function isRightPanel() {
    return typePanelDisplay.value === "right";
  }
  return {
    isInformationPanelShown,
    toggleInformationPanel,
    typePanelDisplay,
    setTypePanelDisplay,
    isRightPanel,
    isCompletelyHidden
  };
});
export {
  usePanelsStore as u
};
