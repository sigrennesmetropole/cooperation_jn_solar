<script lang="ts" setup>
//@ts-nocheck

import HeaderEndSimulation from '@/components/simulation/HeaderEndSimulation.vue'
import HeaderLegalNotice from '@/components/legal/HeaderLegalNotice.vue'
import router from '../../router'

/* eslint-disable */
function mySetupApp({ app, story, variant }) {
  app.use(router)
}
/* eslint-enable */
</script>

<template>
  <Story
    title="Header Full Screen"
    :layout="{
      type: 'grid',
      width: 700,
    }"
    :setup-app="mySetupApp"
  >
    <div style="height: 100px; position: relative">
      <HeaderLegalNotice></HeaderLegalNotice>
    </div>
    <div style="height: 100px; position: relative">
      <HeaderEndSimulation></HeaderEndSimulation>
    </div>
  </Story>
</template>
