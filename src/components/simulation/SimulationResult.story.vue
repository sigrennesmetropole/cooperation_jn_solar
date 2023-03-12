<script lang="ts" setup>
import type { RoofSurfaceModel } from '@/model/roof.model'
import SimulationResult from './SimulationResult.vue'

const roofSurface: RoofSurfaceModel = {
  values: [10, 20, 30, 40],
  favorable: 44,
  total: 90,
  orientation: 'Sud',
  incliniasion: 47.9,
}
</script>

<template>
  <Story title="Simulation Result" group="simulation-step">
    <template #default>
      <SimulationResult
        class="w-[402px]"
        :roof-surface="roofSurface"
        :max-num-solar-panel="6"
      ></SimulationResult>
    </template>
  </Story>
</template>
