import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Viewpoint } from '@vcmap/core'
import type { Feature } from 'ol'
import { useInteractionsStore } from '@/stores/interactions'
import SelectDistrictInteraction from '@/interactions/selectDistrictInteractions'
import { RENNES_LAYER, useLayersStore } from '@/stores/layers'

export const useDistrictStore = defineStore('districtInformations', () => {
  const interactionsStore = useInteractionsStore()
  const layerStore = useLayersStore()

  const districtCode: Ref<number> = ref(0)
  const districtName: Ref<string> = ref('')
  const districtConsumption: Ref<number> = ref(0)
  const districtProduction: Ref<number> = ref(0)
  const districtNumberInstallations: Ref<number> = ref(0)
  const districtPointFeature: Ref<Feature | null> = ref(null)
  const previousViewPoint: Ref<Viewpoint | null> = ref(null)
  const newPointAbscissa: Ref<number> = ref(0)
  const newPointOrdinate: Ref<number> = ref(0)
  const checkboxChecked: Ref<boolean> = ref(false)
  const canBeDisplayed: Ref<boolean> = ref(true)
  function setDistrictIrisCode(newDistrictCode: number) {
    districtCode.value = newDistrictCode
  }

  function setDistrictName(newDistrictName: string) {
    districtName.value = newDistrictName
  }

  function setDistrictConsumption(newDistrictConsumption: number) {
    districtConsumption.value = newDistrictConsumption
  }

  function setDistrictProduction(newDistrictProduction: number) {
    districtProduction.value = newDistrictProduction
  }

  function setDistrictNumberInstallations(
    newDistrictNumberInstallations: number
  ) {
    districtNumberInstallations.value = newDistrictNumberInstallations
  }

  function setDistrictInformations(
    newDistrictCode: number,
    newDistrictName: string,
    newDistrictConsumption: number,
    newDistrictProduction: number,
    newDistrictNumberInstallations: number
  ) {
    setDistrictIrisCode(newDistrictCode)
    setDistrictName(newDistrictName)
    setDistrictConsumption(newDistrictConsumption)
    setDistrictProduction(newDistrictProduction)
    setDistrictNumberInstallations(newDistrictNumberInstallations)
  }

  function setNewPointFeatureOnSelectedDistrict(newPointFeature: Feature) {
    districtPointFeature.value = newPointFeature
  }

  function setNewCoordinates(newAbscissa: number, newOrdinate: number) {
    newPointAbscissa.value = newAbscissa
    newPointOrdinate.value = newOrdinate
  }

  function setCheckboxChecked(newAction: boolean) {
    checkboxChecked.value = newAction
    if (newAction && canBeDisplayed) {
      layerStore.enableLayer(RENNES_LAYER.iris)
      interactionsStore.enableInteraction(SelectDistrictInteraction)
    } else {
      layerStore.disableLayer(RENNES_LAYER.iris)
      interactionsStore.disableInteraction(SelectDistrictInteraction)
    }
  }

  function setCanBeDisplayed(isFarEnough: boolean) {
    canBeDisplayed.value = isFarEnough
    if (!isFarEnough) {
      setCheckboxChecked(false)
    }
  }

  function resetDistrictStore() {
    setDistrictInformations(0, '', 0, 0, 0)
  }

  return {
    districtCode,
    districtName,
    districtConsumption,
    districtProduction,
    districtNumberInstallations,
    districtPointFeature,
    previousViewPoint,
    newPointAbscissa,
    newPointOrdinate,
    checkboxChecked,
    canBeDisplayed,
    setDistrictIrisCode,
    setDistrictName,
    setDistrictConsumption,
    setDistrictProduction,
    setDistrictNumberInstallations,
    setDistrictInformations,
    setNewPointFeatureOnSelectedDistrict,
    setNewCoordinates,
    setCheckboxChecked,
    setCanBeDisplayed,
    resetDistrictStore,
  }
})
