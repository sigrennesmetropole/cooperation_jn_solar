<script lang="ts" setup>
import FigureKeyNumber from '@/components/pcaet/FigureKeyNumber.vue'
import HourGlass from '@/assets/illustrations/hour-glass.svg'
</script>

<template>
  <Story title="Figure Key" group="pcaetpage">
    <template #default>
      <FigureKeyNumber>
        <template v-slot:image>
          <img class="w-32 h-16 max-w-none" :src="HourGlass" alt="" />
        </template>
        <template v-slot:text>
          <p class="font-dm-sans text-xs font-bold">À l’horizon</p>
          <p class="font-dm-sans text-[44px] leading-10 font-bold">2030</p>
        </template>
      </FigureKeyNumber>
    </template>
  </Story>
</template>
