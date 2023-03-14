<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  step: {
    type: Number,
    required: true,
  },
  // Used for installation step that has 2 substep
  substep: {
    type: Number,
    required: false,
    default: 1,
  },
})

const mainDescriptions = [
  'Je sélectionne le meilleur pan de toit.',
  'J’identifie les obstacles sur ma toiture.',
  'Estimez quelle sera votre production, quelle part vous consommerez directement (en fonction de votre profil de consommation) et quelle part sera injectée sur le réseau.',
]

const secondaryDescriptions = [
  null,
  'Mon installation photovoltaique simulée :',
  null,
]

const getDescription = computed(() => {
  if (props.substep === 1) {
    return mainDescriptions[props.step - 1]
  } else {
    return (
      secondaryDescriptions[props.step - 1] ?? mainDescriptions[props.step - 1]
    )
  }
})
</script>
<template>
  <p
    class="font-dm-sans text-base text-center"
    :class="props.step == 3 ? 'font-normal' : 'font-medium'"
  >
    {{ getDescription }}
  </p>
</template>
