<script setup lang="ts">
import RoofAccordion from '@/components/simulation/RoofAccordion.vue'
import { ref } from 'vue'
import { useRoofsStore } from '@/stores/roof'

const roofsStore = useRoofsStore()

function mapAndSortedRoofs() {
  const roofsFeaturesGroupBySurfaceId = roofsStore.roofSurfacesList!
  return roofsFeaturesGroupBySurfaceId.sort((a, b) => b.favorable - a.favorable)
}

function changeSelectedRoof(index: number) {
  indexSelectedRoof.value = index
  const selectedRoof = roofsSorted[index]
  roofsStore.setSelectRoofSurfaceId(selectedRoof.surface_id)
}

function getIndexCurrentRoof() {
  if (roofsStore.selectedRoofSurfaceId === null) {
    indexSelectedRoof.value = 0
    return
  }
  const selectedRoof = roofsStore.getRoofSurfaceModelOfSelectedPanRoof()
  roofsSorted.forEach((roof, index) => {
    if (roof.surface_id === selectedRoof?.surface_id) {
      indexSelectedRoof.value = index
    }
  })
}

const roofsSorted = mapAndSortedRoofs()
const indexSelectedRoof = ref(0)
getIndexCurrentRoof()
</script>

<template>
  <div class="flex flex-col p-0 gap-6" role="radiogroup">
    <template v-for="(roofSurface, index) in roofsSorted" :key="index">
      <RoofAccordion
        :roof-surface="roofSurface"
        :label="'Pan de toit n°' + (index + 1)"
        :selected="index === indexSelectedRoof"
        :is-open="index === indexSelectedRoof"
        :is-recommended="index === 0"
        :index="index"
        @clickRoofAccordion="changeSelectedRoof($event)"
      ></RoofAccordion>
    </template>
  </div>
</template>
