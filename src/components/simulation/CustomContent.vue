<script setup lang="ts">
import step2 from '@/assets/illustrations/Steps.jpg'
import validation from '@/assets/icons/interface-validation.svg'
import deleted from '@/assets/icons/interface-delete.svg'

const props = defineProps({
  step: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div v-if="props.step === 2">
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
</template>
