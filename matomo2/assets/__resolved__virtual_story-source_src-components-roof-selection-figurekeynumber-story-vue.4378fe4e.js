const __resolved__virtual_storySource_srcComponentsRoofSelectionFigurekeynumberStoryVue = `<script lang="ts" setup>
import FigureKeyNumber from '@/components/roof_selection/FigureKeyNumber.vue'
import HourGlass from '@/assets/illustrations/hour-glass.svg'
<\/script>

<template>
  <Story title="Figure Key" group="pcaetpage">
    <template #default>
      <FigureKeyNumber>
        <template v-slot:image>
          <img class="w-32 h-16 max-w-none" :src="HourGlass" alt="" />
        </template>
        <template v-slot:text>
          <p class="font-dm-sans text-xs font-bold">\xC0 l\u2019horizon</p>
          <p class="font-dm-sans text-[44px] leading-10 font-bold">2030</p>
        </template>
      </FigureKeyNumber>
    </template>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcComponentsRoofSelectionFigurekeynumberStoryVue as default
};
