<script setup lang="ts">
import PdfFooter from '@/components/pdf/PdfFooter.vue'
import PdfHeader from '@/components/pdf/PdfHeader.vue'
import GoFurther from '@/components/results/GoFurther.vue'
</script>

<template>
  <div class="w-[90%] font-dm-sans">
    <!-- Header -->
    <PdfHeader :numPage="5" />

    <!-- Content -->
    <div
      class="font-dm-sans font-medium flex flex-col gap-8 w-[100%] h-fit bg-white rounded-xl p-6 mt-[20px]"
    >
      <GoFurther :isPdf="true"></GoFurther>
    </div>

    <!-- Footer -->
    <div>
      <PdfFooter :numPage="5"></PdfFooter>
    </div>
  </div>
</template>
