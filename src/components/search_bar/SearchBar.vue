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
import { createVPForTypeAddress } from '@/services/searchBarService'

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

const SIZE_BEGIN_SEARCH = 4
const NB_ADDRESSES_RVA = 5
const NB_ADDRESSES_ORGANIZATION = 3
const NB_ADDRESSES_COMMUNES = 2
const NB_ADDRESSES_STREETS = 5

onMounted(() => {
  if (addressStore.address !== '') {
    search.value = addressStore.address
  }
})

function searchFiltered() {
  return search.value.split(',')[0].trim()
}

const searchAddresses = async () => {
  let addresses = await apiRvaService.fetchFullAddresses(searchFiltered())
  autocompletion.value.addressRva = addresses.splice(0, NB_ADDRESSES_RVA)
}

const searchCommunes = async () => {
  let communes = await apiRvaService.fetchCommunes(searchFiltered())
  autocompletion.value.communes = communes.splice(0, NB_ADDRESSES_COMMUNES)
}

const searchStreets = async () => {
  let streets = await apiRvaService.fetchStreets(searchFiltered())
  autocompletion.value.streets = streets.splice(0, NB_ADDRESSES_STREETS)
}

const searchOrganizations = async () => {
  let data = await apiSitesorgService.fetchOrganizations(searchFiltered())
  let organizations = []
  for (let i = 0; i < data.length && i < NB_ADDRESSES_ORGANIZATION; i++) {
    organizations.push({
      id: data[i].id,
      addr: data[i].nom,
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
  if (search.value === newSearch) {
    return
  }
  search.value = newSearch
  if (search.value.length < SIZE_BEGIN_SEARCH) {
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
  search.value = stripHTMLTags(event.addr)
  addressStore.setAddress(search.value)

  if (props.isRedirectOnSearch) {
    router.push('/roof-selection')
  }

  const newVp = await createVPForTypeAddress(rennesApp, event.type, event.item)
  if (newVp) {
    resetAutocompletion()
    mapStore.viewPoint = newVp
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
    search.value.length >= SIZE_BEGIN_SEARCH &&
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
  if (search.value.length < SIZE_BEGIN_SEARCH) {
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
      :sizeBeginSearch="SIZE_BEGIN_SEARCH"
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
