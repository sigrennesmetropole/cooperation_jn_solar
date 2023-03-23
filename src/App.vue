<script setup lang="ts">
import { onBeforeMount, provide, computed } from 'vue'
import SidePanel from '@/components/home/SidePanel.vue'
import { RennesApp } from '@/services/RennesApp'
import MapComponent from '@/components/map/MapComponent.vue'
import mapConfig from './map.config.json'
import { useViewsStore } from './stores/views'
import { UiButtonWithTooltip } from '@sigrennesmetropole/cooperation_jn_common_ui'
import UiSearchBar from '@/components/ui/UiSearchBar.vue'
import { viewList } from './model/views.model'
import UiPopUpBottomInformation from '@/components/ui/UiPopUpBottomInformation.vue'
import { usePanelsStore, PANEL_WIDTH } from '@/stores/panels'
import { useRouter } from 'vue-router'
import { useSimulationStore } from '@/stores/simulations'

const viewStore = useViewsStore()
const panelStore = usePanelsStore()
const simulationStore = useSimulationStore()

const router = useRouter()

onBeforeMount(() => {
  const rennesApp = new RennesApp(mapConfig)
  provide('rennesApp', rennesApp)
})

function isLeftPanelRetractable() {
  const retractableList = [viewList['map-pcaet'], viewList['roof-selection']]
  return retractableList.includes(viewStore.currentView)
}

const isDisplaySearchBar = computed(() => {
  return [
    viewList['roof-selection'],
    viewList['map-pcaet'],
    viewList['roof-selected-information'],
  ].includes(viewStore.currentView)
})

function fakeNextStep() {
  panelStore.isCompletelyHidden = false
  router.push({ name: 'roof-selected-information' })
}

const isDisplayAsideAndMap = computed(() => {
  return [
    viewList['home'],
    viewList['map-pcaet'],
    viewList['roof-selected-information'],
    viewList['roof-selection'],
    viewList['step-sunshine'],
  ].includes(viewStore.currentView)
})
</script>

<template>
  <main class="h-screen flex">
    <aside
      class="z-10 absolute"
      :class="panelStore.isRightPanel() ? 'right-0' : 'left-0'"
      v-if="isDisplayAsideAndMap"
    >
      <SidePanel :is-retractable="isLeftPanelRetractable()">
        <RouterView :key="$route.fullPath" />
      </SidePanel>
    </aside>

    <div
      class="flex flex-row bg-neutral-100"
      v-else-if="viewStore.currentView == viewList['legal-notice']"
    >
      <RouterView :key="$route.fullPath" />
    </div>

    <div
      class="flex flex-row bg-slate-100"
      v-else-if="viewStore.currentView == viewList['simulation']"
    >
      <RouterView :key="$route.fullPath" />
    </div>

    <div
      class="grow"
      :style="panelStore.isRightPanel() ? `margin-right: ${PANEL_WIDTH};` : ''"
    >
      <MapComponent v-if="isDisplayAsideAndMap"></MapComponent>
    </div>

    <UiSearchBar
      v-if="isDisplaySearchBar"
      class="absolute z-20 top-5 left-5"
    ></UiSearchBar>

    <UiPopUpBottomInformation
      v-if="viewStore.currentView === viewList['roof-selection']"
      :text="'Cliquez sur le bâtiment que vous souhaitez sélectionner.'"
      class="absolute z-20 bottom-5 left-[35%]"
    />
    <UiPopUpBottomInformation
      v-else-if="
        viewStore.currentView === viewList['step-sunshine'] &&
        simulationStore.currentStep === 1
      "
      :text="'Cliquez sur le pan de toit que vous souhaitez sélectionner.'"
      class="absolute z-20 bottom-5 left-[20%]"
    />
    <UiPopUpBottomInformation
      v-else-if="
        viewStore.currentView === viewList['step-sunshine'] &&
        simulationStore.currentStep === 2
      "
      :text="'Cliquez sur les zones qui ne peuvent pas accueillir de panneaux\n photovoltaïques (présence de fenêtre de toit, cheminée...)'"
      :timer="5000"
      class="absolute z-20 bottom-5 left-[20%]"
    />
    <button
      class="absolute z-20 bottom-5 left-[10%] bg-white text-black"
      @click="fakeNextStep()"
      v-if="viewStore.currentView === viewList['roof-selection']"
    >
      Fake select roof button
      <br />
      <span class="text-sm font-light">
        (While waiting the roof selection,<br />
        click here to display the next step)
      </span>
    </button>

    <UiButtonWithTooltip
      v-if="isDisplaySearchBar"
      text="Les niveaux de potentiel solaire sont estimés sur la base de calculs
        s'appuyant sur la maquette 3D métropolitaine et des données
        météorologiques.
      "
      widthButton="12"
      heightButton="12"
      widthBoxText="w-[600px]"
    />

    <notifications position="top left" />
  </main>
</template>

<style scoped></style>
