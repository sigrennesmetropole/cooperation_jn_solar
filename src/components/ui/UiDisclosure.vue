<script lang="ts" setup>
import iconArrowDown from '@/assets/icons/arrow-down.svg'
import iconArrowUp from '@/assets/icons/arrow-up.svg'
import { ref } from 'vue'

const displayContents = ref(false)
</script>

<template>
  <div
    class="flex flex-col bg-slate-100 border border-slate-100 px-4 rounded-lg cursor-pointer"
    @keydown.enter="displayContents = !displayContents"
    @click="displayContents = !displayContents"
  >
    <div class="flex flex-row">
      <div class="flex flex-row items-center justify-center h-14">
        <slot name="title"></slot>
      </div>

      <div
        class="ml-auto flex flex-row items-center justify-center w-11 h-full"
        tabindex="0"
      >
        <img v-if="!displayContents" :src="iconArrowDown" class="w-4 h-4" />
        <img v-else :src="iconArrowUp" class="w-4 h-4" />
      </div>
    </div>
    <div class="mb-2 flex flex-row" v-if="displayContents">
      <slot name="contents"></slot>
    </div>
  </div>
</template>
