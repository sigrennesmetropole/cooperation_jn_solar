<script setup lang="ts">
import { onBeforeMount } from 'vue'
import WaitingAnimation from '@/components/simulation/WaitingAnimation.vue'
import CertifiedInstaller from '@/components/simulation/CertifiedInstaller.vue'
import { viewList } from '@/model/views.model'
import { useViewsStore } from '@/stores/views'

const viewStore = useViewsStore()

onBeforeMount(() => {
  viewStore.setCurrentView(viewList['end-simulation'])
})
</script>

<template>
  <div
    class="w-screen font-dm-sans font-medium flex flex-col overflow-y-scroll gap-6"
  >
    <WaitingAnimation></WaitingAnimation>
    <CertifiedInstaller></CertifiedInstaller>
  </div>
</template>
