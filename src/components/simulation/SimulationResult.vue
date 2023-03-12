<script setup lang="ts">
import { UiIconButton } from '@sigrennesmetropole/cooperation_jn_common_ui'
import solarPanel from '@/assets/icons/solar-panel.svg'
import type { RoofSurfaceModel } from '@/model/roof.model'
import { ref, computed } from 'vue'

const props = defineProps<{
  roofSurface: RoofSurfaceModel
  maxNumSolarPanel: number
}>()

const currentNumSolarPanel = ref(props.maxNumSolarPanel)

function decreaseCurrenNumSolarPanel() {
  if (currentNumSolarPanel.value > 0) {
    currentNumSolarPanel.value = currentNumSolarPanel.value - 1
  }
}

function increaseCurrenNumSolarPanel() {
  if (currentNumSolarPanel.value < props.maxNumSolarPanel) {
    currentNumSolarPanel.value = currentNumSolarPanel.value + 1
  }
}

// 1.5 m2 per solar panel
const currentSurface = computed(() => currentNumSolarPanel.value * 1.5)

// 0.35 KwP per solar panel
const currentPower = computed(() =>
  (currentNumSolarPanel.value * 0.35).toFixed(2)
)
</script>

<template>
  <div
    class="box-border flex flex-col p-5 border-[1px] border-slate-200 rounded-lg"
  >
    <div class="flex flex-row justify-center items-center pt-4 px-0 pb-6">
      <UiIconButton
        class="rounded-3xl border-[1px]"
        @click="decreaseCurrenNumSolarPanel"
        :disabled="currentNumSolarPanel == 0"
        :class="
          currentNumSolarPanel == 0 ? 'border-neutral-300' : 'border-black'
        "
      >
        <svg
          width="20"
          height="2"
          viewBox="0 0 20 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.714355 1H19.2858"
            :stroke="currentNumSolarPanel == 0 ? '#D4D4D4' : 'black'"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </UiIconButton>
      <div class="flex flex-col items-center p-0">
        <div class="flex flex-row items-center p-0 gap-2.5">
          <span class="font-dm-sans font-bold text-[44px] leading-[48px]">
            {{ currentNumSolarPanel }}
          </span>
          <img class="w-16 h-16" :src="solarPanel" />
        </div>
        <div class="flex flex-col items-center p-0 gap-1">
          <h4 class="font-dm-sans text-lg text-center font-bold w-[140px]">
            panneaux photovoltaïques
          </h4>
          <p class="font-dm-sans font-normal text-xs text-neutral-600">
            soit {{ currentPower }} kWc de puissance installée
          </p>
        </div>
      </div>
      <UiIconButton
        class="rounded-3xl border-[1px]"
        @click="increaseCurrenNumSolarPanel"
        :disabled="currentNumSolarPanel == props.maxNumSolarPanel"
        :class="
          currentNumSolarPanel == props.maxNumSolarPanel
            ? 'border-neutral-300'
            : 'border-black'
        "
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0.771484V19.3429"
            :stroke="
              currentNumSolarPanel == props.maxNumSolarPanel
                ? '#D4D4D4'
                : 'black'
            "
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M0.714355 10H19.2858"
            :stroke="
              currentNumSolarPanel == props.maxNumSolarPanel
                ? '#D4D4D4'
                : 'black'
            "
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </UiIconButton>
    </div>
    <div class="border-b border-neutral-300"></div>
    <div class="flex py-0 px-1.5 gap-6 items-stretch">
      <div class="flex flex-col p-0 gap-2 items-start grow">
        <p class="font-dm-sans text-sm font-normal">Orientation</p>
        <p class="font-dm-sans text-base font-bold">
          {{ props.roofSurface.orientation }}
        </p>
      </div>
      <div class="flex flex-col p-0 gap-2 items-center grow">
        <p class="font-dm-sans text-sm font-normal">Inclinaison</p>
        <p class="font-dm-sans text-base font-bold">
          {{ props.roofSurface.incliniasion }}°
        </p>
      </div>
      <div class="flex flex-col p-0 gap-2 items-end grow">
        <p class="font-dm-sans text-sm font-normal">Surface</p>
        <p class="font-dm-sans text-base font-bold">
          {{ currentSurface }}m&sup2;
        </p>
      </div>
    </div>
  </div>
</template>
