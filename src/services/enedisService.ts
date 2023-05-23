import { useRoofsStore } from '@/stores/roof'
import { useAddressStore } from '@/stores/address'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import { useSolarPanelStore } from '@/stores/solarPanels'
import { useDistrictStore } from '@/stores/districtInformations'
import { useHomeStore } from '@/stores/home'
import { useLayersStore } from '@/stores/layers'
import { usePopUpStore } from '@/stores/popUpStore'
import { useSimulationStore } from '@/stores/simulations'
import { usePanelsStore } from '@/stores/panels'

export async function storeDataForEnedis() {
  const addressStore = useAddressStore()
  const consumptionAndProductionStore = useConsumptionAndProductionStore()
  const districtStore = useDistrictStore()
  const homeStore = useHomeStore()
  const layerStore = useLayersStore()
  const panelStore = usePanelsStore()
  const popUpStore = usePopUpStore()
  const roofsStore = useRoofsStore()
  const simulationStore = useSimulationStore()
  const solarPanelStore = useSolarPanelStore()

  // Address
  const blob = addressStore.screenshotAddress
  const base64data = await new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = function () {
      resolve(reader.result)
    }
    reader.onerror = reject
    reader.readAsDataURL(blob!)
  })
  const dataAddress = {
    address: addressStore.address,
    latitude: addressStore.latitude,
    longitude: addressStore.longitude,
    screenshotAddress: base64data,
  }

  const dataConsumptionAndProduction = {
    annualConsumption: consumptionAndProductionStore.annualConsumption,
  }

  const dataDistrict = {
    districtCode: districtStore.districtCode,
    districtName: districtStore.districtName,
    districtConsumption: districtStore.districtConsumption,
    districtProduction: districtStore.districtProduction,
    districtNumberInstallations: districtStore.districtNumberInstallations,
    districtPointFeature: districtStore.districtPointFeature,
    previousViewPoint: districtStore.previousViewPoint,
    newPointAbscissa: districtStore.newPointAbscissa,
    newPointOrdinate: districtStore.newPointOrdinate,
    checkboxChecked: districtStore.checkboxChecked,
    canBeDisplayed: districtStore.canBeDisplayed,
  }

  const dataHome = {
    isTermOfUseAccepted: homeStore.isTermOfUseAccepted,
    displayError: homeStore.displayError,
  }

  const dataLayers = {
    visibilities: layerStore.visibilities,
  }

  const dataPanel = {
    isInformationPanelShown: panelStore.isInformationPanelShown,
    typePanelDisplay: panelStore.typePanelDisplay,
    isCompletelyHidden: panelStore.isCompletelyHidden,
  }

  const dataPopUp = {
    isDisplayTermsOfUse: popUpStore.isDisplayTermsOfUse,
  }

  const dataRoof = {
    selectedBuildingId: roofsStore.selectedBuildingId,
    roofsFeatures: roofsStore.roofsFeatures,
    roofSurfacesList: roofsStore.roofSurfacesList,
    selectedRoofSurfaceId: roofsStore.selectedRoofSurfaceId,
    gridGeom: roofsStore.gridGeom,
    gridMatrix: roofsStore.gridMatrix,
    previousGridMatrix: roofsStore.previousGridMatrix,
    previouslySelected: roofsStore.previouslySelected,
  }

  const dataSimulation = {
    currentStep: simulationStore.currentStep,
    currentSubStep: simulationStore.currentSubStep,
    restartEndSimulation: simulationStore.restartEndSimulation,
  }

  const dataSolarPanel = {
    currentNumberSolarPanel: solarPanelStore.currentNumberSolarPanel,
    solarPanels: solarPanelStore.solarPanels,
  }

  const data = {
    dataAddress: dataAddress,
    dataConsumptionAndProduction: dataConsumptionAndProduction,
    dataDistrict: dataDistrict,
    dataHome: dataHome,
    dataLayers: dataLayers,
    dataPanel: dataPanel,
    dataPopUp: dataPopUp,
    dataRoof: dataRoof,
    dataSimulation: dataSimulation,
    dataSolarPanel: dataSolarPanel,
  }

  localStorage.setItem('dataSimulation', JSON.stringify(data))
}

function base64ToBlob(base64Data: string, contentType = '', sliceSize = 512) {
  const base64 = base64Data.split(',')[1] // Remove 'data:image/png;base64,' part
  const byteCharacters = atob(base64)
  const byteArrays = []

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize)

    const byteNumbers = new Array(slice.length)
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    const byteArray = new Uint8Array(byteNumbers)
    byteArrays.push(byteArray)
  }

  const blob = new Blob(byteArrays, { type: contentType })
  return blob
}

export function getDataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('dataSimulation') || '{}')

  const addressStore = useAddressStore()
  const consumptionAndProductionStore = useConsumptionAndProductionStore()
  const districtStore = useDistrictStore()
  const homeStore = useHomeStore()
  const layerStore = useLayersStore()
  const panelStore = usePanelsStore()
  const popUpStore = usePopUpStore()
  const roofsStore = useRoofsStore()
  const simulationStore = useSimulationStore()
  const solarPanelStore = useSolarPanelStore()

  addressStore.address = data.dataAddress.address
  addressStore.latitude = data.dataAddress.latitude
  addressStore.longitude = data.dataAddress.longitude
  addressStore.screenshotAddress = base64ToBlob(
    data.dataAddress.screenshotAddress
  )

  consumptionAndProductionStore.annualConsumption =
    data.dataConsumptionAndProduction.annualConsumption

  districtStore.districtCode = data.dataDistrict.districtCode
  districtStore.districtName = data.dataDistrict.districtName
  districtStore.districtConsumption = data.dataDistrict.districtConsumption
  districtStore.districtProduction = data.dataDistrict.districtProduction
  districtStore.districtNumberInstallations =
    data.dataDistrict.districtNumberInstallations
  districtStore.districtPointFeature = data.dataDistrict.districtPointFeature
  districtStore.previousViewPoint = data.dataDistrict.previousViewPoint
  districtStore.newPointAbscissa = data.dataDistrict.newPointAbscissa
  districtStore.newPointOrdinate = data.dataDistrict.newPointOrdinate
  districtStore.checkboxChecked = data.dataDistrict.checkboxChecked
  districtStore.canBeDisplayed = data.dataDistrict.canBeDisplayed

  homeStore.isTermOfUseAccepted = data.dataHome.isTermOfUseAccepted
  homeStore.displayError = data.dataHome.displayError

  layerStore.visibilities = data.dataLayers.visibilities

  panelStore.isInformationPanelShown = data.dataPanel.isInformationPanelShown
  panelStore.typePanelDisplay = data.dataPanel.typePanelDisplay
  panelStore.isCompletelyHidden = data.dataPanel.isCompletelyHidden

  popUpStore.isDisplayTermsOfUse = data.dataPopUp.isDisplayTermsOfUse

  roofsStore.selectedBuildingId = data.dataRoof.selectedBuildingId
  roofsStore.roofsFeatures = data.dataRoof.roofsFeatures
  roofsStore.roofSurfacesList = data.dataRoof.roofSurfacesList
  roofsStore.selectedRoofSurfaceId = data.dataRoof.selectedRoofSurfaceId
  roofsStore.gridGeom = data.dataRoof.gridGeom
  roofsStore.gridMatrix = data.dataRoof.gridMatrix
  roofsStore.previousGridMatrix = data.dataRoof.previousGridMatrix
  roofsStore.previouslySelected = data.dataRoof.previouslySelected

  simulationStore.currentStep = data.dataSimulation.currentStep
  simulationStore.currentSubStep = data.dataSimulation.currentSubStep
  simulationStore.restartEndSimulation =
    data.dataSimulation.restartEndSimulation

  solarPanelStore.currentNumberSolarPanel =
    data.dataSolarPanel.currentNumberSolarPanel
  solarPanelStore.solarPanels = data.dataSolarPanel.solarPanels

  return data
}

export function resetDataForEnedis() {
  localStorage.removeItem('dataSimulation')
}
