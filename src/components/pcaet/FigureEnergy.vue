<script setup lang="ts">
import FigureKeyNumber from './FigureKeyNumber.vue'
</script>

<template>
  <div class="flex flex-col p-0 gap-4">
    <div
      class="flex flex-col p-6 gap-6 bg-slate-50 border-slate-100 border-[1px] rounded-lg"
    >
      <FigureKeyNumber></FigureKeyNumber>
      <FigureKeyNumber></FigureKeyNumber>
      <FigureKeyNumber></FigureKeyNumber>
    </div>
  </div>
</template>
