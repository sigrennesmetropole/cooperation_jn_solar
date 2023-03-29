<script setup lang="ts">
import ConsumptionEmailResult from '@/components/simulation/ConsumptionEmailResult.vue'
import LoadingAnimation from '@/components/simulation/LoadingAnimation.vue'
</script>

<template>
  <div
    class="flex flex-col gap-12 w-[640px] h-fit bg-white rounded-xl p-8 mx-auto mt-[104px] shadow-md"
  >
    <LoadingAnimation></LoadingAnimation>
    <ConsumptionEmailResult></ConsumptionEmailResult>
  </div>
</template>
