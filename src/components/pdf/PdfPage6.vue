<script setup lang="ts">
import PdfFooter from '@/components/pdf/PdfFooter.vue'
import PdfHeader from '@/components/pdf/PdfHeader.vue'
import SolarCoop from '@/components/results/SolarCoop.vue'
import EnergiesRennes from '@/components/results/EnergiesRennes.vue'
</script>

<template>
  <div class="w-[90%] font-dm-sans">
    <!-- Header -->
    <PdfHeader />

    <!-- Content -->
    <div
      class="font-dm-sans font-medium flex flex-col gap-8 w-[100%] bg-white rounded-xl p-6 mt-[100px]"
    >
      <SolarCoop :isPdf="true"></SolarCoop>
      <EnergiesRennes :isPdf="true"></EnergiesRennes>
    </div>

    <!-- Footer -->
    <div class="mt-[85px] mb-[20px]">
      <PdfFooter :numPage="6"></PdfFooter>
    </div>
  </div>
</template>
