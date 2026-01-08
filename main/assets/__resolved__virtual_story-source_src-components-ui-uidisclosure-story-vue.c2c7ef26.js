const __resolved__virtual_storySource_srcComponentsUiUidisclosureStoryVue = `<script lang="ts" setup>
import UiDisclosure from '@/components/ui/UiDisclosure.vue'
<\/script>

<template>
  <Story title="UiDisclosure" group="ui-base">
    <template #default>
      <div class="flex flex-col px-6 py-8 bg-white gap-8 w-[450px]">
        <UiDisclosure>
          <template v-slot:title>
            <span class="font-dm-sans font-medium text-base color-black">
              Comment est calcul\xE9 l\u2019ensoleillement ?
            </span>
          </template>
          <template v-slot:contents>
            <span class="font-dm-sans font-medium text-sm color-black">
              L\u2019ensoleillement (ou irradiance) est la quantit\xE9 d\u2019\xE9nergie solaire
              re\xE7ue par le toit chaque ann\xE9e (en kWh/m2/an). Pour son calcul, la
              course du soleil et l'ombrage, mais aussi les caract\xE9ristiques du
              toit (pente, chemin\xE9e, etc.) sont pris en compte.
            </span>
          </template>
        </UiDisclosure>
      </div>
    </template>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcComponentsUiUidisclosureStoryVue as default
};
