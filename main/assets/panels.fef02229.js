import { ay as defineStore, az as ref } from "./vendor.b8429d95.js";
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
  function isLeftPanel() {
    return typePanelDisplay.value === "left";
  }
  return {
    isInformationPanelShown,
    toggleInformationPanel,
    typePanelDisplay,
    setTypePanelDisplay,
    isRightPanel,
    isLeftPanel,
    isCompletelyHidden
  };
});
export {
  usePanelsStore as u
};
