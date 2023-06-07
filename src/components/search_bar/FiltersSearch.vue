<script setup lang="ts">
import CheckBox from '@/components/simulation/CheckBox.vue'
import deleteSquare from '@/assets/icons/delete-square.svg'
import { ref } from 'vue'
import type { Ref } from 'vue'

const props = defineProps<{
  isDisplayFilters: boolean
  filters: {
    name: string
    active: boolean
  }[]
}>()

const buttonIsFocus: Ref<boolean> = ref(false)
</script>

<template>
  <div
    class="flex flex-col rounded-lg mt-1 shadow-lg bg-white w-[402px] px-6 py-6"
    v-if="props.isDisplayFilters"
  >
    <div class="flex flex-row items-start justify-between">
      <span class="font-dm-sans font-bold text-2xl mb-6">
        Paramètres de recherche
      </span>
      <button
        class="flex items-center justify-between rounded p-1 cursor-pointer"
        :class="{
          'bg-neutral-600': buttonIsFocus,
        }"
        @click="$emit('closeFilters')"
        @keyup.enter="$emit('closeFilters')"
        @focus="buttonIsFocus = true"
        @blur="buttonIsFocus = false"
      >
        <img class="w-4 h-4" :src="deleteSquare" />
      </button>
    </div>

    <div class="flex flex-col gap-1 ml-4">
      <div
        class="flex flex-row items-end font-dm-sans font-normal text-sm color-black"
        v-for="(filter, index) in props.filters"
        :key="index"
      >
        <CheckBox
          :isOnError="false"
          :isChecked="filter.active"
          @checkBoxChange="
            $emit('checkBoxChange', {
              value: $event,
              filter: filter,
              index: index,
            })
          "
        >
          <template v-slot:text> </template>
        </CheckBox>
        <label :for="filter.name">{{ filter.name }}</label>
      </div>
    </div>
  </div>
</template>
