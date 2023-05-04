<script setup lang="ts">
import UiExplanationTooltip from '@/components/ui/UiExplanationTooltip.vue'
import { ref } from 'vue'
const title = 'Sélectionnez un bâtiment'
const content = 'Cliquez sur un bâtiment pour commencer la simulation'
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
