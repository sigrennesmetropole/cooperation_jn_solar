<script setup lang="ts">
import { onBeforeMount } from 'vue'
import CertifiedInstaller from '@/components/simulation/CertifiedInstaller.vue'
import { viewList } from '@/model/views.model'
import { useViewsStore } from '@/stores/views'

const viewStore = useViewsStore()

onBeforeMount(() => {
  viewStore.setCurrentView(viewList['simulation'])
})
</script>

<template>
  <div
    class="w-screen font-dm-sans font-medium flex flex-col overflow-y-scroll"
  >
    <div class="gap-6">
      <CertifiedInstaller></CertifiedInstaller>
    </div>
  </div>
</template>