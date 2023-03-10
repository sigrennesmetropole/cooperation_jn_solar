<script lang="ts" setup>
import iconMultiplyAmber from '@/assets/icons/icon-multiply-amber.svg'
import { computed, onMounted, ref } from 'vue'

const displayPopup = ref(true)

const props = defineProps({
  text: {
    type: String,
  },

  timer: {
    type: Number,
    default: 0,
  },
})

const classPopup = computed(() => {
  return displayPopup.value ? 'flex flex-row' : 'hidden'
})

const animation = computed(() => {
  return `animation-duration: ${props.timer}ms; animation-fill-mode: forwards; animation-timing-function: linear; animation-name: loading; width: 0`
})

onMounted(() => {
  if (props.timer > 0) {
    setTimeout(() => (displayPopup.value = false), props.timer)
  }
})
</script>
<style>
@keyframes loading {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
<template>
  <div :class="classPopup" class="pt-0 gap-3 bg-white rounded max-w-lg">
    <div class="flex flex-col">
      <div v-if="props.timer > 0" class="h-1 w-full bg-white">
        <div class="h-1 bg-red-400" :style="animation"></div>
      </div>
      <div class="flex flex-row items-center mx-4 my-3 justify-center gap-2">
        <span class="font-dm-sans font-normal text-sm color-black">
          {{ text }}
        </span>
        <button
          class="items-center justify-center cursor-pointer ml-auto"
          @click="displayPopup = false"
        >
          <img :src="iconMultiplyAmber" class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>
