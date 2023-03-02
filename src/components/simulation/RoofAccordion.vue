<script setup lang="ts"></script>

<template>
  <div
    class="box-border flex flex-col justify-center items-start py-4 px-3 gap-3 bg-slate-50 border-[1px] border-slate-600 rounded-lg"
  >
    <div class="flex flex-row items-center p-0 gap-2">
      <div class="flex flex-row items-center py-0 px-2 gap-3">
        <div class="flex flex-row items-center p-0 gap-3"></div>
        <span>radio button</span>
        <span>Up arrow</span>
      </div>
    </div>
    <div class="flex flex-col items-start p-0 bg-white">
      <div
        class="box-border flex flex-col items-start p-5 gap-4 border-[1px] border-slate-200 rounded-lg"
      >
        <div class="flex flex-row items-start p-0 gap-4">
          <div class="flex flex-col items-start p-0">
            <h3 class="font-dm-sans font-bold text-[28px] leading-7">46 m2</h3>
            <p class="font-dm-sans text-sm font-medium text-neutral-900">
              de surface favorable
            </p>
            <p class="font-dm-sans text-sm font-normal text-neutral-600">
              sur 90m2
            </p>
          </div>
          <div>icon tooltip</div>
        </div>
        <div>line</div>
        <div class="flex flex-row items-start py-0 px-1.5 gap-6">
          <div class="flex flex-row justify-between items-center p-0 gap-2">
            <p class="font-dm-sans text-sm font-normal">Orientation</p>
            <p class="font-dm-sans font-bold text-base">Sud</p>
          </div>
          <div class="flex flex-row justify-between items-center p-0 gap-2">
            <p class="font-dm-sans text-sm font-normal">Inclinaison</p>
            <p class="font-dm-sans font-bold text-base">47,9°</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
