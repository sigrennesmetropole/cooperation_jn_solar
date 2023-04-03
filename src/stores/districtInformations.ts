import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useDistrictStore = defineStore('districtInformations', () => {
  const districtName: Ref<string> = ref('')
  const districtConsumption: Ref<number> = ref(0)
  const districtProduction: Ref<number> = ref(0)
  const districtNumberInstallations: Ref<number> = ref(0)

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
    newDistrictName: string,
    newDistrictConsumption: number,
    newDistrictProduction: number,
    newDistrictNumberInstallations: number
  ) {
    setDistrictName(newDistrictName)
    setDistrictConsumption(newDistrictConsumption)
    setDistrictProduction(newDistrictProduction)
    setDistrictNumberInstallations(newDistrictNumberInstallations)
  }

  return {
    districtName,
    districtConsumption,
    districtProduction,
    districtNumberInstallations,
    setDistrictName,
    setDistrictConsumption,
    setDistrictProduction,
    setDistrictNumberInstallations,
    setDistrictInformations,
  }
})
