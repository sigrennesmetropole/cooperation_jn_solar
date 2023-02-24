<script setup lang="ts">
import StepIllustration from './StepIllustration.vue'
import RightFlatArrow from '@/assets/illustrations/right-flat-arrow.svg'

import installation from '@/assets/icons/installation.svg'
import potentiel from '@/assets/icons/potentiel.svg'
import economies from '@/assets/icons/economies.svg'
</script>
<template>
  <div
    class="box-border flex items-center p-0s bg-slate-50 border-[1px] border-slate-100 rounded-lg"
  >
    <StepIllustration
      :image="potentiel"
      :text="'Ensoleillement'"
    ></StepIllustration>
    <img :src="RightFlatArrow" />
    <StepIllustration
      :image="installation"
      :text="'Installation'"
    ></StepIllustration>
    <img :src="RightFlatArrow" />
    <StepIllustration :image="economies" :text="'Économies'"></StepIllustration>
  </div>
</template>
