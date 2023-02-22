<script lang="ts" setup>
import { ref, inject, onMounted } from 'vue'
import type { Ref } from 'vue'
import iconTarget from '@/assets/icons/target.svg'
import iconMagnifyingGlass from '@/assets/icons/magnifying-glass.svg'
import { apiRvaService } from '@/services/api-rva'
import { createNewViewpointFromAddress } from '@/services/address'
import type { RennesApp } from '@/services/RennesApp'
import type { Address } from '@/model/address.model'
import iconMultiply from '@/assets/icons/icon-multiply.svg'
import { useAddressStore } from '@/stores/address'
import { useRouter } from 'vue-router'

const search = ref('')
const adressStore = useAddressStore()
const router = useRouter()
const autocompletion: Ref<Address[]> = ref([])

const rennesApp = inject('rennesApp') as RennesApp

const searchAddress = async () => {
  if (search.value.length < 5) return
  let data = await apiRvaService.fetchAddress(search.value)
  let answer = data.rva.answer
  if (answer.status.code != 1 || answer.status.message != 'ok') {
    return
  }

  autocompletion.value = answer.addresses.splice(0, 5)
}

const goToAddress = (item: Address) => {
  search.value = item.addr3
  autocompletion.value = []
  let x: number = item.x as unknown as number
  let y: number = item.y as unknown as number
  createNewViewpointFromAddress(rennesApp, [x, y])
}

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
      @keyup="searchAddress"
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

  <div class="flex flex-row items-centerrounded p-0 shadow-lg rounded">
    <ul class="cursor-pointer">
      <li
        v-for="item in autocompletion"
        :key="item.idaddress"
        @click="goToAddress(item)"
      >
        {{ item.addr3 }}
      </li>
    </ul>
  </div>
</template>
