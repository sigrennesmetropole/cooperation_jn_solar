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
import { useEnedisStore } from '@/stores/enedis'

const rennesApp = inject('rennesApp') as RennesApp

const panelsStore = usePanelsStore()
const viewStore = useViewsStore()
const simulationStore = useSimulationStore()
const roofStore = useRoofsStore()
const mapStore = useMapStore()

const isHighlightSelectedRoofPanCalled = ref(false)
const enedisStore = useEnedisStore()

onBeforeMount(async () => {
  if (simulationStore.restartEndSimulation == true) {
    simulationStore.setCurrentStep(3)
    simulationStore.setCurrentSubStep(2)
  } else if (enedisStore.isEnedisRedirection) {
    simulationStore.setCurrentStep(3)
    simulationStore.setCurrentSubStep(3)
  } else {
    simulationStore.setCurrentStep(1)
    simulationStore.setCurrentSubStep(1)
  }
  viewStore.setCurrentView(viewList['step-sunshine'])
  panelsStore.isCompletelyHidden = false
  panelsStore.setTypePanelDisplay('right')
  if (mapStore.isInitializeMap) {
    highlightSelectedRoofPan(
      roofStore.selectedRoofSurfaceId!,
      simulationStore.shouldShowSolarPanelLayer()
    )
  }
})

const highlightStyle = new VectorStyleItem({
  fill: { color: 'rgb(63,185,30)' },
})

mapStore.$subscribe(async () => {
  if (mapStore.isInitializeMap) {
    highlightSelectedRoofPan(
      roofStore.selectedRoofSurfaceId!,
      simulationStore.shouldShowSolarPanelLayer()
    )
  }
})

roofStore.$subscribe(async () => {
  await highlightSelectedRoofPan(
    roofStore.selectedRoofSurfaceId!,
    simulationStore.shouldShowSolarPanelLayer()
  )
  let feature = null
  roofStore.roofsFeatures?.features?.forEach((f) => {
    if (f.properties?.surface_id == roofStore.selectedRoofSurfaceId) {
      feature = f
    }
  })
  if (feature !== null) {
    const vp = await createViewpointFromRoofFeature(feature)
    if (vp !== undefined) mapStore.viewPoint = vp
  }
})

async function highlightSelectedRoofPan(
  surfaceId: string,
  solarPanelShown: boolean = false
) {
  isHighlightSelectedRoofPanCalled.value = true
  rennesApp.clearRoofsHighlight()
  if (!solarPanelShown) {
    let roofLayer: CesiumTilesetLayer =
      await rennesApp.maps.layerCollection.getByKey(RENNES_LAYER.roof3d)
    roofLayer.featureVisibility.highlight({
      [surfaceId]: highlightStyle,
    })
  }
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
  <div class="mb-[70px]"></div>
  <FooterButtons :isDisplayNextButton="isDisplayNextButton()"></FooterButtons>
</template>
