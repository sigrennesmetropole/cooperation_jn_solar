<script lang="ts" setup>
import { ref, inject, onMounted, computed } from 'vue'
import type { Ref } from 'vue'
import iconTarget from '@/assets/icons/target.svg'
import iconMagnifyingGlass from '@/assets/icons/magnifying-glass.svg'
import iconSearchEmpty from '@/assets/icons/search-empty.svg'
import { apiRvaService } from '@/services/api-rva'
import { apiSitesorgService } from '@/services/api-sitesorg'
import { createNewViewpointFromAddress } from '@/services/address'
import type { RennesApp } from '@/services/RennesApp'
import type { AddressRva, AddressOrganization } from '@/model/address.model'
import iconMultiply from '@/assets/icons/icon-multiply.svg'
import { useAddressStore } from '@/stores/address'
import { useRouter } from 'vue-router'
import { usePanelsStore } from '@/stores/panels'

const search = ref('')
const adressStore = useAddressStore()
const router = useRouter()
const addressSelected: Ref<AddressRva | AddressOrganization | null> = ref(null)
const autocompletion: Ref<{
  addressRva: AddressRva[]
  addressOrganization: AddressOrganization[]
}> = ref({
  addressRva: [],
  addressOrganization: [],
})

const rennesApp = inject('rennesApp') as RennesApp
const panelsStore = usePanelsStore()
const SIZE_BEGIN_SEARCH = 4

onMounted(() => {
  if (adressStore.address !== '') {
    search.value = adressStore.address
  }
})

const searchAddresses = async () => {
  let data = await apiRvaService.fetchAddress(search.value)
  let answer = data.rva.answer
  if (answer.status.code != 1 || answer.status.message != 'ok') {
    return
  }
  autocompletion.value.addressRva = answer.addresses.splice(0, 5)
}

const resetAutocompletion = () => {
  autocompletion.value.addressRva = []
  autocompletion.value.addressOrganization = []
}

const searchOrganizations = async () => {
  let data = await apiSitesorgService.fetchOrganizations(search.value)
  let organizations = []
  for (let i = 0; i < data.length; i++) {
    organizations.push({
      id: data[i].id,
      addr: data[i].nom,
    })
  }
  autocompletion.value.addressOrganization = organizations
}

const searchAddressesOrOrganizations = async () => {
  if (search.value.length < SIZE_BEGIN_SEARCH) {
    resetAutocompletion()
    return
  }
  searchAddresses()
  searchOrganizations()
}

const goToAddress = async (
  item: AddressRva | AddressOrganization,
  type: string
) => {
  adressStore.setAddress(search.value)
  router.push('/roof-selection')
  if (type === 'rva') {
    item = item as AddressRva
    search.value = item.addr3
    resetAutocompletion()
    let x: number = item.x as unknown as number
    let y: number = item.y as unknown as number
    createNewViewpointFromAddress(rennesApp, [x, y])
  } else if (type === 'organization') {
    item = item as AddressOrganization
    search.value = item.addr
    resetAutocompletion()
    const data_organiztion = await apiSitesorgService.fetchOrganizationById(
      item.id
    )
    const id_site = data_organiztion.sites[0].idSite.idSite
    const data_site = await apiSitesorgService.fetchSiteById(id_site)
    const feature_site = data_site.features[0]
    let point = feature_site.geometry.coordinates
    let x = point[0]
    let y = point[1]
    createNewViewpointFromAddress(rennesApp, [x, y])
  }
}

function clickSearch() {
  if (autocompletion.value.addressRva.length > 0) {
    goToAddress(autocompletion.value.addressRva[0], 'rva')
  } else if (autocompletion.value.addressOrganization.length > 0) {
    goToAddress(autocompletion.value.addressOrganization[0], 'organization')
  }
}

function emptySearch() {
  search.value = ''
  adressStore.setAddress('')
  resetAutocompletion()
  panelsStore.isCompletelyHidden = false
  router.push('/map-pcaet')
}

const isEmptySearch = computed(() => {
  if (
    search.value.length >= SIZE_BEGIN_SEARCH &&
    adressStore.address === '' &&
    autocompletion.value.addressRva.length === 0 &&
    autocompletion.value.addressOrganization.length === 0
  ) {
    return true
  }
  return false
})
</script>

<template>
  <div class="flex flex-col gap-0 p-0 m-0">
    <div
      class="flex flex-row items-center h-11 shadow-lg rounded p-0 mb-0 bg-white w-[402px]"
    >
      <div class="flex flex-row items-center justify-center w-10 h-full">
        <img :src="iconTarget" class="w-4 h-4" />
      </div>
      <input
        class="w-full h-full rounded-l-none rounded-r-lg p-2 text-base font-medium font-dm-sans placeholder-black"
        type="text"
        placeholder="Entrez votre adresse ici"
        v-model="search"
        @keyup="searchAddressesOrOrganizations"
      />
      <div
        class="flex flex-row items-center justify-center w-11 h-full cursor-pointer"
        @click="emptySearch()"
        v-if="search !== ''"
      >
        <img :src="iconMultiply" class="w-4 h-4" />
      </div>
      <button
        class="flex flex-row items-center justify-center w-11 h-full cursor-pointer border-l border-neutral-200"
        :disabled="isEmptySearch || search.length < SIZE_BEGIN_SEARCH"
        @click="clickSearch"
      >
        <img :src="iconMagnifyingGlass" class="w-4 h-4" />
      </button>
    </div>

    <div
      class="flex flex-col rounded px-3 py-4 mt-0 shadow-lg bg-white"
      v-if="
        autocompletion.addressRva.length > 0 ||
        autocompletion.addressOrganization.length > 0
      "
    >
      <ul>
        <li
          v-for="item in autocompletion.addressRva"
          :key="item.idaddress"
          @click="goToAddress(item, 'rva')"
          @mouseover="addressSelected = item"
          class="cursor-pointer border-b border-neutral-200"
          :class="addressSelected === item ? 'bg-neutral-100' : ''"
        >
          {{ item.addr3 }}
        </li>
      </ul>
      <ul>
        <li
          v-for="item in autocompletion.addressOrganization"
          :key="item.addr"
          @click="goToAddress(item, 'organization')"
          class="cursor-pointer border-b border-neutral-200"
          @mouseover="addressSelected = item"
          :class="{
            'border-none':
              item ===
              autocompletion.addressOrganization[
                autocompletion.addressOrganization.length - 1
              ],
            'bg-neutral-100': addressSelected === item,
          }"
        >
          {{ item.addr }}
        </li>
      </ul>
    </div>
    <div
      v-else-if="isEmptySearch"
      class="flex flex-row items-center rounded px-3 py-4 mt-0 shadow-lg bg-white"
    >
      <img :src="iconSearchEmpty" class="w-4 h-4" />
      <span class="text-base font-medium font-dm-sans ml-2">
        Aucun résultat
      </span>
    </div>
  </div>
</template>
