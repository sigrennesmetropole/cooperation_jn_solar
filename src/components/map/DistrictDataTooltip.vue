<script setup lang="ts">
import iconDelete from '../../assets/icons/icon-delete.svg'

function closeTooltip() {
  console.log('close the tooltip')
}
</script>

<template>
  <div
    class="w-[440px] h-[176px] transition-[height] absolute right-20 top-1/4 bg-white flex flex-col p-5 gap-3 rounded-lg"
  >
    <div class="flex flex-row justify-between">
      <h2 class="font-dm-sans font-bold text-2xl">Nom du quartier IRIS</h2>
      <img
        :src="iconDelete"
        alt=""
        class="w-4 self-start"
        @click="closeTooltip()"
      />
    </div>
    <div
      class="bg-slate-50 border border-slate-200 rounded-lg p-3 flex flex-row gap-4 font-dm-sans"
    >
      <div>
        <p class="font-medium text-xs">Nombre d'installation</p>
        <p class="font-bold text-3xl">114</p>
      </div>
      <div class="border border-neutral-300"></div>
      <div>
        <p class="font-medium text-xs">Production photovoltaïque</p>
        <div class="flex flex-row items-baseline font-bold">
          <p class="text-lg leading-6">
            <span class="text-3xl">11</span>.4 MWh
          </p>
        </div>
      </div>
      <div class="border border-neutral-300"></div>
      <div>
        <p class="font-medium text-xs">Consommation annuelle</p>
        <div class="flex flex-row items-baseline font-bold">
          <p class="text-lg leading-6"><span class="text-3xl">110</span> MWh</p>
        </div>
      </div>
    </div>
  </div>
</template>
