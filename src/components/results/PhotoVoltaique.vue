<script setup lang="ts">
import photoVoltaique from '@/assets/illustrations/photo_voltaique.svg'
import goToBlack from '@/assets/icons/expand-small-bigger-retract-smaller-big.svg'
import ButtonVisitWebsite from '@/components/results/ButtonVisitWebsite.vue'

const props = defineProps<{
  isPdf: boolean
}>()

const PHOTOVOLTAIQUE_LINK = 'https://www.photovoltaique.info/fr/'

function goToPhotovoltaiqueInfo() {
  window.open(PHOTOVOLTAIQUE_LINK, '_blank')
}
</script>

<template>
  <div class="flex flex-row gap-8 w-[100%] h-fit bg-white">
    <div
      class="flex flex-row w-[50%] justify-center h-fit border border-neutral-300 rounded-lg px-5 py-8"
    >
      <img :src="photoVoltaique" />
    </div>
    <div class="flex flex-col w-[50%] h-fit">
      <p class="font-dm-sans text-base font-normal">
        Le site de référence
        <span
          tabindex="0"
          class="inline-flex items-center cursor-pointer font-medium"
          :class="props.isPdf ? 'mt-4' : ''"
          @click="goToPhotovoltaiqueInfo()"
          @keydown.enter="goToPhotovoltaiqueInfo()"
        >
          <strong class="underline"> photovoltaique.info</strong>
          <img :src="goToBlack" class="w-[14px] h-[14px] ml-1" />
        </span>
        regroupe l’essentiel des informations techniques et réglementaires sur
        le photovoltaïque.
      </p>

      <ButtonVisitWebsite :link="PHOTOVOLTAIQUE_LINK" :isPdf="props.isPdf" />
    </div>
  </div>
</template>
