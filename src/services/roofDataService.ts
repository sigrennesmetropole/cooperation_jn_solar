import { useRoofsStore } from '@/stores/roof'
import { useRoofDataStore } from '@/stores/roofData'
import GeoJSON from 'ol/format/GeoJSON'
import type { RoofSurfaceModel } from '@/model/roof.model'
import type { Feature } from 'ol'
import type { Geometry } from 'ol/geom'

function calculateSurfaceFavorableOfRoofFeature(feature: Feature<Geometry>) {
  const percentageFavorable =
    feature.getProperty('rang_3') + feature.getProperty('rang_4')
  const total_surface = feature.getProperty('pan_area')
  const surface_favorable = (percentageFavorable * total_surface) / 100
  return surface_favorable
}

function getRoofsFeatures() {
  const roofsStore = useRoofsStore()
  const buildingRoofsFeatures = roofsStore.buildingRoofsFeatures
  if (buildingRoofsFeatures === null) return null

  const geoJSONFormat = new GeoJSON()

  const features = geoJSONFormat.readFeatures(buildingRoofsFeatures)
  return features
}

function roundResult(num: number) {
  return parseInt(num.toFixed(2))
}

function getDataRoofs(features: Feature[]) {
  const dataRoofs: RoofSurfaceModel[] = []
  features.forEach((feature, idx) => {
    const surface_id = feature.getProperty('surface_id')
    const total_surface = feature.getProperty('pan_area')
    const surface_favorable = calculateSurfaceFavorableOfRoofFeature(feature)

    dataRoofs[idx] = {
      surface_id: surface_id,
      values: [
        feature.getProperty('rang_1'),
        feature.getProperty('rang_2'),
        feature.getProperty('rang_3'),
        feature.getProperty('rang_4'),
      ],
      total: roundResult(total_surface),
      favorable: roundResult(surface_favorable),
      inclinaison: feature.getProperty('slope'),
      azimuth: feature.getProperty('azimuth'),
    }
  })
  return dataRoofs
}

function getDataBuilding(dataRoofs: RoofSurfaceModel[]) {
  let all_area = 0
  let all_area_favorable = 0
  const all_values = [0, 0, 0, 0]
  dataRoofs.forEach((dataRoof) => {
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
  const features = getRoofsFeatures()
  if (features === null) return

  const dataRoofs = getDataRoofs(features)
  const dataBuilding = getDataBuilding(dataRoofs)

  const roofDataStore = useRoofDataStore()
  await roofDataStore.setBuildingData(dataBuilding)
}
