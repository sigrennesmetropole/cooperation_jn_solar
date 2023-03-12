<script setup lang="ts">
import { UiIconButton } from '@sigrennesmetropole/cooperation_jn_common_ui'
import { IconPlus } from '@sigrennesmetropole/cooperation_jn_common_ui'
import { IconMinus } from '@sigrennesmetropole/cooperation_jn_common_ui'
import solarPanel from '@/assets/icons/solar-panel.svg'

function increase() {
  console.log('increase')
}
</script>

<template>
  <div
    class="box-border flex flex-col p-5 border-[1px] border-slate-200 rounded-lg"
  >
    <div class="flex flex-row justify-center items-center pt-4 px-0 pb-6">
      <UiIconButton class="rounded-3xl" @click="increase">
        <IconMinus />
      </UiIconButton>
      <div class="flex flex-col items-center p-0">
        <div class="flex flex-row items-center p-0 gap-2.5">
          <span class="font-dm-sans font-bold text-[44px] leading-[48px]">
            6
          </span>
          <img class="w-16 h-16" :src="solarPanel" />
        </div>
        <div class="flex flex-col items-center p-0 gap-1">
          <h4 class="font-dm-sans text-lg text-center font-bold w-[140px]">
            panneaux photovoltaïques
          </h4>
          <p class="font-dm-sans font-normal text-xs text-neutral-600">
            soit 2,1 kWc de puissance installée
          </p>
        </div>
      </div>
      <UiIconButton class="rounded-3xl" @click="increase">
        <IconPlus />
      </UiIconButton>
    </div>
    <div class="border-b border-neutral-300"></div>
    <div class="flex py-0 px-1.5 gap-6 items-stretch">
      <div class="flex flex-col p-0 gap-2 items-start grow">
        <p class="font-dm-sans text-sm font-normal">Orientation</p>
        <p class="font-dm-sans text-base font-bold">Sud</p>
      </div>
      <div class="flex flex-col p-0 gap-2 items-center grow">
        <p class="font-dm-sans text-sm font-normal">Inclinaison</p>
        <p class="font-dm-sans text-base font-bold">47.9°</p>
      </div>
      <div class="flex flex-col p-0 gap-2 items-end grow">
        <p class="font-dm-sans text-sm font-normal">Surface</p>
        <p class="font-dm-sans text-base font-bold">9m&sup2;</p>
      </div>
    </div>
  </div>
</template>
