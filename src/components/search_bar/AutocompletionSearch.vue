<script setup lang="ts">
import { computed, ref } from 'vue'
import iconSearchEmpty from '@/assets/icons/search-empty.svg'
import type { Ref } from 'vue'
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

const addressSelected: Ref<number | string | null> = ref(null)

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
</script>

<template>
  <div
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
          v-for="item2 in item.data"
          :key="getIdValue(item2, item.name_key_id)"
          @click="
            $emit('goToAddress', {
              item: item2,
              type: item.type,
              addr: getAddressValue(item2, item.name_key_address),
            })
          "
          class="cursor-pointer border-b border-neutral-200 py-1"
          @mouseover="addressSelected = getIdValue(item2, item.name_key_id)"
          :class="{
            'bg-neutral-100':
              addressSelected === getIdValue(item2, item.name_key_id),
          }"
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
