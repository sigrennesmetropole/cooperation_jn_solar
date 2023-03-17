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
    <div class="flex flex-row">
      <input
        class="border border-neutral-400 rounded h-[42px] px-3 py-[9px] text-black font-dm-sans text-medium placeholder:text-neutral-600 placeholder:text-base placeholder:font-dm-sans w-full"
        type="number"
        placeholder="kWh"
        v-model="consumption"
        @keyup="storeConsumption"
      />
      <div
        append-unit="kWh"
        class="text-base font-dm-sans text-medium relative after:content-[attr(append-unit)] after:absolute after:right-2 after:top-2"
      ></div>
    </div>
  </div>
</template>
