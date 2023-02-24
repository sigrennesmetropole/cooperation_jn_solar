<script lang="ts" setup></script>

<template>
  <div class="flex shadow-sm min-h-screen">
    <div
      class="px-6 py-8 bg-white flex flex-col gap-8 w-[450px] max-h-screen overflow-y-auto scrollbar-hide"
    >
      <slot></slot>
    </div>
  </div>
</template>
