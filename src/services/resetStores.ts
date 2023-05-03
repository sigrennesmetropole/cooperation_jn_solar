import { useAddressStore } from '@/stores/address'
import { useAutocalsolStore } from '@/stores/autocalsol'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import { useRoofsStore } from '@/stores/roof'
import { useSolarPanelStore } from '@/stores/solarPanels'

export function resetStoresAndRedirect() {
  const addressStore = useAddressStore()
  const roofStore = useRoofsStore()
  const consumptionAndProductionStore = useConsumptionAndProductionStore()
  const autocalsolStore = useAutocalsolStore()
  const solarPanelStore = useSolarPanelStore()

  addressStore.resetAddress()
  roofStore.resetRoofStore()
  consumptionAndProductionStore.resetAnnualConsumption()
  autocalsolStore.resetAutocalsolResult()
  solarPanelStore.resetPanelStore()
}
