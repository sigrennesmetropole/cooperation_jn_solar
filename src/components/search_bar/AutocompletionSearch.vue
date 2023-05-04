<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import iconSearchEmpty from '@/assets/icons/search-empty.svg'
import type {
  AutoCompletion,
  AddressRva,
  AddressOrganization,
  AddressCommune,
  AddressStreet,
} from '@/model/address.model'

const props = defineProps<{
  isDisplayAutocompletion: boolean
  isDisplayFilters: boolean
  isEmptySearch: boolean
  highlightedAutocompletion: AutoCompletion
}>()

const emit = defineEmits(['goToAddress'])
const container = ref<HTMLDivElement | null>(null)

const autocompletionFormatted = computed(() => {
  return [
    {
      type: 'rva',
      name_key_id: 'idaddress',
      name_key_address: 'addr3',
      name_singular: 'Adresse',
      name_plural: 'Adresses',
      data: props.highlightedAutocompletion.addressRva,
    },
    {
      type: 'organization',
      name_key_id: 'id',
      name_key_address: 'addr',
      name_singular: 'Organisme',
      name_plural: 'Organismes',
      data: props.highlightedAutocompletion.addressOrganization,
    },
    {
      type: 'streets',
      name_key_id: 'idlane',
      name_key_address: 'name4',
      name_singular: 'Voie',
      name_plural: 'Voies',
      data: props.highlightedAutocompletion.streets,
    },
    {
      type: 'communes',
      name_key_id: 'nameindex',
      name_key_address: 'name',
      name_singular: 'Commune',
      name_plural: 'Communes',
      data: props.highlightedAutocompletion.communes,
    },
  ]
})

const getAddressValue = (
  item2: AddressRva | AddressOrganization | AddressCommune | AddressStreet,
  key: string
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (item2 as any)[key]
}

const getIdValue = (
  item2: AddressRva | AddressOrganization | AddressCommune | AddressStreet,
  key: string
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (item2 as any)[key]
}

const selectedIndex = ref(-1)
const scrollToSelectedItem = () => {
  if (container.value && getSelectedIndex() !== -1) {
    const { categoryIndex, localIndex } = getCategoryAndLocalIndex(
      getSelectedIndex()
    )
    const selectedItem = container.value.querySelector(
      `.autocompletion-item[data-category-index="${categoryIndex}"][data-item-index="${localIndex}"]`
    ) as HTMLElement

    if (selectedItem) {
      container.value.scrollTop =
        selectedItem.offsetTop - container.value.clientHeight / 2
    }
  }
}

const onKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'ArrowUp') {
    event.preventDefault()
    if (getSelectedIndex() > 0) {
      selectedIndex.value--
    }
    scrollToSelectedItem()
  } else if (event.key === 'ArrowDown') {
    event.preventDefault()
    const totalItems = autocompletionFormatted.value.reduce(
      (sum, item) => sum + item.data.length,
      0
    )
    if (getSelectedIndex() < totalItems - 1) {
      selectedIndex.value++
    } else if (getSelectedIndex() >= totalItems - 1) {
      selectedIndex.value = 0
    }
    scrollToSelectedItem()
  } else if (event.key === 'Enter') {
    const { categoryIndex, localIndex } = getCategoryAndLocalIndex(
      getSelectedIndex()
    )
    const item = autocompletionFormatted.value[categoryIndex]
    const selectedItem = item.data[localIndex]
    emit('goToAddress', {
      item: selectedItem,
      type: item.type,
      addr: getAddressValue(selectedItem, item.name_key_address),
    })
  }
}

watch(
  () => props.isDisplayAutocompletion,
  (value) => {
    if (value) {
      window.addEventListener('keydown', onKeyPress)
    } else {
      window.removeEventListener('keydown', onKeyPress)
    }
  },
  { immediate: true }
)

const getGlobalIndex = (categoryIndex: number, itemIndex: number) => {
  let globalIndex = 0
  for (let i = 0; i < categoryIndex; i++) {
    globalIndex += autocompletionFormatted.value[i].data.length
  }
  return globalIndex + itemIndex
}

const getCategoryAndLocalIndex = (globalIndex: number) => {
  let categoryIndex = 0
  let localIndex = globalIndex

  while (
    categoryIndex < autocompletionFormatted.value.length &&
    localIndex >= autocompletionFormatted.value[categoryIndex].data.length
  ) {
    localIndex -= autocompletionFormatted.value[categoryIndex].data.length
    categoryIndex++
  }

  return { categoryIndex, localIndex }
}

const getSelectedIndex = () => {
  return selectedIndex.value
}
</script>

<template>
  <div
    ref="container"
    class="font-dm-sans flex flex-col rounded mt-0 shadow-lg bg-white max-h-[300px] overflow-auto w-[402px] scrollbar scrollbar-thumb-black scrollbar-track-inerth scrollbar-thumb-rounded-full scrollbar-w-1"
    v-if="isDisplayAutocompletion && !isDisplayFilters"
  >
    <template v-for="(item, index) in autocompletionFormatted" :key="index">
      <ul v-if="item.data.length > 0">
        <li class="border-b border-neutral-200 py-1">
          <span class="font-dm-sans font-normal text-xs text-neutral-600 px-3">
            <template v-if="item.data.length > 1">
              {{ item.name_plural }}
            </template>
            <template v-else> {{ item.name_singular }} </template>
          </span>
        </li>
        <li
          v-for="(item2, index2) in item.data"
          :key="getIdValue(item2, item.name_key_id)"
          @click="
            $emit('goToAddress', {
              item: item2,
              type: item.type,
              addr: getAddressValue(item2, item.name_key_address),
            })
          "
          class="cursor-pointer border-b border-neutral-200 py-1 autocompletion-item"
          @mouseover="selectedIndex = getGlobalIndex(index, index2)"
          :class="{
            'bg-neutral-100': selectedIndex === getGlobalIndex(index, index2),
          }"
          :data-category-index="index"
          :data-item-index="index2"
        >
          <div
            v-html="getAddressValue(item2, item.name_key_address)"
            class="px-3 font-dm-sans font-normal text-sm"
          ></div>
        </li>
      </ul>
    </template>
  </div>
  <div
    v-else-if="props.isEmptySearch"
    class="flex flex-row items-center rounded px-3 py-4 mt-0 shadow-lg bg-white"
  >
    <img :src="iconSearchEmpty" class="w-4 h-4" />
    <span class="text-base font-medium font-dm-sans ml-2">
      Aucun résultat
    </span>
  </div>
</template>
