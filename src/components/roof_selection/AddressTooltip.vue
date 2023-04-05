<script setup lang="ts">
import UiExplanationTooltip from '@/components/ui/UiExplanationTooltip.vue'
import { ref } from 'vue'
const title = "Localisez votre lieux d'habitation"
const content =
  'Renseignez une adresse ci-dessus ou naviguez sur la carte grâce aux outils en bas à droite.'
const contentCloseButton = "J'ai compris"
let isOpen = ref(true)
</script>
<template>
  <UiExplanationTooltip
    v-if="isOpen"
    @close="$emit('closeAddress')"
    :title="title"
    :content="content"
    :display-close-button="true"
    :content-close-button="contentCloseButton"
  ></UiExplanationTooltip>
</template>
