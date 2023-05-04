<script setup lang="ts">
const props = defineProps({
  step: {
    type: Number,
    required: true,
  },
  substep: {
    type: Number,
    required: false,
    default: 1,
  },
})

// Text description according to step and substep
const descriptions: Record<number, Record<number, string>> = {
  1: {
    1: 'Je sélectionne le meilleur pan de toit.',
  },
  2: {
    1: "Je clique sur les éventuels obstacles empêchant l'installation de panneaux solaires sur ce pan de toit comme les vélux ou les cheminées.",
    2: 'Mon installation photovoltaique simulée :',
    3: 'Ce pan de toit ne peut accueillir aucun panneau solaire.',
  },
  3: {
    1: 'Estimez quelle sera votre production, quelle part vous consommerez directement (en fonction de votre profil de consommation) et quelle part sera injectée sur le réseau.',
    2: 'Renseignez votre consommation électrique annuelle',
    3: 'Pour estimer mes économies (la part d’énergie produite consommée sur place), je renseigne ma consommation électrique annuelle',
    4: '',
  },
}
</script>
<template>
  <p
    class="font-dm-sans text-base text-center"
    :class="props.step == 3 ? 'font-normal' : 'font-medium'"
  >
    {{ descriptions[props.step][props.substep] }}
  </p>
</template>
