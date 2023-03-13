<script setup lang="ts">
import UiRennesLogo from '@/components/ui/UiRennesLogo.vue'
import LegalLink from '@/components/home/LegalLink.vue'
</script>
<template>
  <footer
    class="flex flex-col p-2 gap-4 font-dm-sans divide-y divide-neutral-200"
  >
    <div class="flex p-0 gap-6">
      <UiRennesLogo class="w-36 h-7"></UiRennesLogo>
      <div class="font-normal text-xs">
        Visualisez les données thématiques de notre territoire sur sa maquette
        3D.
      </div>
    </div>
    <LegalLink> </LegalLink>
  </footer>
</template>
