<script setup lang="ts">
import CheckBox from '@/components/simulation/CheckBox.vue'
import iconMultiplyBlack2 from '@/assets/icons/icon-multiply-black2.svg'

const props = defineProps<{
  isDisplayFilters: boolean
  filters: {
    name: string
    active: boolean
  }[]
}>()
</script>

<template>
  <div
    class="flex flex-col rounded mt-1 shadow-lg bg-white w-[402px] py-7 px-3"
    v-if="props.isDisplayFilters"
  >
    <div class="flex flex-row items-center justify-between">
      <span class="font-dm-sans font-bold text-2xl px-3">
        Paramètres de recherche
      </span>
      <button
        class="flex items-center justify-between border-2 border-black rounded p-1 cursor-pointer"
        @click="$emit('closeFilters')"
      >
        <img class="w-3 h-3" :src="iconMultiplyBlack2" />
      </button>
    </div>

    <div class="flex flex-col gap-1 ml-5 mt-3">
      <div
        class="flex flex-row"
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
          <template v-slot:text>
            <span class="font-dm-sans font-normal text-sm color-black"> </span>
          </template>
        </CheckBox>
        <label :for="filter.name">{{ filter.name }}</label>
      </div>
    </div>
  </div>
</template>
