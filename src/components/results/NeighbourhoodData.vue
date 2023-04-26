<script setup lang="ts">
import warning from '@/assets/icons/chat-message-warning.svg'
</script>

<template>
  <div
    class="flex flex-row px-4 py-[19px] gap-3 bg-amber-50 border border-amber-200 font-dm-sans text-amber-900 rounded-lg font normal text-sm"
  >
    <img :src="warning" class="w-5 h-5 my-auto" />
    <p>
      Cette installation contribuerait à la transition énergétique de votre
      quartier/commune qui dispose de <span class="font-bold">177</span> sites
      de production photovoltaïque représentant annuellement
      <span class="font-bold">1198 MWh.</span>
    </p>
  </div>
</template>
