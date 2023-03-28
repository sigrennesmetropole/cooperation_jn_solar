<script lang="ts" setup>
import RoofAccordion from './RoofAccordion.vue'
import type { RoofSurfaceModel } from '@/model/roof.model'

const roofSurface: RoofSurfaceModel = {
  surface_id: '1',
  values: [10, 20, 30, 40],
  favorable: 44,
  total: 90,
  orientation: 'Sud',
  inclinaison: 47.9,
}
</script>

<template>
  <Story title="Roof Accordion" group="simulation-step">
    <template #default>
      <RoofAccordion
        :roof-surface="roofSurface"
        class="w-[468px]"
        :label="'Pan de toit n°1'"
        :selected="true"
        :is-open="true"
        :is-recommended="true"
      ></RoofAccordion>
    </template>
  </Story>
</template>
