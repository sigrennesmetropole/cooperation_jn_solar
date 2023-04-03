import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useDistrictStore = defineStore('districtInformations', () => {
  const districtCode: Ref<number> = ref(0)
  const districtName: Ref<string> = ref('')
  const districtConsumption: Ref<number> = ref(0)
  const districtProduction: Ref<number> = ref(0)
  const districtNumberInstallations: Ref<number> = ref(0)

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

  function resetDistrictStore() {
    setDistrictInformations(0, '', 0, 0, 0)
  }

  return {
    districtCode,
    districtName,
    districtConsumption,
    districtProduction,
    districtNumberInstallations,
    setDistrictIrisCode,
    setDistrictName,
    setDistrictConsumption,
    setDistrictProduction,
    setDistrictNumberInstallations,
    setDistrictInformations,
    resetDistrictStore,
  }
})
