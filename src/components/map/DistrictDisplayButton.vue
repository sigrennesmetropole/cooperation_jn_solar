<script lang="ts" setup>
import CheckBox from '@/components/simulation/CheckBox.vue'
import { useDistrictStore } from '@/stores/districtInformations'
import { ref } from 'vue'

const isCheckBoxOnError = ref(false)
const isCheckboxChecked = ref(false)
const districtStore = useDistrictStore()

districtStore.$subscribe(async () => {
  isCheckboxChecked.value = districtStore.checkboxChecked
})
</script>

<template>
  <div
    class="w-fit h-12 bg-white px-4 py-3.5 flex flex-col justify-center items-start gap-3 rounded-lg shadow-lg top-4 right-20"
  >
    <CheckBox
      :isOnError="isCheckBoxOnError"
      :isChecked="isCheckboxChecked"
      @checkBoxChange="districtStore.setCheckboxChecked($event)"
    >
      <template v-slot:text>
        <p class="font-dm-sans text-sm text-slate-900 mt-[3px]">
          Données sur le territoire
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
