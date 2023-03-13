<script setup lang="ts">
import step2 from '@/assets/illustrations/Steps.jpg'
import validation from '@/assets/icons/interface-validation.svg'
import deleted from '@/assets/icons/interface-delete.svg'
import economies from '@/assets/icons/economies.svg'
import { useSimulationStore } from '@/stores/simulations'

const simulationStore = useSimulationStore()

const props = defineProps({
  step: {
    type: Number,
    required: true,
  },
  subStep: {
    type: Number,
    required: true,
  },
})

function goToThirdStep() {
  simulationStore.setCurrentSubStep(1)
  simulationStore.goToNextStep()
}
</script>

<template>
  <div v-if="props.step === 2 && props.subStep === 1">
    <img class="w-full" :src="step2" alt="" />
    <div class="mt-8">
      <div class="flex flex-row items-center mb-2">
        <div
          class="flex flex-row justify-center items-center bg-lime-200 rounded-full w-2.5 h-2.5 mr-2"
        >
          <img class="w-1 h-1" :src="validation" alt="" />
        </div>
        <p class="font-dm-sans text-sm font-normal">
          Les zones colorées peuvent accueillir des panneaux.
        </p>
      </div>
      <div class="flex flex-row items-center">
        <div
          class="flex flex-row justify-center items-center bg-rose-200 rounded-full w-2.5 h-2.5 mr-2"
        >
          <img class="w-1 h-1" :src="deleted" alt="" />
        </div>
        <p class="font-dm-sans text-sm font-normal">
          Les zones barrées ne peuvent pas en accueillir.
        </p>
      </div>
    </div>
  </div>
  <div v-if="props.step === 2 && props.subStep === 2">
    <div></div>
    <div
      class="flex flex-col justify-center text-center py-6 px-6 gap-4 box-border border-[1px] border-slate-600 rounded-lg"
    >
      <div class="gap-px">
        <p class="font-normal text-xs font-dm-sans text-neutral-500">Étape 3</p>
        <img
          class="w-[88px] h-[88px] max-w-none mx-auto"
          :src="economies"
          alt=""
        />
        <h4 class="font-dm-sans text-[18px] leading-6 font-bold">
          Quelles économies d'énergie <br />grâce à cette installation ?
        </h4>
      </div>
      <button
        class="bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center text-white"
        @click="goToThirdStep()"
      >
        <p class="font-semibold text-base font-dm-sans">
          Calculer mes économies d'énergie
        </p>
      </button>
    </div>
  </div>
</template>
