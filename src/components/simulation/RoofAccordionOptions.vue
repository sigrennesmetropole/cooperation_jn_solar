<script setup lang="ts">
import RoofAccordion from '@/components/simulation/RoofAccordion.vue'
import type { RoofSurfaceModel } from '@/model/roof.model'
import { ref } from 'vue'
import { useRoofsStore } from '@/stores/roof'
import { mapRoofSurfaceModel } from '@/model/roof.model'

const roofsStore = useRoofsStore()

function mapAndSortedRoofs() {
  const roofsFeaturesGroupBySurfaceId = roofsStore.roofsFeaturesGroupBySurfaceId
  const res: RoofSurfaceModel[] = []
  roofsFeaturesGroupBySurfaceId?.features.forEach((feature) => {
    res.push(mapRoofSurfaceModel(feature))
  })
  return res.sort((a, b) => b.favorable - a.favorable)
}

function changeSelectedRoof(index: number) {
  indexSelectedRoof.value = index
  const selectedRoof = roofsSorted[index]
  roofsStore.setSelectRoofFeatureFromSurfaceId(selectedRoof.surface_id)
}

function getIndexCurrentRoof() {
  if (roofsStore.selectedRoofFeature === null) {
    indexSelectedRoof.value = 0
    return
  }
  const selectedRoof = mapRoofSurfaceModel(roofsStore.selectedRoofFeature)
  roofsSorted.forEach((roof, index) => {
    if (roof.surface_id === selectedRoof.surface_id) {
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
