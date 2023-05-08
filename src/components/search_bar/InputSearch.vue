<script setup lang="ts">
import { ref } from 'vue'
import iconMagnifyingGlass from '@/assets/icons/magnifying-glass.svg'
import iconMultiply from '@/assets/icons/icon-multiply.svg'
import iconFilterSearchBar from '@/assets/icons/icon-filter-searchbar.svg'
import { useAddressStore } from '@/stores/address'

defineProps({
  isDisplayAutocompletion: {
    type: Boolean,
    default: false,
  },
  isEmptySearch: {
    type: Boolean,
    default: false,
  },
  sizeBeginSearch: {
    type: Number,
  },
})

const search = ref('')
const emit = defineEmits(['emptySearch', 'toggleFilters', 'inputKeyUp'])
const addressStore = useAddressStore()

function emptySearch() {
  search.value = ''
  emit('emptySearch')
}

addressStore.$subscribe(() => {
  search.value = addressStore.address
})
</script>

<template>
  <div
    class="flex flex-row items-center h-11 shadow-lg rounded-lg p-0 mb-0 bg-white w-[402px]"
    :class="
      isDisplayAutocompletion || isEmptySearch ? 'border border-black' : ''
    "
  >
    <div class="flex flex-row items-center justify-center w-8 h-full ml-2">
      <img :src="iconMagnifyingGlass" class="w-4 h-4" />
    </div>
    <input
      id="autocomplete-input"
      class="w-full h-full border-none text-base font-medium font-dm-sans placeholder-black focus:ring-0 !border-black"
      type="text"
      placeholder="Entrez votre adresse ici"
      v-model="addressStore.address"
      @keyup="$emit('inputKeyUp', search)"
    />
    <button
      class="flex flex-row items-center justify-center w-11 h-full cursor-pointer"
      @click="emptySearch()"
      v-if="search !== ''"
      id="button-empty-search"
    >
      <img :src="iconMultiply" class="w-4 h-4" />
    </button>
    <button
      class="flex flex-row items-center justify-center w-11 h-full cursor-pointer border-l border-neutral-200"
      @click="$emit('toggleFilters')"
      id="toggle-filters"
    >
      <img :src="iconFilterSearchBar" class="w-4 h-4" />
    </button>
  </div>
</template>
