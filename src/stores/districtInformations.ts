import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Viewpoint } from '@vcmap/core'
import type { Feature } from 'ol'

export const useDistrictStore = defineStore('districtInformations', () => {
  const districtCode: Ref<number> = ref(0)
  const districtName: Ref<string> = ref('')
  const districtConsumption: Ref<number> = ref(0)
  const districtProduction: Ref<number> = ref(0)
  const districtNumberInstallations: Ref<number> = ref(0)
  const districtFeature: Ref<Feature | null> = ref(null)
  const districtPointFeature: Ref<Feature | null> = ref(null)
  const previousViewPoint: Ref<Viewpoint | null> = ref(null)
  const newPointAbscissa: Ref<number> = ref(0)
  const newPointOrdinate: Ref<number> = ref(0)

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

  function setFeatureDistrict(newFeatureDistrict: Feature) {
    districtFeature.value = newFeatureDistrict
  }

  function setNewPointFeatureOnSelectedDistrict(newPointFeature: Feature) {
    districtPointFeature.value = newPointFeature
  }

  function setNewCoordinates(newAbscissa: number, newOrdinate: number) {
    newPointAbscissa.value = newAbscissa
    newPointOrdinate.value = newOrdinate
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
    districtFeature,
    districtPointFeature,
    previousViewPoint,
    newPointAbscissa,
    newPointOrdinate,
    setDistrictIrisCode,
    setDistrictName,
    setDistrictConsumption,
    setDistrictProduction,
    setDistrictNumberInstallations,
    setDistrictInformations,
    setFeatureDistrict,
    setNewPointFeatureOnSelectedDistrict,
    setNewCoordinates,
    resetDistrictStore,
  }
})
