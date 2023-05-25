<script setup lang="ts">
import { useViewsStore } from '@/stores/views'
import { computed, inject, onMounted, ref } from 'vue'
import { viewList } from '@/model/views.model'
import { usePanelsStore } from '@/stores/panels'
import FigureEnergy from '@/components/roof_selection/FigureEnergy.vue'
import AddressTooltip from '@/components/roof_selection/AddressTooltip.vue'
import TextDidYouKnow from '@/components/roof_selection/TextDidYouKnow.vue'
import type { RennesApp } from '@/services/RennesApp'
import RoofSelectionTooltip from '@/components/roof_selection/RoofSelectionTooltip.vue'
import { useAddressStore } from '@/stores/address'
import { useMapStore } from '@/stores/map'
import { resetStores } from '@/services/resetStores'
import { useInteractionsStore } from '@/stores/interactions'
import SelectRoofInteraction from '@/interactions/selectRoofInteraction'
import { useSimulationStore } from '@/stores/simulations'
import { resetDataForEnedis } from '@/services/enedisService'

const rennesApp = inject('rennesApp') as RennesApp
const panelsStore = usePanelsStore()
const viewStore = useViewsStore()
const addressStore = useAddressStore()
const interactionsStore = useInteractionsStore()
const simulationStore = useSimulationStore()

const mapStore = useMapStore()

let isOpen = ref(true)
let addressClosedByUser = ref(false)

onMounted(() => {
  if (mapStore.isInitializeMap) {
    rennesApp.clearRoofsHighlight()
  }
  resetStores()
  resetDataForEnedis()
  viewStore.setCurrentView(viewList['roof-selection'])
  panelsStore.setTypePanelDisplay('float-left')
  panelsStore.isCompletelyHidden = true
  simulationStore.restartEndSimulation = false
})

const tooltipToDisplay = computed(() => {
  if (interactionsStore.isActive(SelectRoofInteraction)) {
    return 'roof-selection'
  } else if (addressStore.address || addressClosedByUser.value) {
    return 'none'
  } else {
    return 'address'
  }
})
</script>

<template>
  <AddressTooltip
    v-if="tooltipToDisplay === 'address'"
    class="absolute left-6 top-20"
    @closeAddress="addressClosedByUser = true"
  ></AddressTooltip>
  <RoofSelectionTooltip
    v-if="tooltipToDisplay === 'roof-selection'"
    class="absolute left-6 top-20"
  ></RoofSelectionTooltip>
  <div
    v-if="isOpen"
    class="absolute left-6 bottom-6 flex flex-col p-0 gap-4 bg-white shadow-lg rounded-lg w-[402px] h-[440px]"
  >
    <TextDidYouKnow class="mt-4 mx-6" @close="isOpen = false"></TextDidYouKnow>
    <FigureEnergy></FigureEnergy>
  </div>
</template>
