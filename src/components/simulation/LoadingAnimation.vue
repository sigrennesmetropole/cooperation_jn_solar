<script setup lang="ts">
import Animation from '../../assets/illustrations/loading_L.gif'
</script>

<template>
  <div class="flex flex-col items-center gap-6">
    <img :src="Animation" alt="" class="w-[354px] h-[180px]" />
    <div class="flex flex-col gap-2">
      <h2 class="font-dm-sans font-bold text-2xl text-center">
        Le calcul est en cours...
      </h2>
      <p class="font-dm-sans font-normal text-base text-center">
        et fait appel à différents services tiers.<br />Cela peut prendre
        jusqu'à 30 secondes.
      </p>
    </div>
  </div>
</template>
