<script lang="ts" setup></script>

<template>
  <div
    class="flex flex-col items-center justify-center border border-slate-600 rounded-lg px-6"
  >
    <slot name="nameOfStep"></slot>
    <slot name="image"></slot>
    <slot name="text"></slot>
    <button
      class="mt-4 mb-6 bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center w-full"
      @click="$emit('buttonBoxAction')"
    >
      <slot name="buttonContent"></slot>
    </button>
  </div>
</template>
