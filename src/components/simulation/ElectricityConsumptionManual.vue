<script setup lang="ts">
import { ref } from 'vue'
const consumption = ref('')

const storeConsumption = () => {
  console.log('personalConsumption', consumption.value)
  return consumption.value
}
</script>

<template>
  <div class="flex flex-col gap-[6px]">
    <p class="font-dm-sans text-sm">Votre consommation annuelle</p>
    <input
      class="border border-neutral-400 rounded h-[42px] px-3 py-[9px] text-black font-dm-sans text-medium placeholder:text-neutral-600 placeholder:text-base placeholder:font-dm-sans"
      type="text"
      placeholder="kWh"
      v-model="consumption"
      @keyup="storeConsumption"
    />
  </div>
</template>
