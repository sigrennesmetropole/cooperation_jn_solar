<script setup lang="ts">
import PdfFooter from '@/components/pdf/PdfFooter.vue'
import PdfHeader from '@/components/pdf/PdfHeader.vue'
import AutocalsolResultGlobal from '@/components/results/AutocalsolResultGlobal.vue'
import type { AutocalsolResult as AutocalsolResultType } from '@/model/autocalsol.model'
import economies from '@/assets/icons/economies.svg'
import NeighbourhoodData from '@/components/results/NeighbourhoodData.vue'

const props = defineProps<{
  autocalsolResult: AutocalsolResultType
}>()
</script>

<template>
  <div class="w-[90%] font-dm-sans">
    <!-- Header -->
    <PdfHeader :numPage="3" />

    <!-- Content -->
    <div
      class="flex flex-col w-[100%] gap-2 mt-[100px] h-fit bg-white rounded-xl p-6"
    >
      <div class="flex flex-row items-center gap-2">
        <img :src="economies" alt="" class="w-11 h-10 mt-5" />
        <span class="font-bold text-2xl"> Votre production d'énergie </span>
      </div>

      <AutocalsolResultGlobal
        :injected="props.autocalsolResult.consoAnnualInjected"
        :autoConsumed="props.autocalsolResult.consoAnnualAutoConsumed"
        :production="
          props.autocalsolResult.consoAnnualInjected +
          props.autocalsolResult.consoAnnualAutoConsumed
        "
        :isPdf="true"
      />
      <NeighbourhoodData class="mt-3"></NeighbourhoodData>
    </div>

    <!-- Footer -->
    <div class="mt-[190px]">
      <PdfFooter :numPage="3"></PdfFooter>
    </div>
  </div>
</template>
