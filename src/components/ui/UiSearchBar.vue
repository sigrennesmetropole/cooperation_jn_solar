<script lang="ts" setup>
import { ref, inject } from 'vue'
import type { Ref } from 'vue'
import iconTarget from '@/assets/icons/target.svg'
import iconMagnifyingGlass from '@/assets/icons/magnifying-glass.svg'
import { apiRvaService } from '@/services/api-rva'
import { createNewViewpointFromAddress } from '@/services/address'
import type { RennesApp } from '@/services/RennesApp'
import type { Address } from '@/model/address.model'

const search = ref('')
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
  createNewViewpointFromAddress(rennesApp, [parseInt(item.x), parseInt(item.y)])
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-row items-center h-10 shadow-lg rounded p-0">
      <div class="flex flex-row items-center justify-center w-10 h-full">
        <img :src="iconTarget" class="w-4 h-4" />
      </div>
      <input
        class="w-full h-full rounded-l-none rounded-r-lg p-2"
        type="text"
        placeholder="Entrez votre adresse ici"
        v-model="search"
        @keyup="searchAddress"
      />
      <div
        class="flex flex-row items-center justify-center w-10 h-full cursor-pointer"
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
  </div>
</template>
