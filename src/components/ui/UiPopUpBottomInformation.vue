<script lang="ts" setup>
import iconMultiplyAmber from '@/assets/icons/icon-multiply-amber.svg'
import { computed, ref } from 'vue'

const displayPopup = ref(true)

defineProps({
  text: {
    type: String,
  },
})

const classPopup = computed(() => {
  return displayPopup.value ? 'flex flex-row' : 'hidden'
})
</script>

<template>
  <div :class="classPopup" class="px-4 py-3 gap-3 bg-white rounded">
    <div class="flex flex-row items-center justify-center">
      <span class="font-dm-sans font-normal text-sm color-black">
        {{ text }}
      </span>
    </div>

    <button
      class="flex flex-row items-center justify-center cursor-pointer ml-auto"
      @click="displayPopup = false"
    >
      <img :src="iconMultiplyAmber" class="w-4 h-4" />
    </button>
  </div>
</template>
