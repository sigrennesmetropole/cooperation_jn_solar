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
import type { Feature } from 'geojson'
import { bbox, featureCollection } from '@turf/turf'

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
    await highlightSelectedRoofPan(
      roofStore.selectedRoofSurfaceId!,
      simulationStore.shouldShowSolarPanelLayer()
    )
  }
})

mapStore.$subscribe(async () => {
  if (mapStore.isInitializeMap) {
    await highlightSelectedRoofPan(
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
  let features: Feature[] = []
  roofStore.roofsFeatures?.features?.forEach((f) => {
    if (f.properties?.surface_id == roofStore.selectedRoofSurfaceId) {
      feature = f
      features.push(f)
    }
  })

  if (feature !== null) {
    const vp = await createViewpointFromRoofFeature(
      feature,
      bbox(featureCollection(features))
    )
    if (vp !== undefined) mapStore.setViewpoint(vp)
  }
})

async function highlightSelectedRoofPan(
  surfaceId: string,
  solarPanelShown: boolean = false
) {
  isHighlightSelectedRoofPanCalled.value = true
  rennesApp.clearRoofsHighlight()
  let surfaceIdFormat = `ID_${surfaceId}`
  if (!solarPanelShown) {
    rennesApp.highlightByLayerNameAndFeatureId(
      RENNES_LAYER.roof3d,
      surfaceIdFormat
    )
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
  <div class="absolute right-0 top-0 bg-white w-full z-[50]">
    <div class="flex flex-col">
      <LeaveButton></LeaveButton>
      <SimulationSteps
        class="h-[76px]"
        :selected-step="simulationStore.currentStep"
      ></SimulationSteps>
    </div>
  </div>
  <div class="mb-[120px]"></div>
  <StepTitle :step="simulationStore.currentStep"></StepTitle>
  <div v-if="!mapStore.isLoadingMap">
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
  </div>
</template>
