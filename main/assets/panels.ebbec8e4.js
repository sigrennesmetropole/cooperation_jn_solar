import { aZ as defineStore, aB as ref } from "./vendor.6f4bbece.js";
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
