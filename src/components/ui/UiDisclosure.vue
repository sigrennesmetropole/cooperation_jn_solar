<script lang="ts" setup>
import iconArrowDown from '@/assets/icons/arrow-down.svg'
import iconArrowUp from '@/assets/icons/arrow-up.svg'
import { ref } from 'vue'

const displayContents = ref(false)
</script>

<template>
  <div class="flex flex-col bg-slate-100 border border-slate-100">
    <div class="flex flex-row">
      <div class="flex flex-row items-center justify-center ml-4 h-14">
        <slot name="title"></slot>
      </div>

      <div
        class="ml-auto flex flex-row items-center justify-center w-11 h-full cursor-pointer"
        @click="displayContents = !displayContents"
      >
        <img v-if="!displayContents" :src="iconArrowDown" class="w-4 h-4" />
        <img v-else :src="iconArrowUp" class="w-4 h-4" />
      </div>
    </div>
    <div class="ml-4 mb-2 flex flex-row" v-if="displayContents">
      <slot name="contents"></slot>
    </div>
  </div>
</template>
