<script setup lang="ts">
import { useRouter } from 'vue-router'
import UiReturnButton from '@/components/ui/UiReturnButton.vue'
import iconChevronLeft from '@/assets/icons/chevron-left.svg'

const router = useRouter()

const props = defineProps<{
  urlBack: string
}>()
</script>

<template>
  <div
    class="absolute top-0 left-0 flex flex-row items-center justify-between px-9 gap-12 w-screen h-[72px] bg-white shadow"
  >
    <div class="flex flex-row items-center">
      <UiReturnButton
        class="shadow-md rounded-lg p-2 flex gap-2.5 shrink-0 grow-0"
        @click="router.push(props.urlBack)"
      >
        <img :src="iconChevronLeft" />
      </UiReturnButton>
      <slot name="title-img"></slot>
    </div>
    <slot name="mid-content"></slot>
    <button
      @click="router.push('/home')"
      class="bg-white border border-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
    >
      <slot name="button-content"></slot>
    </button>
  </div>
</template>
