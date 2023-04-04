<script lang="ts" setup>
import UiTooltip from '@/components/ui/UiTooltip.vue'

function tooltipWithButton() {
  return {
    titre: "Localisez votre lieux d'habitation",
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
    <Variant title="UiTooltip with button" :init-state="tooltipWithButton">
      <template #default="{ state }">
        <UiTooltip
          :title="state.titre"
          :content="state.content"
          :display-close-button="state.displayCloseButton"
          :content-close-button="state.contentCloseButton"
        ></UiTooltip>
      </template>
    </Variant>
    <Variant
      title="UiTooltip without button"
      :init-state="tooltipWithoutButton"
    >
      <template #default="{ state }">
        <UiTooltip
          :title="state.titre"
          :content="state.content"
          :display-close-button="state.displayCloseButton"
          :content-close-button="state.contentCloseButton"
        ></UiTooltip>
      </template>
    </Variant>
  </Story>
</template>
