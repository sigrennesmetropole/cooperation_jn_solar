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
})
</script>

<template>
  <div class="flex flex-col p-0 gap-6">
    <template v-for="(roofSurface, index) in state.roofSurfaces" :key="index">
      <RoofAccordion
        :roof-surface="roofSurface"
        :label="'Pan de toit n°' + (index + 1)"
        :selected="index === 0"
      ></RoofAccordion>
    </template>
  </div>
</template>
