<script setup lang="ts">
import RightFlatArrow from '@/assets/illustrations/right-flat-arrow.svg'

defineProps({
  allArea: {
    type: Number,
    required: true,
  },
  favorableArea: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-row p-4 gap-4 bg-slate-50 rounded-br-lg rounded-bl-lg">
    <div class="flex flex-col p-0">
      <h2 class="font-dm-sans font-bold text-2xl text-center">
        {{ allArea }} m&sup2;
      </h2>
      <p class="font-dm-sans font-normal text-sm text-neutral-700 text-center">
        Surface de toiture du bâtiment
      </p>
    </div>
    <img :src="RightFlatArrow" />
    <div>
      <h2 class="font-dm-sans font-bold text-2xl text-center">
        {{ favorableArea }} m&sup2;
      </h2>
      <p class="font-dm-sans font-normal text-sm text-neutral-700 text-center">
        Surface favorable au photovoltaïque
      </p>
    </div>
  </div>
</template>
