<script setup lang="ts">
import economies from '@/assets/icons/economies.svg'
import AutocalsolResultGlobal from '@/components/results/AutocalsolResultGlobal.vue'
import NeighbourhoodData from '@/components/results/NeighbourhoodData.vue'
import type { AutocalsolResult } from '@/model/autocalsol.model'

const props = defineProps<{ autocalsolResult: AutocalsolResult }>()
</script>

<template>
  <div
    class="flex flex-col gap-2 w-[100%] h-fit bg-white rounded-xl p-6 shadow-md"
  >
    <div class="flex flex-row items-center gap-2">
      <img :src="economies" alt="" class="w-11 h-10" />
      <span class="font-bold text-2xl"> Votre production d'énergie </span>
    </div>

    <AutocalsolResultGlobal
      :injected="props.autocalsolResult.consoAnnualInjected"
      :autoConsumed="props.autocalsolResult.consoAnnualAutoConsumed"
      :production="
        props.autocalsolResult.consoAnnualInjected +
        props.autocalsolResult.consoAnnualAutoConsumed
      "
    />
    <NeighbourhoodData></NeighbourhoodData>
  </div>
</template>
