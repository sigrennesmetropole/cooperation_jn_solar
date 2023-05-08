<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import type { Ref } from 'vue'

const props = defineProps<{
  isOnError: boolean
  isChecked: boolean
}>()

const emit = defineEmits<{
  (e: 'checkBoxChange', status: boolean): void
}>()

const checked = ref(props.isChecked)
const isFocus: Ref<boolean> = ref(false)

watchEffect(() => {
  checked.value = props.isChecked
})

function statusChange() {
  checked.value = !checked.value

  emit('checkBoxChange', checked.value)
}

const borderCheckbox = computed(() => {
  if (isFocus.value) {
    return 'border-2 border-black'
  }
  if (props.isOnError && !checked.value) {
    return 'border-red-600'
  }
  if (checked.value) {
    return 'border-slate-900'
  }
  return 'border-slate-400'
})
</script>

<template>
  <div class="flex p-0 gap-3 items-top">
    <div
      class="shadow-sm w-5 h-5 rounded border flex justify-center items-center mt-[3px]"
      :class="borderCheckbox"
      @click="statusChange()"
      @keyup.enter="statusChange()"
    >
      <input
        type="checkbox"
        class="opacity-0 absolute"
        @focus="isFocus = true"
        @blur="isFocus = false"
      />
      <svg
        class="w-3 h-3 pointer-events-none stroke-slate-900 stroke-2"
        viewBox="0 0 14 14"
        :style="checked ? '' : 'display: none;'"
      >
        <path
          d="M0.5 8.5498L3.23 12.0598C3.32212 12.1795 3.44016 12.2768 3.57525 12.3443C3.71034 12.4119 3.85898 12.4479 4.01 12.4498C4.15859 12.4515 4.3057 12.4201 4.44063 12.3578C4.57555 12.2956 4.6949 12.204 4.79 12.0898L13.5 1.5498"
          fill="none"
        />
      </svg>
    </div>
    <div class="flex w-fit">
      <slot name="text"></slot>
    </div>
  </div>
</template>
