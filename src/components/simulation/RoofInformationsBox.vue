<script setup lang="ts">
import type { RoofSurfaceModel } from '@/model/roof.model'
import { UiButtonWithTooltip } from '@sigrennesmetropole/cooperation_jn_common_ui'

const props = defineProps<{
  roofSurface: RoofSurfaceModel
  isDisplayBox: Boolean
}>()
</script>
<template>
  <div
    class="flex flex-col gap-4"
    :class="
      props.isDisplayBox
        ? 'box-border  p-5 border-[1px] border-slate-200 rounded-lg'
        : ''
    "
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
      <div
        class="relative flex flex-col p-2 gap-2.5 font-dm-sans"
        @click.stop=""
      >
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
      <div class="flex flex-row justify-between items-center p-0 gap-2 grow">
        <p class="font-dm-sans text-sm font-normal">Orientation</p>
        <p class="font-dm-sans font-bold text-base">
          {{ props.roofSurface.orientation }}
        </p>
      </div>
      <div class="flex flex-row justify-between items-center p-0 gap-2 grow">
        <p class="font-dm-sans text-sm font-normal">Inclinaison</p>
        <p class="font-dm-sans font-bold text-base">
          {{ props.roofSurface.inclinaison }}°
        </p>
      </div>
    </div>
  </div>
</template>
