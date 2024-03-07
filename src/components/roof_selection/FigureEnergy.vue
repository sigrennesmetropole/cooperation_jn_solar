<script setup lang="ts">
import FigureKeyNumber from '@/components/roof_selection/FigureKeyNumber.vue'
import HourGlass from '@/assets/illustrations/hour-glass.svg'
import SolarPanel from '@/assets/illustrations/solar-panel.svg'
import HousePlant from '@/assets/illustrations/house-plant.svg'
import { useConfigStore } from '@/stores/config'

const configStore = useConfigStore()
</script>

<template>
  <div class="flex flex-col p-0 gap-4">
    <div
      class="flex flex-col p-6 gap-6 bg-white border-slate-100 border-[1px] rounded-lg"
    >
      <FigureKeyNumber>
        <template v-slot:image>
          <img class="w-32 h-16 max-w-none" :src="HourGlass" alt="" />
        </template>
        <template v-slot:text>
          <p class="font-dm-sans text-xs font-bold">À l’horizon</p>
          <p class="font-dm-sans text-[44px] leading-10 font-bold">
            {{ configStore.config?.solar.statistics.diduknow_year }}
          </p>
        </template>
      </FigureKeyNumber>
      <FigureKeyNumber>
        <template v-slot:image>
          <img class="w-32 h-16 max-w-none" :src="HousePlant" alt="" />
        </template>
        <template v-slot:text>
          <p class="font-dm-sans text-3xl font-bold">
            {{ configStore.config?.solar.statistics.diduknow_more_energy }}x
          </p>
          <p class="font-dm-sans text-xs font-bold">
            plus d’énergies renouvelables
          </p>
        </template>
      </FigureKeyNumber>
      <FigureKeyNumber>
        <template v-slot:image>
          <img class="w-32 h-16 max-w-none" :src="SolarPanel" alt="" />
        </template>
        <template v-slot:text>
          <p class="font-dm-sans text-3xl font-bold">
            {{ configStore.config?.solar.statistics.diduknow_more_power }}x
          </p>
          <p class="font-dm-sans text-xs font-bold">
            plus de puissance photovoltaïque
          </p>
        </template>
      </FigureKeyNumber>
    </div>
  </div>
</template>
