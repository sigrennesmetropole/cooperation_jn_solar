<script lang="ts" setup>
import StepIllustration from './StepIllustration.vue'
import potentiel from '@/assets/icons/potentiel.svg'
</script>

<template>
  <Story title="Simulation Illustration Step" group="pcaetpage">
    <template #default>
      <StepIllustration
        :image="potentiel"
        :text="'Ensoleillement'"
        :selected="true"
      ></StepIllustration>
    </template>
  </Story>
</template>
