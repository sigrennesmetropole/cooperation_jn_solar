<script setup lang="ts">
import { UiButtonWithTooltip } from '@sigrennesmetropole/cooperation_jn_common_ui'
import iconExternalLink from '@/assets/icons/icon-external-link-white.svg'
import { usePopUpStore } from '@/stores/popUpStore'

const popUpStore = usePopUpStore()
</script>

<template>
  <UiButtonWithTooltip
    text=""
    widthButton="12"
    heightButton="12"
    widthBoxText="w-[600px]"
  >
    <p class="font-dm-sans text-sm font-normal text-neutral-200">
      Les niveaux d'ensoleillement sont estimés grâce à des calculs s'appuyant
      sur la modélisation 3D du territoire (incluant le terrain et les éléments
      de sursol comme le bâti et la végétation qui peuvent être sources
      d'ombrage), la course du soleil et des données atmosphériques moyennées.
      Cet ensoleillement est calculé en chaque point de la toiture considérant
      son orientation et son inclinaison.
      <span
        class="underline inline-flex items-center cursor-pointer"
        @click="popUpStore.displayTermsOfUse()"
      >
        <strong> Détails &nbsp;</strong>
        <img :src="iconExternalLink" class="w-[10px] h-[10px] text-undeline" />
      </span>
    </p>
  </UiButtonWithTooltip>
</template>
