import { useAddressStore } from '@/stores/address'
import { useAutocalsolStore } from '@/stores/autocalsol'
import { useSimulationStore } from '@/stores/simulations'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import { useRoofsStore } from '@/stores/roof'
import { useSolarPanelStore } from '@/stores/solarPanels'

export const WINDOW_CONFIRM_MESSAGE =
  'Cette action vous renvoie en début de simulation, vos données actuelles seront effacées'

export function resetStores() {
  const simulationStore = useSimulationStore()
  const addressStore = useAddressStore()
  const roofStore = useRoofsStore()
  const consumptionAndProductionStore = useConsumptionAndProductionStore()
  const autocalsolStore = useAutocalsolStore()
  const solarPanelStore = useSolarPanelStore()

  simulationStore.resetSimulation()
  addressStore.resetAddress()
  addressStore.resetLatitureAndLongitude()
  roofStore.resetRoofStore()
  consumptionAndProductionStore.resetAnnualConsumption()
  autocalsolStore.resetAutocalsolResult()
  solarPanelStore.resetPanelStore()
}
