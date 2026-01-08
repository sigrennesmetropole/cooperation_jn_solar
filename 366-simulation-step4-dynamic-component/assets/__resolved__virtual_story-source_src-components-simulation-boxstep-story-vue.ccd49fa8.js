const __resolved__virtual_storySource_srcComponentsSimulationBoxstepStoryVue = `<script lang="ts" setup>
import BoxStep from '@/components/simulation/BoxStep.vue'
import iconInstallation from '@/assets/icons/installation.svg'
<\/script>

<template>
  <Story title="BoxStep" group="simulation-step">
    <template #default>
      <BoxStep>
        <template v-slot:nameOfStep>
          <span class="mt-6 font-dm-sans font-normal text-xs text-neutral-500">
            \xC9tape 2
          </span>
        </template>
        <template v-slot:image>
          <img class="w-15 h-15 mt-2" :src="iconInstallation" alt="" />
        </template>
        <template v-slot:text>
          <span class="font-dm-sans font-bold text-lg text-center">
            Quelle production d\u2019\xE9lectricit\xE9 <br />
            est envisageable ici ?
          </span>
        </template>
        <template v-slot:buttonContent>
          <span class="text-white text-base font-medium">
            Simuler une installation photovolta\xEFque
          </span>
        </template>
      </BoxStep>
    </template>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcComponentsSimulationBoxstepStoryVue as default
};
