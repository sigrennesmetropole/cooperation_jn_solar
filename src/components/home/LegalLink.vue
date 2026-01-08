<script lang="ts" setup>
import UiLinkFooter from '@/components/ui/UiLinkFooter.vue'

const props = defineProps({
  textColor: {
    type: String,
    required: false,
    default: 'neutral-500',
  },
})
</script>

<template>
  <div class="flex gap-3 justify-center font-dm-sans">
    <UiLinkFooter
      :url="'https://metropole.rennes.fr/mentions-legales'"
      :textColor="props.textColor"
      >Mentions légales</UiLinkFooter
    >
    <UiLinkFooter
      :url="'https://fabriquecitoyenne.fr/privacy'"
      :textColor="props.textColor"
      >Politique de protection des données personnelles</UiLinkFooter
    >
  </div>
</template>
