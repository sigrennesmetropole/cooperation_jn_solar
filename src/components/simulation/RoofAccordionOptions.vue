<script setup lang="ts">
import RoofAccordion from './RoofAccordion.vue'
import type { RoofSurfaceModel } from '@/model/roof.model'
import { computed, onMounted } from 'vue'
import { useRoofsStore } from '@/stores/roof'
import { mapRoofSurfaceModel } from '@/model/roof.model'

const roofsStore = useRoofsStore()

const mapAndSortedRoofs = computed(() => {
  const buildingRoofsFeatures = roofsStore.buildingRoofsFeatures
  const res: RoofSurfaceModel[] = []
  buildingRoofsFeatures?.features.forEach((feature) => {
    res.push(mapRoofSurfaceModel(feature))
  })
  return res.sort((a, b) => b.favorable - a.favorable)
})

onMounted(() => {
  roofsStore.setSelectedRoofFeatureBySurfaceId(
    mapAndSortedRoofs.value.at(0)!.surface_id
  )
})
</script>

<template>
  <div class="flex flex-col p-0 gap-6" role="radiogroup">
    <template v-for="(roofSurface, index) in mapAndSortedRoofs" :key="index">
      <RoofAccordion
        :roof-surface="roofSurface"
        :label="'Pan de toit n°' + (index + 1)"
        :selected="index === 0"
        :is-open="index === 0"
        :is-recommended="index === 0"
      ></RoofAccordion>
    </template>
  </div>
</template>
