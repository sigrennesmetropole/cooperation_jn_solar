import { useRoofsStore } from '@/stores/roof'
import { useRoofDataStore } from '@/stores/roofData'
import type { RoofSurfaceModel } from '@/model/roof.model'
import { mapRoofSurfaceModel } from '@/model/roof.model'

function roundResult(num: number) {
  return parseInt(num.toFixed(2))
}

function getDataBuilding() {
  let all_area = 0
  let all_area_favorable = 0
  const all_values = [0, 0, 0, 0]
  const roofsStore = useRoofsStore()
  const buildingRoofsFeatures = roofsStore.buildingRoofsFeatures
  buildingRoofsFeatures?.features.forEach((feature) => {
    const dataRoof: RoofSurfaceModel = mapRoofSurfaceModel(feature)

    all_area += dataRoof.total
    all_area_favorable += dataRoof.favorable

    for (let i = 0; i < 4; i++) {
      all_values[i] += (dataRoof.values[i] * dataRoof.total) / 100
    }
  })
  for (let i = 0; i < 4; i++) {
    all_values[i] = (all_values[i] * 100) / all_area
  }
  const dataBuilding = {
    total: roundResult(all_area),
    favorable: roundResult(all_area_favorable),
    values: all_values,
  }
  return dataBuilding
}

export async function calculateAllRoofData() {
  const dataBuilding = getDataBuilding()
  const roofDataStore = useRoofDataStore()
  await roofDataStore.setBuildingData(dataBuilding)
}
