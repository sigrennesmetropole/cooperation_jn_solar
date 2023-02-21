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

const viewStore = useViewsStore()

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
    <aside class="z-10 absolute">
      <SidePanel :is-retractable="isLeftPanelRetractable()">
        <RouterView :key="$route.fullPath" />
      </SidePanel>
    </aside>

    <div class="grow">
      <MapComponent></MapComponent>
    </div>

    <UiSearchBar
      v-if="viewStore.currentView == viewList['roof-selection']"
      class="absolute z-20 top-5 left-5"
    ></UiSearchBar>

    <UiPopUpBottomInformation
      v-if="viewStore.currentView == viewList['roof-selection']"
      :text="'Cliquez sur le bâtiment que vous souhaitez sélectionner.'"
      class="absolute z-20 bottom-5 left-[35%]"
    />

    <UiButtonWithTooltip />
  </main>
</template>

<style scoped></style>
