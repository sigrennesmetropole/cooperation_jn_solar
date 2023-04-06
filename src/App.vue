<script setup lang="ts">
import { onBeforeMount, provide, computed } from 'vue'
import SidePanel from '@/components/home/SidePanel.vue'
import { RennesApp } from '@/services/RennesApp'
import MapComponent from '@/components/map/MapComponent.vue'
import mapConfig from './map.config.json'
import { useViewsStore } from './stores/views'
import SearchBar from '@/components/search_bar/SearchBar.vue'
import { viewList } from './model/views.model'
import UiPopUpBottomInformation from '@/components/ui/UiPopUpBottomInformation.vue'
import { usePanelsStore, PANEL_WIDTH } from '@/stores/panels'
import { useSimulationStore } from '@/stores/simulations'
import DistrictDataTooltip from '@/components/map/DistrictDataTooltip.vue'
import UiTooltipSunshine from '@/components/ui/UiTooltipSunshine.vue'
import TermsOfUsePopup from '@/components/home/TermsOfUsePopup.vue'
import { usePopUpStore } from '@/stores/popUpStore'

const viewStore = useViewsStore()
const panelStore = usePanelsStore()
const simulationStore = useSimulationStore()
const popUpStore = usePopUpStore()

onBeforeMount(() => {
  const rennesApp = new RennesApp(mapConfig)
  provide('rennesApp', rennesApp)
})

function isLeftPanelRetractable() {
  const retractableList = [
    viewList['map-pcaet'],
    viewList['roof-selection'],
    viewList['districts'],
  ]
  return retractableList.includes(viewStore.currentView)
}

const isDisplaySearchBar = computed(() => {
  return [
    viewList['roof-selection'],
    viewList['map-pcaet'],
    viewList['roof-selected-information'],
    viewList.home,
    viewList['districts'],
  ].includes(viewStore.currentView)
})

const isDisplayAsideAndMap = computed(() => {
  return [
    viewList['home'],
    viewList['map-pcaet'],
    viewList['roof-selected-information'],
    viewList['roof-selection'],
    viewList['step-sunshine'],
    viewList['districts'],
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
      v-else-if="viewStore.currentView == viewList['end-simulation']"
    >
      <RouterView :key="$route.fullPath" />
    </div>

    <div
      class="grow"
      :style="panelStore.isRightPanel() ? `margin-right: ${PANEL_WIDTH};` : ''"
    >
      <MapComponent v-if="isDisplayAsideAndMap"></MapComponent>
    </div>

    <SearchBar
      v-if="isDisplaySearchBar"
      class="absolute z-20 top-5"
      :style="
        viewStore.currentView === viewList.home ? 'left: 480px;' : 'left: 20px;'
      "
      :isRedirectOnSearch="viewStore.currentView !== viewList.home"
    ></SearchBar>

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
        simulationStore.currentStep === 2 &&
        simulationStore.currentSubStep === 1
      "
      :text="'Cliquez sur les zones qui ne peuvent pas accueillir de panneaux\n photovoltaïques (présence de fenêtre de toit, cheminée...)'"
      class="absolute z-20 bottom-5 left-[20%]"
    />

    <DistrictDataTooltip
      v-if="viewStore.currentView === viewList['districts']"
    ></DistrictDataTooltip>

    <UiTooltipSunshine v-if="isDisplaySearchBar"></UiTooltipSunshine>
    <TermsOfUsePopup
      v-if="popUpStore.isDisplayTermsOfUse"
      @close="popUpStore.closeTermsOfUse()"
    />

    <notifications position="top left" />
  </main>
</template>

<style scoped></style>
