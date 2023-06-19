import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Viewpoint } from '@vcmap/core'
import type { Feature } from 'ol'

export const useInstallationsStore = defineStore('installations', () => {
  const installationName: Ref<string> = ref('')
  const installationYear: Ref<number> = ref(0)
  const installationProduction: Ref<number> = ref(0)
  const numberHome: Ref<number> = ref(0)
  const pointFeature: Ref<Feature | null> = ref(null)
  const previousViewPoint: Ref<Viewpoint | null> = ref(null)
  const newPointAbscissa: Ref<number> = ref(0)
  const newPointOrdinate: Ref<number> = ref(0)
  const canBeDisplayed: Ref<boolean> = ref(false)

  function setInstallationName(newInstallationName: string) {
    installationName.value = newInstallationName
  }

  function setInstallationYear(newInstallationYear: number) {
    installationYear.value = newInstallationYear
  }

  function setInstallationProduction(newInstallationProduction: number) {
    installationProduction.value = newInstallationProduction
  }

  function setNumberHome(newNumberHome: number) {
    numberHome.value = newNumberHome
  }

  function setInstallationInformations(
    newInstallationName: string,
    newInstallationYear: number,
    newInstallationProduction: number,
    newNumberHome: number
  ) {
    setInstallationName(newInstallationName)
    setInstallationYear(newInstallationYear)
    setInstallationProduction(newInstallationProduction)
    setNumberHome(newNumberHome)
  }

  function setNewPointFeatureOnSelectedInstallation(newPointFeature: Feature) {
    pointFeature.value = newPointFeature
  }

  function setNewCoordinates(newAbscissa: number, newOrdinate: number) {
    newPointAbscissa.value = newAbscissa
    newPointOrdinate.value = newOrdinate
  }

  function setCanBeDisplayed(isPossible: boolean) {
    canBeDisplayed.value = isPossible
  }

  function resetInstallationStore() {
    setInstallationInformations('', 0, 0, 0)
  }

  return {
    installationName,
    installationYear,
    installationProduction,
    numberHome,
    pointFeature,
    previousViewPoint,
    newPointAbscissa,
    newPointOrdinate,
    canBeDisplayed,
    setInstallationName,
    setInstallationYear,
    setInstallationProduction,
    setNumberHome,
    setInstallationInformations,
    setNewPointFeatureOnSelectedInstallation,
    setNewCoordinates,
    setCanBeDisplayed,
    resetInstallationStore,
  }
})
