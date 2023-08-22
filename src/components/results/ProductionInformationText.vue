<script setup lang="ts">
import installation from '@/assets/icons/installation.svg'
import { getNumberFromConfig } from '@/services/configService'
import { computed, defineProps } from 'vue'
import solarPanelIcon from '@/assets/icons/solar-panel.svg'

const props = defineProps<{
  currentNumSolarPanel: number
}>()

const currentSurface = computed(() =>
  (
    props.currentNumSolarPanel *
    getNumberFromConfig('solar_panel.solar_panel_surface')
  ).toFixed(2)
)

const currentPower = computed(() =>
  (
    props.currentNumSolarPanel *
    getNumberFromConfig('solar_panel.solar_panel_power')
  ).toFixed(2)
)
</script>

<template>
  <div class="flex flex-row items-center gap-2 ml-1">
    <img :src="installation" alt="" class="w-11 h-10" />
    <span class="font-bold text-2xl"> Votre installation </span>
  </div>

  <div
    class="bg-slate-50 border border-slate-100 rounded-lg flex flex-col px-5 py-3 gap-4"
  >
    <div class="flex flex-col items-center p-0">
      <div class="flex flex-row items-center p-0 gap-2.5">
        <span class="font-dm-sans font-bold text-[44px] leading-[48px]">
          {{ currentNumSolarPanel }}
        </span>
        <img class="w-16 h-16" :src="solarPanelIcon" />
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

    <div class="border-b border-neutral-300"></div>

    <div class="ml-2">
      <span class="font-dm-sans font-normal text-sm">
        Surface de l’installation photovoltaïque
      </span>
      <span class="font-bold text-base"> {{ currentSurface }}m&sup2; </span>
    </div>
  </div>
</template>
