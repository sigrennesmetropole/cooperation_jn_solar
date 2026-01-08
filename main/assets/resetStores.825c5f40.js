import { u as useAddressStore, a as useConsumptionAndProductionStore, b as useAutocalsolStore, c as useSolarPanelStore } from "./solarPanels.a6c29d02.js";
import { a as useSimulationStore } from "./UiHeaderFullScreen.story.f738952e.js";
import { u as useRoofsStore } from "./roof.0d615e44.js";
const WINDOW_CONFIRM_MESSAGE = "Cette action vous renvoie en d\xE9but de simulation, vos donn\xE9es actuelles seront effac\xE9es";
function resetStores() {
  const simulationStore = useSimulationStore();
  const addressStore = useAddressStore();
  const roofStore = useRoofsStore();
  const consumptionAndProductionStore = useConsumptionAndProductionStore();
  const autocalsolStore = useAutocalsolStore();
  const solarPanelStore = useSolarPanelStore();
  simulationStore.resetSimulation();
  addressStore.resetAddress();
  roofStore.resetRoofStore();
  consumptionAndProductionStore.resetAnnualConsumption();
  autocalsolStore.resetAutocalsolResult();
  solarPanelStore.resetPanelStore();
}
export {
  WINDOW_CONFIRM_MESSAGE as W,
  resetStores as r
};
