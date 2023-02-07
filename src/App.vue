<script setup lang="ts">
import { onBeforeMount, provide } from 'vue'
import SidePanel from '@/components/home/SidePanel.vue'
import { RennesApp } from '@/services/RennesApp'
import MapComponent from '@/components/map/MapComponent.vue'
import mapConfig from './map.config.json'
import { usePanelsStore } from '@/stores/panels'

const panelStore = usePanelsStore()

onBeforeMount(() => {
  const rennesApp = new RennesApp(mapConfig)
  provide('rennesApp', rennesApp)
})
</script>

<template>
  <main class="h-screen flex">
    <aside class="z-10 absolute">
      <SidePanel v-show="panelStore.isPlanningViewShown === false">
        <RouterView :key="$route.fullPath" />
      </SidePanel>
    </aside>

    <div class="grow">
      <MapComponent></MapComponent>
    </div>

    <!-- <LegalLink
      class="absolute z-20 bottom-3 left-3"
      v-show="
        panelStore.isInformationPanelShown === false ||
        panelStore.isPlanningViewShown === true
      "
      :text-color="'neutral-900'"
    >
    </LegalLink>
     -->
  </main>
</template>

<style scoped></style>
