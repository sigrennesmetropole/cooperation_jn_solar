<script lang="ts" setup>
import SurfaceNumber from '@/components/roof_selection/SurfaceNumber.vue'
</script>

<template>
  <Story title="Surface Number" group="pcaetpage">
    <template #default>
      <SurfaceNumber
        class="w-[402px] h-[100px]"
        :allArea="90"
        :favorableArea="44"
      >
      </SurfaceNumber>
    </template>
  </Story>
</template>
