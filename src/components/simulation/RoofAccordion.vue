<script setup lang="ts">
import iconArrowDown from '@/assets/icons/arrow-down.svg'
import iconArrowUp from '@/assets/icons/arrow-up.svg'
import iconStar from '@/assets/icons/star.svg'
import type { RoofSurfaceModel } from '@/model/roof.model'
import RoofInformationsBox from '@/components/simulation/RoofInformationsBox.vue'

import { ref } from 'vue'

const props = defineProps<{
  roofSurface: RoofSurfaceModel
  label: string
  selected: Boolean
  isOpen: Boolean
  isRecommended: Boolean
  index: number
}>()

const displayContents = ref(props.isOpen)
</script>

<template>
  <div
    class="box-border flex flex-col justify-center py-4 px-3 gap-3 bg-slate-50 border-[1px] border-slate-600 rounded-lg"
    @click="displayContents = !displayContents"
    role="button"
  >
    <button
      class="flex flex-row items-center p-0 gap-2"
      :aria-expanded="displayContents == true"
    >
      <div class="flex flex-row py-0 px-2 gap-3 grow items-center">
        <label class="flex flex-row p-0 gap-3 grow items-center">
          <input
            role="radio"
            type="radio"
            class="checked:bg-black checked:hover:bg-black checked:active:bg-black checked:focus:bg-black focus:bg-black focus:outline-none focus:ring-1 focus:ring-black"
            name="roofSideSelection"
            :checked="props.selected == true"
            :aria-checked="props.selected == true"
            :aria-label="props.label"
            @click="$emit('clickRoofAccordion', props.index)"
          />
          <span class="font-dm-sans text-base font-medium grow text-left">{{
            label
          }}</span>
        </label>
        <div
          v-if="props.isRecommended"
          class="bg-amber-400 flex flex-row py-1 px-2 gap-2 rounded items-center"
        >
          <img :src="iconStar" class="w-3 h-3" />
          <span class="font-dm-sans font-medium text-sm">Recommandé</span>
        </div>
        <img v-if="!displayContents" :src="iconArrowDown" class="w-5 h-5" />
        <img v-else :src="iconArrowUp" class="w-5 h-5" />
      </div>
    </button>

    <div class="flex flex-col p-0 bg-white" v-if="displayContents">
      <RoofInformationsBox
        :roofSurface="props.roofSurface"
        :isDisplayBox="true"
      />
    </div>
  </div>
</template>
