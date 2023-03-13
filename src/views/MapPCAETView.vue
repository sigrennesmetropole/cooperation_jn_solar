<script setup lang="ts">
import FooterAreaLink from '@/components/home/FooterAreaLink.vue'
import TextDidYouKnow from '@/components/pcaet/TextDidYouKnow.vue'
import FigureEnergy from '@/components/pcaet/FigureEnergy.vue'
import { useViewsStore } from '@/stores/views'
import { onBeforeMount } from 'vue'
import { viewList } from '@/model/views.model'
import { usePanelsStore } from '@/stores/panels'

const panelsStore = usePanelsStore()
const viewStore = useViewsStore()

onBeforeMount(async () => {
  viewStore.setCurrentView(viewList['map-pcaet'])
  panelsStore.setTypePanelDisplay('left')
})
</script>

<template>
  <TextDidYouKnow class="mt-9"></TextDidYouKnow>
  <FigureEnergy></FigureEnergy>
  <FooterAreaLink></FooterAreaLink>
</template>
