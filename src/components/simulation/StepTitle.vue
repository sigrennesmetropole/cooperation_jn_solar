<script setup lang="ts">
import UiStepTitle from './UiStepTitle.vue'

import installation from '@/assets/icons/installation.svg'
import potentiel from '@/assets/icons/potentiel.svg'
import economies from '@/assets/icons/economies.svg'

const props = defineProps({
  step: {
    type: Number,
    required: true,
  },
})

const imageSources = [potentiel, installation, economies]
const titles = [
  'Votre ensoleillement',
  'Votre installation',
  'Votre production d’énergie',
]
</script>

<template>
  <UiStepTitle
    :image-source="imageSources[props.step - 1]"
    :title="titles[props.step - 1]"
  ></UiStepTitle>
</template>
