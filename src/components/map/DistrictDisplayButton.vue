<script lang="ts" setup>
import CheckBox from '@/components/simulation/CheckBox.vue'
import { createMapInteractions } from '@/services/interactionUtils'
import { useDistrictStore } from '@/stores/districtInformations'
import { useLayersStore, RENNES_LAYER } from '@/stores/layers'
import { ref, inject } from 'vue'
import type { RennesApp } from '@/services/RennesApp'

const layerStore = useLayersStore()
const rennesApp = inject('rennesApp') as RennesApp
const isCheckBoxOnError = ref(false)
const isCheckboxChecked = ref(false)
const districtStore = useDistrictStore()

async function checkboxChange(event: boolean) {
  isCheckboxChecked.value = event
  districtStore.setCheckboxChecked(event)
  if (districtStore.checkboxChecked === true) {
    await layerStore.enableLayer(RENNES_LAYER.iris)
  } else {
    await layerStore.disableLayer(RENNES_LAYER.iris)
  }
  createMapInteractions(rennesApp)
}
</script>

<template>
  <div
    class="w-fit h-12 bg-white px-4 py-3.5 flex flex-col justify-center items-start gap-3 rounded-lg shadow-lg top-4 right-20"
  >
    <CheckBox
      :isOnError="isCheckBoxOnError"
      :isChecked="isCheckboxChecked"
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
