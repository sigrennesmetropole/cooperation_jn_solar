<script setup lang="ts">
import iconExternalLink from '@/assets/icons/icon-external-link.svg'
import iconDelete from '@/assets/icons/icon-delete.svg'
</script>

<template>
  <div>
    <div class="flex flex-row mb-3">
      <h1 class="grow font-dm-sans font-bold text-xl leading-7 text-black">
        Le saviez-vous ?
      </h1>
      <button class="items-center" @click="$emit('close')">
        <img :src="iconDelete" alt="" class="w-4 self-start" />
      </button>
    </div>
    <p class="font-dm-sans font-medium text-sm text-black -tracking-[.01em]">
      Le
      <a
        href="https://metropole.rennes.fr/le-plan-climat-de-rennes-metropole"
        target="_blank"
        class="underline inline-flex items-center"
      >
        <strong> Plan Climat Air Energie Territorial (PCAET) &nbsp;</strong>
        <img :src="iconExternalLink" class="w-[10px] h-[10px] text-undeline" />
      </a>
      &nbsp;&nbsp; marque l'engagement du territoire de Rennes Metropole dans la
      lutte contre le réchauffement climatique et la transition vers un
      territoire "post-carbone".
    </p>
  </div>
</template>
