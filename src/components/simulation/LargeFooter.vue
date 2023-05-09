<script setup lang="ts">
import { UiRennesLogo } from '@sigrennesmetropole/cooperation_jn_common_ui'
import { UiLinkFooter } from '@sigrennesmetropole/cooperation_jn_common_ui'
import type { LegalItem } from '@/model/legalItem.model'
import type { PropType } from 'vue'

const openLink = (link: string) => {
  window.open(link, '_blank')
}

const props = defineProps({
  textColor: {
    type: String,
    required: false,
    default: 'neutral-500',
  },
  legalList: Array as PropType<LegalItem[]>,
})
</script>

<template>
  <footer class="flex flex-row justify-between font-dm-sans" id="footer">
    <div class="flex p-0 gap-6">
      <UiRennesLogo class="w-36 h-7"></UiRennesLogo>
      <div class="font-normal text-xs">
        Visualisez les données thématiques <br />du territoire sur sa maquette
        3D.
      </div>
    </div>
    <div
      class="flex flex-wrap items-end gap-[7px] pt-2 font-dm-sans font-normal text-xs leading-4 text-neutral-500 underline hover:cursor-pointer"
    >
      <UiLinkFooter
        v-for="item in props.legalList"
        tabindex="0"
        :key="item['name']"
        @click="openLink(item['link'])"
        @keydown.enter="openLink(item['link'])"
        :textColor="props.textColor"
        >{{ item['name'] }}</UiLinkFooter
      >
    </div>
  </footer>
</template>
