<script setup lang="ts">
import PhotoVoltaique from '@/components/results/PhotoVoltaique.vue'
import LabelsProfitability from '@/components/results/LabelsProfitability.vue'
import qualiLabels from '@/assets/illustrations/quali_labels.svg'
import qualitenr from '@/assets/illustrations/qualitEnR.png'
import qualibat from '@/assets/illustrations/qualibat.avif'
import qualifelec from '@/assets/illustrations/qualifelec.png'
import profitability from '@/assets/illustrations/profitability.svg'

const props = defineProps<{
  isPdf: boolean
}>()
</script>

<template>
  <div
    class="flex flex-col gap-6 w-[100%] h-fit bg-white rounded-xl py-6 px-8 mx-auto shadow-md"
  >
    <h2 class="font-dm-sans font-bold text-2xl">
      Plus d'informations pour concrétiser votre projet
    </h2>
    <PhotoVoltaique :isPdf="props.isPdf"></PhotoVoltaique>
    <div class="flex flex-row gap-8">
      <LabelsProfitability
        link="https://www.photovoltaique.info/fr/preparer-un-projet/quelles-demarches-realiser/choisir-son-installateur/#signes_de_qualite"
        :isPdf="props.isPdf"
      >
        <template v-slot:img>
          <img :src="qualiLabels" />
        </template>
        <template v-slot:title>
          <h2 class="font-dm-sans text-2xl font-bold">
            3 labels de qualification pour vous guider dans le choix de votre
            installateur
          </h2>
        </template>
        <template v-slot:icon>
          <div
            class="py-[18px] px-6 flex flex-row justify-between w-[100%] bg-white rounded-xl"
          >
            <img :src="qualibat" alt="" class="h-10 w-10" />
            <img :src="qualitenr" alt="" class="h-10 w-[79px]" />
            <img :src="qualifelec" alt="" class="h-10 w-[34px]" />
          </div>
        </template>
      </LabelsProfitability>
      <LabelsProfitability
        link="https://www.photovoltaique.info/fr/preparer-un-projet/quelles-demarches-realiser/choisir-son-modele-economique/"
        :isPdf="props.isPdf"
      >
        <template v-slot:img>
          <img :src="profitability" />
        </template>
        <template v-slot:title>
          <h2 class="font-dm-sans text-2xl font-bold">
            Connaitre des ordres de grandeur de coûts et de rentabilité d'un
            projet photovoltaïque
          </h2>
        </template>
        <template v-slot:icon>
          <div class="h-full"></div>
        </template>
      </LabelsProfitability>
    </div>
  </div>
</template>
