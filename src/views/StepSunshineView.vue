<script setup lang="ts">
import { inject, onBeforeMount } from 'vue'
import { viewList } from '@/model/views.model'
import LeaveButton from '@/components/simulation/LeaveButton.vue'
import SimulationSteps from '@/components/simulation/SimulationSteps.vue'
import StepTitle from '@/components/simulation/StepTitle.vue'
import StepDescription from '@/components/simulation/StepDescription.vue'
import RoofAccordionOptions from '@/components/simulation/RoofAccordionOptions.vue'
import SetUpStep from '@/components/simulation/SetUpStep.vue'
import SavingsStep from '@/components/simulation/SavingsStep.vue'
import FooterButtons from '@/components/simulation/FooterButtons.vue'
import { CesiumTilesetLayer, VectorStyleItem } from '@vcmap/core'
import { RENNES_LAYER } from '@/stores/layers'
import { createViewpointFromRoofFeature } from '@/services/viewPointHelper'
import { useRoofsStore } from '@/stores/roof'
import { useMapStore } from '@/stores/map'
import { usePanelsStore } from '@/stores/panels'
import { useViewsStore } from '@/stores/views'
import { useSimulationStore } from '@/stores/simulations'
import type { RennesApp } from '@/services/RennesApp'
import { ref } from 'vue'
import type { Viewpoint } from '@vcmap/core'

const rennesApp = inject('rennesApp') as RennesApp

const panelsStore = usePanelsStore()
const viewStore = useViewsStore()
const simulationStore = useSimulationStore()
const roofStore = useRoofsStore()
const mapStore = useMapStore()

const isHighlightSelectedRoofPanCalled = ref(false)

onBeforeMount(async () => {
  console.log('ligne35')
  if (simulationStore.restartEndSimulation == true) {
    // uniquement au rechargement de la page
    console.log('ligne38')

    simulationStore.setCurrentStep(3)
    simulationStore.setCurrentSubStep(2)
  }
  viewStore.setCurrentView(viewList['step-sunshine'])
  panelsStore.isCompletelyHidden = false
  panelsStore.setTypePanelDisplay('right')
  if (mapStore.isInitializeMap) {
    highlightSelectedRoofPan(roofStore.selectedRoofSurfaceId!)
    console.log('ligne48')

    //ajouter le focus sur le viewpoint
    // const newVp = mapStore.viewPoint as Viewpoint
    // await rennesApp.maps?.activeMap.gotoViewpoint(newVp)
  }
  simulationStore.restartEndSimulation = false
})

const highlightStyle = new VectorStyleItem({
  fill: { color: 'rgb(63,185,30)' },
})

mapStore.$subscribe(async () => {
  console.log('ligne62')

  if (mapStore.isInitializeMap) {
    console.log('ligne69')
    const newVp = mapStore.viewPointBuilding as Viewpoint
    console.log(newVp)
    await rennesApp.maps?.activeMap.gotoViewpoint(newVp)

    highlightSelectedRoofPan(roofStore.selectedRoofSurfaceId!)
  }
})

roofStore.$subscribe(async () => {
  await highlightSelectedRoofPan(roofStore.selectedRoofSurfaceId!)
  let feature = null
  roofStore.roofsFeatures?.features?.forEach((f) => {
    if (f.properties?.surface_id == roofStore.selectedRoofSurfaceId) {
      feature = f
      // au premier chargement de la page uniquement
      console.log('ligne82')
    }
  })
  if (feature !== null) {
    console.log('ligne90')
    const vp = await createViewpointFromRoofFeature(feature)
    if (vp !== undefined) mapStore.viewPoint = vp
  }
})

async function highlightSelectedRoofPan(surfaceId: string) {
  isHighlightSelectedRoofPanCalled.value = true
  rennesApp.clearRoofsHighlight()
  let roofLayer: CesiumTilesetLayer =
    await rennesApp.maps.layerCollection.getByKey(RENNES_LAYER.roof3d)
  roofLayer.featureVisibility.highlight({
    [surfaceId]: highlightStyle,
  })
}

function isDisplayNextButton() {
  if (
    (simulationStore.currentStep == 2 && simulationStore.currentSubStep == 3) ||
    (simulationStore.currentStep == 3 && simulationStore.currentSubStep == 2)
  ) {
    return false
  }
  return true
}
</script>

<template>
  <LeaveButton></LeaveButton>
  <SimulationSteps
    class="h-[76px]"
    :selected-step="simulationStore.currentStep"
  ></SimulationSteps>
  <StepTitle :step="simulationStore.currentStep"></StepTitle>
  <StepDescription
    :step="simulationStore.currentStep"
    :substep="simulationStore.currentSubStep"
  ></StepDescription>
  <RoofAccordionOptions
    v-if="simulationStore.currentStep === 1"
  ></RoofAccordionOptions>
  <!-- SetUpStep contain all the substep for step 2 -->
  <SetUpStep v-else-if="simulationStore.currentStep === 2"></SetUpStep>
  <!-- SavingsStep contain all the substep for step 3 -->
  <SavingsStep v-else-if="simulationStore.currentStep === 3"></SavingsStep>
  <div class="h-full"></div>
  <FooterButtons :isDisplayNextButton="isDisplayNextButton()"></FooterButtons>
</template>
