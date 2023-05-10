<script setup lang="ts">
import PdfDivider from '@/components/pdf/PdfDivider.vue'
import PdfFooter from '@/components/pdf/PdfFooter.vue'
import iconSunPdf from '@/assets/icons/icon-sun-pdf.svg'
import homePageImg from '@/assets/illustrations/pdf-homepage-img.svg'
</script>

<template>
  <div class="w-[90%] font-dm-sans">
    <!-- Header -->
    <div class="flex flex-row mt-[45px]">
      <div class="flex flex-col">
        <PdfDivider />
        <span class="mt-5 font-bold text-2xl"> Cadastre solaire </span>
        <span class="mt-2 font-medium text-sm">
          Projetez-vous en tant que producteur d’électricité grâce à l’énergie
          solaire photovoltaïque
        </span>
      </div>
      <div class="ml-auto">
        <img :src="iconSunPdf" alt="" />
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-col text-center mt-[150px]">
      <span class="font-bold text-4xl">
        Votre simulation
        <br />d’installation photovoltaïque
      </span>
      <img :src="homePageImg" alt="" class="mt-11" />
    </div>

    <!-- Footer -->
    <div class="mt-[230px]">
      <PdfFooter :numPage="1"></PdfFooter>
    </div>
  </div>
</template>
