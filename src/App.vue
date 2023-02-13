<script setup lang="ts">
import { onBeforeMount, provide } from 'vue'
import SidePanel from '@/components/home/SidePanel.vue'
import { RennesApp } from '@/services/RennesApp'
import MapComponent from '@/components/map/MapComponent.vue'
import mapConfig from './map.config.json'
import UiButtonWithTooltip from '@/components/ui/UiButtonWithTooltip.vue'

onBeforeMount(() => {
  const rennesApp = new RennesApp(mapConfig)
  provide('rennesApp', rennesApp)
})
</script>

<template>
  <main class="h-screen flex">
    <aside class="z-10 absolute">
      <SidePanel :is-retractable="false">
        <RouterView :key="$route.fullPath" />
      </SidePanel>
    </aside>

    <div class="grow">
      <MapComponent></MapComponent>
    </div>

    <UiButtonWithTooltip />
  </main>
</template>

<style scoped></style>
