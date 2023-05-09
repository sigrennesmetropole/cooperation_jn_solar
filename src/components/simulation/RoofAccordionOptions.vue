<script setup lang="ts">
import RoofAccordion from '@/components/simulation/RoofAccordion.vue'
import { onBeforeMount, reactive } from 'vue'
import { useRoofsStore } from '@/stores/roof'
import type { RoofSurfaceModel } from '@/model/roof.model'

const roofsStore = useRoofsStore()
let roofsSorted: RoofSurfaceModel[]
let expandedRoofPan: Set<string> = reactive(new Set())

onBeforeMount(() => {
  roofsSorted = mapAndSortedRoofs()
  roofsStore.setSelectRoofSurfaceId(roofsSorted[0].surface_id)
  expandedRoofPan.add(roofsSorted[0].surface_id)
})
function mapAndSortedRoofs() {
  const roofsFeaturesGroupBySurfaceId = roofsStore.roofSurfacesList!
  return roofsFeaturesGroupBySurfaceId.sort((a, b) => b.favorable - a.favorable)
}

function changeSelectedRoof(selectedRoof: RoofSurfaceModel) {
  roofsStore.setSelectRoofSurfaceId(selectedRoof.surface_id)
  if (!isRoofExpanded(selectedRoof)) {
    expandItem(selectedRoof)
  }
}

function isRoofSelected(roofSurface: RoofSurfaceModel) {
  return roofSurface.surface_id === roofsStore.selectedRoofSurfaceId
}

function isRoofExpanded(roofSurface: RoofSurfaceModel) {
  return expandedRoofPan.has(roofSurface.surface_id)
}
function expandItem(roofSurface: RoofSurfaceModel) {
  if (expandedRoofPan.has(roofSurface.surface_id)) {
    expandedRoofPan.delete(roofSurface.surface_id)
  } else {
    expandedRoofPan.add(roofSurface.surface_id)
  }
}

roofsStore.$subscribe(async () => {
  changeSelectedRoof(roofsStore.getRoofSurfaceModelOfSelectedPanRoof()!)
})
</script>

<template>
  <div class="flex flex-col p-0 gap-6" role="radiogroup">
    <template v-for="(roofSurface, index) in roofsSorted" :key="index">
      <RoofAccordion
        tabindex="0"
        :roof-surface="roofSurface"
        :label="'Pan de toit n°' + (index + 1)"
        :selected="isRoofSelected(roofSurface)"
        :is-open="isRoofExpanded(roofSurface)"
        :is-recommended="index === 0"
        :index="index"
        @clickRoofAccordion="changeSelectedRoof(roofSurface)"
        @click="expandItem(roofSurface)"
        @keydown.enter="changeSelectedRoof(roofSurface)"
      ></RoofAccordion>
    </template>
  </div>
</template>
