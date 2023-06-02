<script setup lang="ts">
import energySaving1 from '@/assets/illustrations/energy_saving_1.svg'
import energySaving2 from '@/assets/illustrations/energy_saving_2.svg'
import energySaving3 from '@/assets/illustrations/energy_saving_3.svg'
import { ref } from 'vue'

const informations = [
  {
    id: 1,
    img: energySaving1,
    title: 'Qu’est-ce que l’autoconsommation ?',
    description:
      'Consommer chez vous l’électricité que vous avez produite et vendre le surplus sur le réseau public, c’est ce qu’on appelle l’autoconsommation.',
  },
  {
    id: 2,
    img: energySaving2,
    title: 'Maitriser au mieux votre budget électricité.',
    description:
      'En devenant producteur d’une partie de votre électricité,  votre budget énergie est moins dépendant des évolutions de prix de votre fournisseur.',
  },
  {
    id: 3,
    img: energySaving3,
    title: 'Pour aller plus loin',
    description:
      "Vous pourrez économiser davantage d'énergie si vos appareils électriques fonctionnent au moment où les panneaux solaires produisent, c’est-à-dire au cours de la journée.",
  },
]
const currentInfo = ref(1)
</script>

<template>
  <div class="rounded-lg bg-slate-100 h-[402px] w-full px-6 py-8">
    <template v-for="info in informations" :key="info.id">
      <div
        v-if="info.id === currentInfo"
        class="flex flex-col justify-center items-center"
      >
        <img class="w-[354px] h-[160px]" :src="info.img" alt="" />
        <span class="font-dm-sans font-bold text-base mt-4">
          {{ info.title }}
        </span>
        <span
          class="font-dm-sans font-normal text-sm mt-2 text-center h-[80px]"
        >
          {{ info.description }}
        </span>
      </div>
    </template>
    <div class="flex flex-row gap-3 mt-4 justify-center items-center">
      <div
        v-for="info in informations"
        tabindex="0"
        :key="info.id"
        class="w-6 h-6 rounded-full flex justify-center items-center cursor-pointer"
        :class="
          info.id === currentInfo ? 'bg-slate-600' : 'border border-slate-300'
        "
        @click="currentInfo = info.id"
        @keydown.enter="currentInfo = info.id"
      >
        <span
          class="font-dm-sans font-bold text-xs"
          :class="info.id === currentInfo ? 'text-white' : 'text-slate-500'"
        >
          {{ info.id }}
        </span>
      </div>
    </div>
  </div>
</template>
