<script setup lang="ts">
import PdfFooter from '@/components/pdf/PdfFooter.vue'
import PdfHeader from '@/components/pdf/PdfHeader.vue'
import type { AutocalsolResult as AutocalsolResultType } from '@/model/autocalsol.model'
import AutocalsolResultGraph from '@/components/results/AutocalsolResultGraph.vue'
import economies from '@/assets/icons/economies.svg'

const props = defineProps<{
  autocalsolResult: AutocalsolResultType
}>()
</script>

<template>
  <div class="w-[90%] font-dm-sans">
    <!-- Header -->
    <PdfHeader :numPage="4" />

    <!-- Content -->
    <div
      class="flex flex-col gap-2 w-[100%] h-fit bg-white rounded-xl p-6 mt-[70px]"
    >
      <div class="flex flex-row items-center gap-2">
        <img :src="economies" alt="" class="w-11 h-10 mt-5" />
        <span class="font-bold text-2xl"> Votre production d'énergie </span>
      </div>

      <span class="font-bold text-xl mt-10">
        Comment réduire au maximum sa facture d'électricité ?
      </span>
      <p class="font-normal text-sm">
        Votre production solaire varie selon la course du soleil. La nuit, votre
        consommation est intégralement soutirée au réseau. Pour réduire au
        maximum votre facture d'électricité, il vous faut adapter vos habitudes
        de consommation, par exemple mettre en route vos appareils électriques
        en journée au moment de la production photovoltaïque.
      </p>

      <AutocalsolResultGraph
        :prodByHour="props.autocalsolResult.prodByHour"
        :consoByHour="props.autocalsolResult.consoByHour"
      />
    </div>

    <!-- Footer -->
    <div class="mt-[120px]">
      <PdfFooter :numPage="4"></PdfFooter>
    </div>
  </div>
</template>
