<script setup lang="ts">
import economies from '@/assets/icons/economies.svg'
import AutocalsolResultGlobal from '@/components/results/AutocalsolResultGlobal.vue'
import AutocalsolResultGraph from '@/components/results/AutocalsolResultGraph.vue'
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

    <span class="font-bold text-xl mt-10">
      Comment réduire au maximum sa facture d'électricité ?
    </span>
    <p class="font-normal text-sm">
      Votre production solaire varie selon la course du soleil. La nuit, votre
      consommation est intégralement soutirée au réseau. Pour réduire au maximum
      votre facture d'électricité, il vous faut adapter vos habitudes de
      consommation, par exemple mettre en route vos appareils électriques en
      journée au moment de la production photovoltaïque.
    </p>
    <AutocalsolResultGraph />
  </div>
</template>
