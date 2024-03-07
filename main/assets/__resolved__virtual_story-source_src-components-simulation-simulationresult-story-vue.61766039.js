const __resolved__virtual_storySource_srcComponentsSimulationSimulationresultStoryVue = `<script lang="ts" setup>
import type { RoofSurfaceModel } from '@/model/roof.model'
import SimulationResult from './SimulationResult.vue'

const roofSurface: RoofSurfaceModel = {
  surface_id: '1',
  values: [10, 20, 30, 40],
  favorable: 44,
  total: 90,
  orientation: 'Sud',
  inclinaison: 47.9,
}
<\/script>

<template>
  <Story title="Simulation Result" group="simulation-step">
    <template #default>
      <SimulationResult
        class="w-[402px]"
        :roof-surface="roofSurface"
        :max-num-solar-panel="6"
        :current-num-solar-panel="4"
      ></SimulationResult>
    </template>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcComponentsSimulationSimulationresultStoryVue as default
};
