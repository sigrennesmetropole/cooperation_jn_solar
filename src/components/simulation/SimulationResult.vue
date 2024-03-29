<script setup lang="ts">
import { UiIconButton } from '@sigrennesmetropole/cooperation_jn_common_ui'
import solarPanel from '@/assets/icons/solar-panel.svg'
import type { RoofSurfaceModel } from '@/model/roof.model'
import { computed } from 'vue'
import { useConfigStore } from '@/stores/config'

const configStore = useConfigStore()
const props = defineProps<{
  roofSurface: RoofSurfaceModel | undefined
  maxNumSolarPanel: number
  currentNumSolarPanel: number
}>()

const minNumSolarPanel = 1

const emit = defineEmits(['solarPanelChanges'])

const updateCurrentNumSolarPanel = (solarPanelChanges: number) => {
  if (
    props.currentNumSolarPanel + solarPanelChanges >= minNumSolarPanel &&
    props.currentNumSolarPanel + solarPanelChanges <= props.maxNumSolarPanel
  ) {
    emit('solarPanelChanges', solarPanelChanges)
  }
}

const currentSurface = computed(() => {
  return (
    props.currentNumSolarPanel *
    configStore.config?.solar.solar_panel.solar_panel_surface!
  ).toFixed(2)
})

const currentPower = computed(() =>
  (
    props.currentNumSolarPanel *
    configStore.config?.solar.solar_panel.solar_panel_power!
  ).toFixed(2)
)
</script>

<template>
  <div
    class="box-border flex flex-col p-5 border-[1px] border-slate-200 rounded-lg"
  >
    <div class="flex flex-row justify-center items-center pt-4 px-0">
      <UiIconButton
        class="rounded-3xl border-[1px]"
        @click="updateCurrentNumSolarPanel(-1)"
        :disabled="currentNumSolarPanel == minNumSolarPanel"
        :class="
          currentNumSolarPanel == minNumSolarPanel
            ? 'border-neutral-300'
            : 'border-black'
        "
        ariaLabelButton="Retirer un panneau"
        titleButton="Retirer un panneau"
        heightTitle="30"
        widthTitle="200"
        positionX="-70"
        positionY="-80"
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
            :stroke="
              currentNumSolarPanel == minNumSolarPanel ? '#D4D4D4' : 'black'
            "
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </UiIconButton>
      <div class="flex flex-col items-center p-0 w-[200px]">
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
        </div>
      </div>
      <UiIconButton
        class="rounded-3xl border-[1px]"
        @click="updateCurrentNumSolarPanel(1)"
        :disabled="currentNumSolarPanel == props.maxNumSolarPanel"
        :class="
          currentNumSolarPanel == props.maxNumSolarPanel
            ? 'border-neutral-300'
            : 'border-black'
        "
        ariaLabelButton="Ajouter un panneau"
        titleButton="Ajouter un panneau"
        heightTitle="30"
        widthTitle="200"
        positionX="-80"
        positionY="-80"
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
    <p class="font-dm-sans font-normal text-lg text-neutral-600 mx-auto pb-4">
      soit {{ currentPower }} kWc de puissance installée
    </p>
    <div class="border-b border-neutral-300 my-4"></div>
    <div class="flex py-0 px-1.5 gap-6 items-stretch">
      <div class="flex flex-col p-0 gap-2 items-start grow">
        <p class="font-dm-sans text-sm font-normal">Orientation</p>
        <p class="font-dm-sans text-base font-bold">
          {{ props.roofSurface ? props.roofSurface.orientation : 'N/A' }}
        </p>
      </div>
      <div class="flex flex-col p-0 gap-2 items-center grow">
        <p class="font-dm-sans text-sm font-normal">Inclinaison</p>
        <p class="font-dm-sans text-base font-bold">
          {{ props.roofSurface ? props.roofSurface.inclinaison : 'N/A' }}°
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

<style>
[data-title]:after {
  right: -50px;
  top: -70px;
}
</style>
