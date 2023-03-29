<script lang="ts" setup>
import { ref, inject, onMounted, computed } from 'vue'
import type { Ref } from 'vue'
import iconTarget from '@/assets/icons/target.svg'
import iconMagnifyingGlass from '@/assets/icons/magnifying-glass.svg'
import iconSearchEmpty from '@/assets/icons/search-empty.svg'
import { apiRvaService } from '@/services/api-rva'
import { apiSitesorgService } from '@/services/api-sitesorg'
import { createNewViewpointFromAddress } from '@/services/viewpointHelper'
import type { RennesApp } from '@/services/RennesApp'
import type { AddressRva, AddressOrganization } from '@/model/address.model'
import iconMultiply from '@/assets/icons/icon-multiply.svg'
import { useAddressStore } from '@/stores/address'
import { useRouter } from 'vue-router'
import { usePanelsStore } from '@/stores/panels'
import { useMapStore } from '@/stores/map'

const props = defineProps({
  isRedirectOnSearch: {
    type: Boolean,
    default: true,
  },
})

const search = ref('')
const addressStore = useAddressStore()
const router = useRouter()
const addressSelected: Ref<number | string | null> = ref(null)
const autocompletion: Ref<{
  addressRva: AddressRva[]
  addressOrganization: AddressOrganization[]
}> = ref({
  addressRva: [],
  addressOrganization: [],
})

const rennesApp = inject('rennesApp') as RennesApp
const panelsStore = usePanelsStore()
const mapStore = useMapStore()

const SIZE_BEGIN_SEARCH = 4
const NB_ADDRESSES_RVA = 5
const NB_ADDRESSES_ORGANIZATION = 3

onMounted(() => {
  if (addressStore.address !== '') {
    search.value = addressStore.address
  }
})

const searchAddresses = async () => {
  let data = await apiRvaService.fetchAddress(search.value)
  let answer = data.rva.answer
  if (answer.status.code != 1 || answer.status.message != 'ok') {
    return
  }
  autocompletion.value.addressRva = answer.addresses.splice(0, NB_ADDRESSES_RVA)
}

const resetAutocompletion = () => {
  autocompletion.value.addressRva = []
  autocompletion.value.addressOrganization = []
}

const searchOrganizations = async () => {
  let data = await apiSitesorgService.fetchOrganizations(search.value)
  let organizations = []
  for (let i = 0; i < data.length && i < NB_ADDRESSES_ORGANIZATION; i++) {
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

const stripHTMLTags = (str: string) => {
  return str.replace(/<\/?[^>]+(>|$)/g, '')
}

const goToAddress = async (
  item: AddressRva | AddressOrganization,
  type: string
) => {
  addressStore.setAddress(search.value)
  if (props.isRedirectOnSearch) {
    router.push('/roof-selection')
  }
  let currentVp = await rennesApp.maps?.activeMap.getViewpoint()
  let newVp
  if (type === 'rva') {
    item = item as AddressRva
    search.value = stripHTMLTags(item.addr3)
    resetAutocompletion()
    addressStore.setAddressGeoloc([+item.x, +item.y])
    newVp = createNewViewpointFromAddress(currentVp!, [+item.x, +item.y])
  } else if (type === 'organization') {
    item = item as AddressOrganization
    search.value = stripHTMLTags(item.addr)
    resetAutocompletion()
    const data_organization = await apiSitesorgService.fetchOrganizationById(
      item.id
    )
    const id_site = data_organization.sites[0].idSite.idSite
    const data_site = await apiSitesorgService.fetchSiteById(id_site)
    const feature_site = data_site.features[0]
    let point = feature_site.geometry.coordinates
    let x = point[0]
    let y = point[1]
    addressStore.setAddressGeoloc([+x, +y])
    newVp = createNewViewpointFromAddress(currentVp!, [+x, +y])
  }
  if (newVp) {
    mapStore.viewPoint = newVp
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
  addressStore.setAddress('')
  resetAutocompletion()
  panelsStore.isCompletelyHidden = false
  if (props.isRedirectOnSearch) {
    router.push('/map-pcaet')
  }
}

function getPositionOfUser() {
  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        addressStore.setAddressGeoloc([lon, lat])
        createNewViewpointFromAddress(rennesApp, [lon, lat])
        console.log(position)
      },
      (error) => {
        console.log(error)
      }
    )
  }
}

const isEmptySearch = computed(() => {
  if (
    search.value.length >= SIZE_BEGIN_SEARCH &&
    addressStore.address === '' &&
    autocompletion.value.addressRva.length === 0 &&
    autocompletion.value.addressOrganization.length === 0
  ) {
    return true
  }
  return false
})

const highlightedAutocompletion = computed(() => {
  const boldSearchTerm = (text: string) => {
    const words = search.value
      .split(/\s+/)
      .filter((word) => word.trim().length > 0)
    const regex = new RegExp(`(${words.join('|')})`, 'gi')
    return text.replace(regex, '<strong>$1</strong>')
  }

  const addressRva = autocompletion.value.addressRva.map((address) => ({
    ...address,
    addr3: boldSearchTerm(address.addr3),
  }))

  const addressOrganization = autocompletion.value.addressOrganization.map(
    (organization) => ({
      ...organization,
      addr: boldSearchTerm(organization.addr),
    })
  )

  return {
    addressRva,
    addressOrganization,
  }
})
</script>

<template>
  <div class="flex flex-col gap-0 p-0 m-0">
    <div
      class="flex flex-row items-center h-11 shadow-lg rounded p-0 mb-0 bg-white w-[402px]"
    >
      <div
        class="flex flex-row items-center justify-center w-10 h-full ml-2"
        @click="getPositionOfUser()"
      >
        <img :src="iconTarget" class="w-4 h-4" />
      </div>
      <input
        class="w-full h-full border-none p-2 text-base font-medium font-dm-sans placeholder-black focus:ring-0 !border-black"
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
      class="font-dm-sans flex flex-col rounded mt-0 shadow-lg bg-white max-h-[300px] overflow-auto w-[402px]"
      v-if="
        highlightedAutocompletion.addressRva.length > 0 ||
        highlightedAutocompletion.addressOrganization.length > 0
      "
    >
      <ul v-if="highlightedAutocompletion.addressRva.length > 0">
        <li class="border-b border-neutral-200 py-1">
          <span class="font-dm-sans font-light text-sm text-neutral-800 px-3">
            <template v-if="highlightedAutocompletion.addressRva.length > 1">
              Adresses
            </template>
            <template v-else> Adresse </template>
          </span>
        </li>
        <li
          v-for="item in highlightedAutocompletion.addressRva"
          :key="item.idaddress"
          @click="goToAddress(item, 'rva')"
          @mouseover="addressSelected = item.idaddress"
          class="cursor-pointer border-b border-neutral-200 py-1"
          :class="addressSelected === item.idaddress ? 'bg-neutral-100' : ''"
        >
          <div v-html="item.addr3" class="px-3"></div>
        </li>
      </ul>

      <ul v-if="highlightedAutocompletion.addressOrganization.length > 0">
        <li class="border-b border-neutral-200 py-1">
          <span class="font-dm-sans font-light text-sm text-neutral-800 px-3">
            <template
              v-if="highlightedAutocompletion.addressOrganization.length > 1"
            >
              Organismes
            </template>
            <template v-else> Organisme </template>
          </span>
        </li>
        <li
          v-for="item in highlightedAutocompletion.addressOrganization"
          :key="item.id"
          @click="goToAddress(item, 'organization')"
          class="cursor-pointer border-b border-neutral-200 py-1"
          @mouseover="addressSelected = item.id"
          :class="{
            'bg-neutral-100': addressSelected === item.id,
          }"
        >
          <div v-html="item.addr" class="px-3"></div>
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

<style scoped>
input[type='text']::-webkit-input-placeholder:focus {
  color: transparent;
}

/* Override the default focus style for Firefox */
input[type='text']::-moz-placeholder:focus {
  color: transparent;
}

input[type='text']::-webkit-search-decoration,
input[type='text']::-webkit-search-cancel-button,
input[type='text']::-webkit-search-results-button,
input[type='text']::-webkit-search-results-decoration {
  display: none;
}
</style>
