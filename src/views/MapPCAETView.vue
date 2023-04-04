<script setup lang="ts">
import TextDidYouKnow from '@/components/pcaet/TextDidYouKnow.vue'
import FigureEnergy from '@/components/pcaet/FigureEnergy.vue'
import { useViewsStore } from '@/stores/views'
import { onBeforeMount, ref } from 'vue'
import { viewList } from '@/model/views.model'
import { usePanelsStore } from '@/stores/panels'
import AddressTooltip from '@/components/pcaet/AddressTooltip.vue'

const panelsStore = usePanelsStore()
const viewStore = useViewsStore()
let isOpen = ref(true)

onBeforeMount(async () => {
  viewStore.setCurrentView(viewList['map-pcaet'])
  panelsStore.setTypePanelDisplay('float-left')
})
</script>

<template>
  <AddressTooltip class="absolute left-6 top-20"></AddressTooltip>
  <div
    v-if="isOpen"
    class="absolute left-6 bottom-6 flex flex-col p-0 gap-4 bg-white shadow-lg rounded-lg w-[402px] h-[440px]"
  >
    <TextDidYouKnow class="mt-4 mx-6" @close="isOpen = false"></TextDidYouKnow>
    <FigureEnergy></FigureEnergy>
  </div>
</template>
