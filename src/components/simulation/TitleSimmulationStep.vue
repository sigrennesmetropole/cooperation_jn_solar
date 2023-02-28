<script setup lang="ts">
import UiTitleStep from './UiTitleStep.vue'

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
  'Vos économies d’énergie',
]
</script>

<template>
  <UiTitleStep
    :image-source="imageSources[props.step - 1]"
    :title="titles[props.step - 1]"
  ></UiTitleStep>
</template>
