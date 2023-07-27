<script lang="ts" setup>
import { ref, inject, onMounted, computed } from 'vue'
import type { Ref } from 'vue'
import { apiRvaService } from '@/services/api-rva'
import { apiSitesorgService } from '@/services/api-sitesorg'
import type { RennesApp } from '@/services/RennesApp'
import type {
  AddressRva,
  AddressOrganization,
  AddressCommune,
  AddressStreet,
  AutoCompletion,
} from '@/model/address.model'
import { useAddressStore } from '@/stores/address'
import { useRouter } from 'vue-router'
import { usePanelsStore } from '@/stores/panels'
import { useMapStore } from '@/stores/map'
import AutocompletionSearch from '@/components/search_bar/AutocompletionSearch.vue'
import FiltersSearch from '@/components/search_bar/FiltersSearch.vue'
import InputSearch from '@/components/search_bar/InputSearch.vue'
import { createVPForTypeAddress, addPin } from '@/services/searchBarService'
// @ts-ignore : Could not find a declaration file for module 'dompurify'
import DOMPurify from 'dompurify'
import { getNumberFromConfig } from '@/services/configService'
import { useInstallationsStore } from '@/stores/installations'

const props = defineProps({
  isRedirectOnSearch: {
    type: Boolean,
    default: true,
  },
})

const search = ref('')
const addressStore = useAddressStore()
const router = useRouter()

const autocompletion: Ref<AutoCompletion> = ref({
  addressRva: [],
  addressOrganization: [],
  communes: [],
  streets: [],
})

const rennesApp = inject('rennesApp') as RennesApp
const panelsStore = usePanelsStore()
const mapStore = useMapStore()
const isDisplayFilters: Ref<boolean> = ref(false)
const filters = ref([
  {
    name: 'Communes',
    active: false,
  },
  {
    name: 'Adresses',
    active: true,
  },
  {
    name: 'Voies',
    active: false,
  },
  {
    name: 'Organismes',
    active: true,
  },
])
let size_begin_search: number
let nb_addresses_rva: number
let nb_addresses_organization: number
let nb_addresses_communes: number
let nb_addresses_streets: number

onMounted(() => {
  if (addressStore.address !== '') {
    search.value = addressStore.address
  }
  size_begin_search = getNumberFromConfig('address.size_begin_search')
  nb_addresses_rva = getNumberFromConfig('address.nb_addresses_rva')
  nb_addresses_organization = getNumberFromConfig(
    'address.nb_addresses_organization'
  )
  nb_addresses_communes = getNumberFromConfig('address.nb_addresses_communes')
  nb_addresses_streets = getNumberFromConfig('address.nb_addresses_streets')
})

function searchFiltered() {
  return search.value.split(',')[0].trim()
}

const searchAddresses = async () => {
  let addresses = await apiRvaService.fetchFullAddresses(searchFiltered())
  autocompletion.value.addressRva = addresses.splice(0, nb_addresses_rva)
}

const searchCommunes = async () => {
  let communes = await apiRvaService.fetchCommunes(searchFiltered())
  autocompletion.value.communes = communes.splice(0, nb_addresses_communes)
}

const searchStreets = async () => {
  let streets = await apiRvaService.fetchStreets(searchFiltered())
  autocompletion.value.streets = streets.splice(0, nb_addresses_streets)
}

const searchOrganizations = async () => {
  let data = await apiSitesorgService.fetchOrganizations(searchFiltered())
  let organizations = []
  for (let i = 0; i < data.length && i < nb_addresses_organization; i++) {
    let commune = ''
    for (let autre of data[i].autres) {
      if (autre.match(/Localisation/) != null) {
        const autre_split = autre.split(':')
        commune = autre_split[autre_split.length - 1].trim()
      }
    }
    organizations.push({
      id: data[i].id,
      addr: data[i].nom + ', ' + commune,
    })
  }
  autocompletion.value.addressOrganization = organizations
}

const resetAutocompletion = () => {
  autocompletion.value.addressRva = []
  autocompletion.value.addressOrganization = []
  autocompletion.value.communes = []
  autocompletion.value.streets = []
}

const inputKeyUp = async (newSearch: string) => {
  newSearch = DOMPurify.sanitize(newSearch)

  if (search.value === newSearch) {
    return
  }
  search.value = newSearch
  if (search.value.length < size_begin_search) {
    resetAutocompletion()
    return
  }
  filters.value.forEach((filter) => {
    if (!filter.active) {
      return
    }
    if (filter.name === 'Communes') {
      searchCommunes()
    } else if (filter.name === 'Adresses') {
      searchAddresses()
    } else if (filter.name === 'Voies') {
      searchStreets()
    } else if (filter.name === 'Organismes') {
      searchOrganizations()
    }
  })
}

const stripHTMLTags = (str: string) => {
  return str.replace(/<\/?[^>]+(>|$)/g, '')
}

const goToAddress = async (event: {
  type: string
  item: AddressRva | AddressOrganization | AddressCommune | AddressStreet
  addr: string
}) => {
  const installationsStore = useInstallationsStore()

  installationsStore.resetInstallationStore()
  installationsStore.canBeDisplayed = false

  search.value = stripHTMLTags(event.addr)
  addressStore.setAddress(search.value)

  if (props.isRedirectOnSearch) {
    router.push('/roof-selection')
  }

  const newVp = await createVPForTypeAddress(rennesApp, event.type, event.item)
  if (newVp) {
    resetAutocompletion()
    mapStore.viewPoint = newVp

    addPin(rennesApp, event.type, event.item)
  }
}

function emptySearch() {
  search.value = ''
  addressStore.setAddress('')
  resetAutocompletion()
  panelsStore.isCompletelyHidden = false
  if (props.isRedirectOnSearch) {
    router.push('/roof-selection')
  }
}

const isEmptySearch = computed(() => {
  if (
    search.value.length >= size_begin_search &&
    addressStore.address === '' &&
    autocompletion.value.addressRva.length === 0 &&
    autocompletion.value.addressOrganization.length === 0 &&
    autocompletion.value.communes.length === 0 &&
    autocompletion.value.streets.length === 0
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

  const communes = autocompletion.value.communes.map((commune) => ({
    ...commune,
    name: boldSearchTerm(commune.name),
  }))

  const streets = autocompletion.value.streets.map((street) => ({
    ...street,
    name4: boldSearchTerm(street.name4),
  }))

  return {
    addressRva,
    addressOrganization,
    communes,
    streets,
  }
})

const isDisplayAutocompletion = computed(() => {
  return (
    highlightedAutocompletion.value.addressRva.length > 0 ||
    highlightedAutocompletion.value.addressOrganization.length > 0 ||
    highlightedAutocompletion.value.communes.length > 0 ||
    highlightedAutocompletion.value.streets.length > 0
  )
})

function filterChange(event: {
  value: boolean
  filter: { name: string; active: boolean }
  index: number
}) {
  const indexClick = event.index
  const value = event.value
  filters.value = filters.value.map((filter, index) => {
    if (index == indexClick) {
      filter.active = value
    }
    return filter
  })
  if (search.value.length < size_begin_search) {
    resetAutocompletion()
    return
  }
  if (event.filter.name == 'Communes') {
    if (!event.filter.active) {
      autocompletion.value.communes = []
    } else {
      searchCommunes()
    }
  } else if (event.filter.name == 'Adresses') {
    if (!event.filter.active) {
      autocompletion.value.addressRva = []
    } else {
      searchAddresses()
    }
  } else if (event.filter.name == 'Voies') {
    if (!event.filter.active) {
      autocompletion.value.streets = []
    } else {
      searchStreets()
    }
  } else if (event.filter.name == 'Organismes') {
    if (!event.filter.active) {
      autocompletion.value.addressOrganization = []
    } else {
      searchOrganizations()
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-0 p-0 m-0">
    <InputSearch
      :isDisplayAutocompletion="isDisplayAutocompletion"
      :isEmptySearch="isEmptySearch"
      :sizeBeginSearch="size_begin_search"
      @inputKeyUp="inputKeyUp($event)"
      @emptySearch="emptySearch()"
      @toggleFilters="isDisplayFilters = !isDisplayFilters"
    />

    <AutocompletionSearch
      :isDisplayAutocompletion="isDisplayAutocompletion"
      :isDisplayFilters="isDisplayFilters"
      :isEmptySearch="isEmptySearch"
      :highlightedAutocompletion="highlightedAutocompletion"
      @goToAddress="goToAddress($event)"
    />

    <FiltersSearch
      :isDisplayFilters="isDisplayFilters"
      :filters="filters"
      @checkBoxChange="filterChange($event)"
      @closeFilters="isDisplayFilters = false"
    />
  </div>
</template>
