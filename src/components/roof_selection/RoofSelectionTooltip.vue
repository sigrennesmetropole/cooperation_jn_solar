<script setup lang="ts">
import UiExplanationTooltip from '@/components/ui/UiExplanationTooltip.vue'
import { ref } from 'vue'
const title = 'Sélectionnez un pan de toit'
const content = 'Cliquez sur le pan de toit à étudier.'
let isOpen = ref(true)
</script>
<template>
  <UiExplanationTooltip
    v-if="isOpen"
    @close="isOpen = false"
    :title="title"
    :content="content"
    :display-close-button="false"
  ></UiExplanationTooltip>
</template>
