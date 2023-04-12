<script lang="ts" setup>
import CheckBox from '@/components/simulation/CheckBox.vue'
import router from '@/router'
import { ref } from 'vue'

const isCheckBoxOnError = ref(false)
const isCheckboxChecked = ref(false)

function checkboxChange(event: boolean) {
  isCheckboxChecked.value = event
  if (isCheckboxChecked.value === true) {
    router.push('/districts')
  }
  if (isCheckboxChecked.value === false) {
    router.back()
  }
}
</script>

<template>
  <div
    class="w-fit h-12 bg-white px-4 py-3.5 flex flex-col justify-center items-start gap-3 rounded-lg shadow-lg top-4 right-20"
  >
    <CheckBox
      :isOnError="isCheckBoxOnError"
      @checkBoxChange="checkboxChange($event)"
    >
      <template v-slot:text>
        <p class="font-dm-sans text-sm text-slate-900 mt-[3px]">
          Les données du territoire
        </p>
      </template>
    </CheckBox>
  </div>
</template>

<style>
input:checked + svg {
  display: block;
}
</style>
