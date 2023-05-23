import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'

import SelectRoofInteraction from '@/interactions/selectRoofInteraction'
import ForbidenClickInteraction from '@/interactions/forbidClickInteraction'
import SelectDistrictInteraction from '@/interactions/selectDistrictInteractions'

type InteractionsTypes =
  | typeof SelectRoofInteraction
  | typeof ForbidenClickInteraction
  | typeof SelectDistrictInteraction

export const useInteractionsStore = defineStore('interactions', () => {
  const _activeInteractions: Ref<InteractionsTypes[]> = ref([])
  const _trigger: Ref<boolean> = ref(false)

  function enableInteraction(toAdd: InteractionsTypes) {
    if (!_activeInteractions.value.includes(toAdd)) {
      _activeInteractions.value.push(toAdd)
      _trigger.value = !_trigger.value
    }
  }

  function disableInteraction(toRemove: InteractionsTypes) {
    const indexOfObject = _activeInteractions.value.findIndex((elt) => {
      return elt === toRemove
    })
    if (indexOfObject !== -1) {
      _activeInteractions.value.splice(indexOfObject, 1)
    }
  }

  function getActiveInteractions() {
    return _activeInteractions.value
  }

  function isActive(interaction: InteractionsTypes) {
    return _activeInteractions.value.includes(interaction)
  }

  function getInactiveInteractions() {
    return [
      SelectRoofInteraction,
      ForbidenClickInteraction,
      SelectDistrictInteraction,
    ].filter((item) => _activeInteractions.value.indexOf(item) < 0)
  }

  return {
    _activeInteractions,
    _trigger,
    isActive,
    enableInteraction,
    disableInteraction,
    getActiveInteractions,
    getInactiveInteractions,
  }
})
