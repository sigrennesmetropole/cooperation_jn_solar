<script setup lang="ts">
import iconExternalLink from '@/assets/icons/icon-external-link.svg'
</script>

<template>
  <div>
    <h1 class="mt-5 mb-3 font-dm-sans font-bold text-xl leading-7 text-black">
      Le saviez-vous ?
    </h1>
    <p class="font-dm-sans font-normal text-sm text-black">
      Le
      <a
        href="https://metropole.rennes.fr/le-plan-climat-de-rennes-metropole"
        target="_blank"
        class="underline inline-flex items-center"
      >
        <strong> Plan Climat Air Energie Territorial (PCAET) &nbsp;</strong>
        <img :src="iconExternalLink" class="w-[10px] h-[10px] text-undeline" />
      </a>

      marque l'engagement du territoire de Rennes Metropole dans la lutte contre
      le réchauffement climatique et la transition vers un territoire
      "post-carbone".
    </p>
  </div>
</template>
