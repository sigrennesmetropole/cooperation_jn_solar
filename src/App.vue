<script setup lang="ts">
import { onBeforeMount, provide, computed } from 'vue'
import SidePanel from '@/components/home/SidePanel.vue'
import { RennesApp } from '@/services/RennesApp'
import MapComponent from '@/components/map/MapComponent.vue'
import mapConfig from '@/map.config.json'
import { useViewsStore } from '@/stores/views'
import SearchBar from '@/components/search_bar/SearchBar.vue'
import { viewList } from '@/model/views.model'
import { usePanelsStore, PANEL_WIDTH } from '@/stores/panels'
import DistrictDataTooltip from '@/components/map/DistrictDataTooltip.vue'
import DistrictDisplayButton from '@/components/map/DistrictDisplayButton.vue'
import UiTooltipSunshine from '@/components/ui/UiTooltipSunshine.vue'
import TermsOfUsePopup from '@/components/home/TermsOfUsePopup.vue'
import { usePopUpStore } from '@/stores/popUpStore'
import UiExplanationsStepSunshine from '@/components/ui/UiExplanationsStepSunshine.vue'
import { useDistrictStore } from './stores/districtInformations'
const viewStore = useViewsStore()
const panelStore = usePanelsStore()
const popUpStore = usePopUpStore()
const districtStore = useDistrictStore()
onBeforeMount(() => {
  const rennesApp = new RennesApp(mapConfig)
  provide('rennesApp', rennesApp)
})
function isLeftPanelRetractable() {
  const retractableList = viewList['roof-selection']
  return retractableList.includes(viewStore.currentView!)
}
const isDisplaySearchBar = computed(() => {
  return [
    viewList['roof-selection'],
    viewList['roof-selected-information'],
    viewList.home,
  ].includes(viewStore.currentView!)
})
const isDisplayAsideAndMap = computed(() => {
  return [
    viewList['home'],
    viewList['roof-selected-information'],
    viewList['step-sunshine'],
  ].includes(viewStore.currentView!)
})
const isDisplayFloatAndMap = computed(() => {
  return [viewList['roof-selection']].includes(viewStore.currentView!)
})
const isDisplayDistrictCheckbox = computed(() => {
  return [viewList['home'], viewList['roof-selection']].includes(
    viewStore.currentView!
  )
})
const panelAlignment = computed(() => {
  if (panelStore.isRightPanel()) {
    return 'right-0'
  }
  if (panelStore.isLeftPanel()) {
    return 'left-0'
  }
  // for floating-left, nothing to see
  return ''
})
const isPageFullScreen = computed(() => {
  return [
    viewList['legal-notice'],
    viewList['end-simulation'],
    viewList['simulation-results'],
    null,
  ].includes(viewStore.currentView!)
})
</script>

<template>
  <main class="h-screen flex">
    <template v-if="isPageFullScreen">
      <RouterView :key="$route.fullPath" />
    </template>
    <template v-else>
      <aside
        class="z-10 absolute"
        :class="panelAlignment"
        v-if="isDisplayAsideAndMap"
      >
        <SidePanel :is-retractable="isLeftPanelRetractable()">
          <RouterView :key="$route.fullPath" />
        </SidePanel>
      </aside>
      <div v-if="isDisplayFloatAndMap">
        <RouterView :key="$route.fullPath" />
      </div>

      <div
        class="grow"
        :style="
          panelStore.isRightPanel() ? `margin-right: ${PANEL_WIDTH};` : ''
        "
      >
        <MapComponent
          v-if="isDisplayAsideAndMap || isDisplayFloatAndMap"
        ></MapComponent>
      </div>

      <SearchBar
        v-if="isDisplaySearchBar"
        class="absolute z-20 top-6 left-6"
        :style="
          viewStore.currentView === viewList.home
            ? 'left: 480px;'
            : 'left: 24px;'
        "
        :isRedirectOnSearch="viewStore.currentView !== viewList.home"
      ></SearchBar>

      <UiExplanationsStepSunshine />

      <DistrictDataTooltip
        v-if="districtStore.checkboxChecked === true"
      ></DistrictDataTooltip>

      <DistrictDisplayButton
        v-if="isDisplayDistrictCheckbox"
        class="absolute z-20"
      ></DistrictDisplayButton>

      <UiTooltipSunshine v-if="isDisplaySearchBar"></UiTooltipSunshine>
      <TermsOfUsePopup
        v-if="popUpStore.isDisplayTermsOfUse"
        @close="popUpStore.closeTermsOfUse()"
      />
    </template>

    <notifications position="top left" />
  </main>
</template>
