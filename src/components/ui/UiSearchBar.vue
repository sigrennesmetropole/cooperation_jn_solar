<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import iconTarget from '@/assets/icons/target.svg'
import iconMagnifyingGlass from '@/assets/icons/magnifying-glass.svg'
import iconMultiply from '@/assets/icons/icon-multiply.svg'

import { useAddressStore } from '@/stores/address'
import { useRouter } from 'vue-router'

const search = ref('')
const adressStore = useAddressStore()
const router = useRouter()

onMounted(() => {
  if (adressStore.address !== '') {
    search.value = adressStore.address
  }
})

function clickSearch() {
  adressStore.setAddress(search.value)
  router.push('/roof-selection')
}

function emptySearch() {
  search.value = ''
  adressStore.setAddress('')
  router.push('/map-pcaet')
}
</script>

<template>
  <div
    class="flex flex-row items-center h-11 shadow-lg rounded p-0 bg-white w-[402px]"
  >
    <div class="flex flex-row items-center justify-center w-10 h-full">
      <img :src="iconTarget" class="w-4 h-4" />
    </div>
    <input
      class="w-full h-full rounded-l-none rounded-r-lg p-2 text-base font-medium font-dm-sans placeholder-black"
      type="text"
      placeholder="Entrez votre adresse ici"
      v-model="search"
    />
    <div
      class="flex flex-row items-center justify-center w-11 h-full cursor-pointer"
      @click="emptySearch()"
      v-if="search !== ''"
    >
      <img :src="iconMultiply" class="w-4 h-4" />
    </div>
    <div
      class="flex flex-row items-center justify-center w-11 h-full cursor-pointer border-l border-neutral-200"
      @click="clickSearch"
    >
      <img :src="iconMagnifyingGlass" class="w-4 h-4" />
    </div>
  </div>
</template>
