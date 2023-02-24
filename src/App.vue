<script setup lang="ts">
import { onBeforeMount, provide } from 'vue'
import SidePanel from '@/components/home/SidePanel.vue'
import { RennesApp } from '@/services/RennesApp'
import MapComponent from '@/components/map/MapComponent.vue'
import mapConfig from './map.config.json'
import { useViewsStore } from './stores/views'
import UiButtonWithTooltip from '@/components/ui/UiButtonWithTooltip.vue'
import UiSearchBar from '@/components/ui/UiSearchBar.vue'
import { viewList } from './model/views.model'
import UiPopUpBottomInformation from '@/components/ui/UiPopUpBottomInformation.vue'
import { usePanelsStore } from '@/stores/panels'

const viewStore = useViewsStore()
const panelStore = usePanelsStore()

onBeforeMount(() => {
  const rennesApp = new RennesApp(mapConfig)
  provide('rennesApp', rennesApp)
})

function isLeftPanelRetractable() {
  const retractableList = [viewList['map-pcaet']]
  return retractableList.includes(viewStore.currentView)
}
</script>

<template>
  <main class="h-screen flex">
    <aside
      class="z-10 absolute"
      :class="panelStore.typePanelDisplay == 'right' ? 'right-0' : 'left-0'"
    >
      <SidePanel :is-retractable="isLeftPanelRetractable()">
        <RouterView :key="$route.fullPath" />
      </SidePanel>
    </aside>

    <div class="grow">
      <MapComponent></MapComponent>
    </div>

    <UiSearchBar
      v-if="
        [
          viewList['roof-selection'],
          viewList['map-pcaet'],
          viewList['roof-selected-information'],
        ].includes(viewStore.currentView)
      "
      class="absolute z-20 top-5 left-5"
    ></UiSearchBar>

    <UiPopUpBottomInformation
      v-if="viewStore.currentView == viewList['roof-selection']"
      :text="'Cliquez sur le bâtiment que vous souhaitez sélectionner.'"
      class="absolute z-20 bottom-5 left-[35%]"
    />
    <UiPopUpBottomInformation
      v-else-if="viewStore.currentView == viewList['step-sunshine']"
      :text="'Cliquez sur le pan de toit que vous souhaitez sélectionner.'"
      class="absolute z-20 bottom-5 left-[20%]"
    />

    <UiButtonWithTooltip
      text="Les niveaux de potentiel solaire sont estimés sur la base de calculs
        s'appuyant sur la maquette 3D métropolitaine et des données
        météorologiques.
      "
      widthButton="12"
      heightButton="12"
      widthBoxText="w-[500px]"
    />
  </main>
</template>

<style scoped></style>
