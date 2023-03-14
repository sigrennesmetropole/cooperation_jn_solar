<script setup lang="ts">
import RoofAccordion from './RoofAccordion.vue'
import type { RoofSurfaceModel } from '@/model/roof.model'
import { onMounted, reactive } from 'vue'
import { apiClientService } from '@/services/roof'

const state = reactive({
  roofSurfaces: null as null | RoofSurfaceModel[],
})

onMounted(async () => {
  state.roofSurfaces = await apiClientService.fetchRoofSurfaceFixtures()
  state.roofSurfaces.sort((a, b) => (a.favorable < b.favorable ? 1 : -1))
})
</script>

<template>
  <div class="flex flex-col p-0 gap-6" role="radiogroup">
    <template v-for="(roofSurface, index) in state.roofSurfaces" :key="index">
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
