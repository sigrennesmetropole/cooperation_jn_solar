<script lang="ts" setup>
import UiSolarPanelLogo from '@/components/ui/UiSolarPanelLogo.vue'
import { UiAbstractTitle } from '@sigrennesmetropole/cooperation_jn_common_ui'

const title = 'Cadastre Solaire'
const abstract =
  'Projetez-vous en tant que producteur d’électricité grâce à l’énergie solaire photovoltaïque.'
</script>

<template>
  <UiAbstractTitle :logo="UiSolarPanelLogo" :abstract="abstract" :title="title">
  </UiAbstractTitle>
</template>
