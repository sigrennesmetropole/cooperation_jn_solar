<script lang="ts" setup>
import UiSurfaceNumber from '@/components/roof_selection/UiSurfaceNumber.vue'
</script>

<template>
  <Story title="Surface Number" group="pcaetpage">
    <template #default>
      <UiSurfaceNumber
        class="w-[402px] h-[100px]"
        :totalArea="90"
        :favorableArea="44"
      >
      </UiSurfaceNumber>
    </template>
  </Story>
</template>
