<script setup lang="ts">
import informationIcon from '@/assets/icons/informationIcon.svg'
import iconArrowDown from '@/assets/icons/arrow-down.svg'
import iconArrowUp from '@/assets/icons/arrow-up.svg'
import type { RoofSurfaceModel } from '@/model/roof.model'

import { ref } from 'vue'

const props = defineProps<{
  roofSurface: RoofSurfaceModel
  label: string
  selected: Boolean
  isOpen: Boolean
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
      <div class="flex flex-row py-0 px-2 gap-3 grow">
        <label class="flex flex-row p-0 gap-3 grow">
          <input
            role="radio"
            type="radio"
            class="checked:bg-black checked:hover:bg-black checked:active:bg-black checked:focus:bg-black focus:bg-black focus:outline-none focus:ring-1 focus:ring-black"
            name="roofSideSelection"
            :checked="props.selected == true"
            :aria-checked="props.selected == true"
            :aria-label="props.label"
          />
          <span class="font-dm-sans text-base font-medium grow text-left">{{
            label
          }}</span>
        </label>

        <img v-if="!displayContents" :src="iconArrowDown" class="w-5 h-5" />
        <img v-else :src="iconArrowUp" class="w-5 h-5" />
      </div>
    </button>
    <div class="flex flex-col p-0 bg-white" v-if="displayContents">
      <div
        class="box-border flex flex-col p-5 gap-4 border-[1px] border-slate-200 rounded-lg"
      >
        <div class="flex flex-row p-0 gap-4">
          <div class="flex flex-col items-start p-0 grow">
            <h3 class="font-dm-sans font-bold text-[28px] leading-7">
              {{ props.roofSurface.favorable }} m&sup2;
            </h3>
            <p class="font-dm-sans text-sm font-medium text-neutral-900">
              de surface favorable
            </p>
            <p class="font-dm-sans text-sm font-normal text-neutral-600">
              sur {{ props.roofSurface.total }} m&sup2;
            </p>
          </div>
          <img :src="informationIcon" class="w-[18px] h-[18px]" />
        </div>
        <div class="border-b border-neutral-300"></div>
        <div class="flex flex-row py-0 px-1.5 gap-6">
          <div
            class="flex flex-row justify-between items-center p-0 gap-2 grow"
          >
            <p class="font-dm-sans text-sm font-normal">Orientation</p>
            <p class="font-dm-sans font-bold text-base">
              {{ props.roofSurface.orientation }}
            </p>
          </div>
          <div
            class="flex flex-row justify-between items-center p-0 gap-2 grow"
          >
            <p class="font-dm-sans text-sm font-normal">Inclinaison</p>
            <p class="font-dm-sans font-bold text-base">
              {{ props.roofSurface.incliniasion }}°
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
