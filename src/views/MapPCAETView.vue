<script setup lang="ts">
import { FooterArea } from '@sigrennesmetropole/cooperation_jn_common_ui'
import UiSearchBar from '@/components/ui/UiSearchBar.vue'
import TextDidYouKnow from '@/components/pcaet/TextDidYouKnow.vue'
import FigureEnergy from '@/components/pcaet/FigureEnergy.vue'
import { useViewsStore } from '@/stores/views'
import { onBeforeMount } from 'vue'
import { viewList } from '@/model/views.model'

const viewStore = useViewsStore()

onBeforeMount(async () => {
  viewStore.setCurrentView(viewList['map-pcaet'])
})
</script>

<template>
  <UiSearchBar></UiSearchBar>
  <TextDidYouKnow></TextDidYouKnow>
  <FigureEnergy></FigureEnergy>
  <FooterArea class="mt-auto"></FooterArea>
</template>
