<script setup lang="ts">
import { computed, inject, onMounted, ref } from 'vue'
import { usePanelsStore } from '@/stores/panels'
import FigureEnergy from '@/components/roof_selection/FigureEnergy.vue'
import AddressTooltip from '@/components/roof_selection/AddressTooltip.vue'
import TextDidYouKnow from '@/components/roof_selection/TextDidYouKnow.vue'
import type { RennesApp } from '@/services/RennesApp'
import RoofSelectionTooltip from '@/components/roof_selection/RoofSelectionTooltip.vue'
import { useAddressStore } from '@/stores/address'
import {
  disableSelectRoofInteraction,
  enableSelectRoofInteraction,
} from '@/services/interactionUtils'

const rennesApp = inject('rennesApp') as RennesApp
const panelsStore = usePanelsStore()
const addressStore = useAddressStore()
let isOpen = ref(true)
let isBuildingSelectionActive = ref(false)
let addressClosedByUser = ref(false)

let DISTANCE_MAX_FOR_SELECTION = 600

onMounted(() => {
  panelsStore.setTypePanelDisplay('float-left')
  panelsStore.isCompletelyHidden = true
  rennesApp
    .get3DMap()
    .getScene()
    .postRender.addEventListener(() => {
      let cameraDistance = rennesApp.getCurrentDistance()!
      if (
        isBuildingSelectionActive.value &&
        cameraDistance > DISTANCE_MAX_FOR_SELECTION
      ) {
        isBuildingSelectionActive.value = false
        disableSelectRoofInteraction(rennesApp)
      } else if (
        !isBuildingSelectionActive.value &&
        cameraDistance <= DISTANCE_MAX_FOR_SELECTION
      ) {
        isBuildingSelectionActive.value = true
        enableSelectRoofInteraction(rennesApp)
      }
    })
  rennesApp.clearRoofsHighlight()
})

const tooltipToDisplay = computed(() => {
  if (isBuildingSelectionActive.value) {
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
