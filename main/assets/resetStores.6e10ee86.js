import { u as useAddressStore, a as useConsumptionAndProductionStore, b as useAutocalsolStore } from "./consumptionAndProduction.4e27862d.js";
import { a as useSimulationStore } from "./UiHeaderFullScreen.story.9cce4016.js";
import { u as useRoofsStore } from "./roof.0d615e44.js";
import { u as useSolarPanelStore } from "./solarPanels.7a0b41df.js";
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
