<script setup lang="ts">
import iconArrowDown from '@/assets/icons/arrow-down.svg'
import iconArrowUp from '@/assets/icons/arrow-up.svg'
import iconStar from '@/assets/icons/star.svg'
import type { RoofSurfaceModel } from '@/model/roof.model'
import RoofInformationsBox from '@/components/simulation/RoofInformationsBox.vue'

const props = defineProps<{
  roofSurface: RoofSurfaceModel
  label: string
  selected: Boolean
  isOpen: Boolean
  isRecommended: Boolean
  index: number
}>()
</script>

<template>
  <div
    class="box-border flex flex-col justify-center py-4 px-3 gap-3 bg-slate-50 border-[1px] border-slate-600 rounded-lg"
    role="button"
  >
    <div
      class="flex flex-row items-center p-0 gap-2"
      :aria-expanded="props.isOpen"
    >
      <div class="flex flex-row py-0 px-2 gap-3 grow items-center">
        <div class="flex flex-row p-0 gap-3 grow items-center">
          <input
            role="radio"
            type="radio"
            :id="props.label"
            class="checked:bg-black checked:hover:bg-black checked:active:bg-black checked:focus:bg-black focus:bg-black focus:outline-none focus:ring-1 focus:ring-black"
            name="roofSideSelection"
            :checked="props.selected == true"
            :aria-checked="props.selected == true"
            :aria-label="props.label"
            @click.stop="$emit('clickRoofAccordion')"
          />
          <label
            :for="props.label"
            class="font-dm-sans text-base font-medium grow-0 text-left"
            >{{ label }}</label
          >
        </div>
        <div class="grow"></div>

        <div
          v-if="props.isRecommended"
          class="bg-amber-400 flex flex-row py-1 px-2 gap-2 rounded items-center"
        >
          <img :src="iconStar" class="w-3 h-3" />
          <span class="font-dm-sans font-medium text-sm">Recommandé</span>
        </div>
        <img v-if="!props.isOpen" :src="iconArrowDown" class="w-5 h-5" />
        <img v-else :src="iconArrowUp" class="w-5 h-5" />
      </div>
    </div>
    <div class="flex flex-col p-0 bg-white" v-if="props.isOpen">
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
          <div class="relative flex flex-col p-2 gap-2.5" @click.stop="">
            <UiButtonWithTooltip
              text="La surface favorable est celle recevant suffisamment d'ensoleillement pour accueillir des panneaux solaires soit, dans notre simulation, un ensoleillement supérieur à 1 000 kWh/m2/an. La surface affichée ici est calculée sur le pan de toit sélectionné."
              widthButton="5"
              heightButton="5"
              position-top="0px"
              position-right="0px"
              widthBoxText="w-[299px]"
            ></UiButtonWithTooltip>
          </div>
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
              {{ props.roofSurface.inclinaison }}°
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col p-0 bg-white" v-if="displayContents">
      <RoofInformationsBox
        :roofSurface="props.roofSurface"
        :isDisplayBox="true"
      />
    </div>
  </div>
</template>
