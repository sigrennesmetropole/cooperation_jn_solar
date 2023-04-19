<script lang="ts" setup>
import UiExplanationTooltip from '@/components/ui/UiExplanationTooltip.vue'

function tooltipWithButton() {
  return {
    titre: "Localisez votre lieu d'habitation",
    content:
      'Renseignez une adresse ci-dessus ou naviguez sur la carte grâce aux outils en bas à droite.',
    displayCloseButton: true,
    contentCloseButton: 'Fermer',
  }
}
function tooltipWithoutButton() {
  return {
    titre: 'Titre',
    content: 'Contenu',
    displayCloseButton: false,
    contentCloseButton: 'Fermer',
  }
}
</script>

<template>
  <Story>
    <Variant
      title="UiExplanationTooltip with button"
      :init-state="tooltipWithButton"
    >
      <template #default="{ state }">
        <UiExplanationTooltip
          :title="state.titre"
          :content="state.content"
          :display-close-button="state.displayCloseButton"
          :content-close-button="state.contentCloseButton"
        ></UiExplanationTooltip>
      </template>
    </Variant>
    <Variant
      title="UiExplanationTooltip without button"
      :init-state="tooltipWithoutButton"
    >
      <template #default="{ state }">
        <UiExplanationTooltip
          :title="state.titre"
          :content="state.content"
          :display-close-button="state.displayCloseButton"
          :content-close-button="state.contentCloseButton"
        ></UiExplanationTooltip>
      </template>
    </Variant>
  </Story>
</template>
