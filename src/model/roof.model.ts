import type { GeoJSONFeature } from 'ol/format/GeoJSON'
import GeoJSON from 'ol/format/GeoJSON'
import type { Feature } from 'ol'
import type { Geometry } from 'ol/geom'
import { useRoofsStore } from '@/stores/roof'

export type RoofSurfaceModel = {
  surface_id: string
  values: number[]
  favorable: number
  total: number
  orientation?: string
  azimuth?: number
  inclinaison: number
  total_building: number
}

export type BuildingSurfaceModel = {
  total: number
  favorable: number
  values: number[]
}

function roundResult(num: number) {
  num = num * 10
  num = num + 1
  num = parseInt(num.toFixed(3))
  num = num / 10
  return num
}

function calculateSurfaceFavorableOfRoofFeature(feature: Feature<Geometry>) {
  const percentageFavorable =
    feature.getProperty('rang_3') + feature.getProperty('rang_4')
  const total_surface = feature.getProperty('pan_area')
  return (percentageFavorable * total_surface) / 100
}

function azimuthToOrientation(azimuth: number) {
  if (azimuth > 337.5 || azimuth <= 22.5) {
    return 'NORD'
  } else if (azimuth > 22.5 && azimuth <= 67.5) {
    return 'NORD-EST'
  } else if (azimuth > 67.5 && azimuth <= 112.5) {
    return 'EST'
  } else if (azimuth > 112.5 && azimuth <= 157.5) {
    return 'SUD-EST'
  } else if (azimuth > 157.5 && azimuth <= 202.5) {
    return 'SUD'
  } else if (azimuth > 202.5 && azimuth <= 247.5) {
    return 'SUD-OUEST'
  } else if (azimuth > 247.5 && azimuth <= 292.5) {
    return 'OUEST'
  } else if (azimuth > 292.5 && azimuth <= 337.5) {
    return 'NORD-OUEST'
  }
}

export function oppositeAzimuth(azimuth: number) {
  const newAzimuth = (azimuth + 180) % 360
  return newAzimuth
}

export function mapRoofSurfaceModel(geojson: GeoJSONFeature): RoofSurfaceModel {
  const geoJSONFormat = new GeoJSON()
  const feature = geoJSONFormat.readFeature(geojson)
  return {
    surface_id: feature.getProperty('surface_id'),
    values: [
      feature.getProperty('rang_1'),
      feature.getProperty('rang_2'),
      feature.getProperty('rang_3'),
      feature.getProperty('rang_4'),
    ],
    favorable: roundResult(calculateSurfaceFavorableOfRoofFeature(feature)),
    total: roundResult(feature.getProperty('pan_area')),
    orientation: azimuthToOrientation(feature.getProperty('azimuth')),
    azimuth: feature.getProperty('azimuth'),
    inclinaison: feature.getProperty('slope'),
    total_building: roundResult(feature.getProperty('all_area')),
  }
}

export function getDataBuilding() {
  let all_area_building: number = 0
  let all_area_roof: number = 0
  let all_area_favorable: number = 0
  const all_values = [0, 0, 0, 0]
  const roofsStore = useRoofsStore()
  roofsStore.roofSurfacesList?.forEach((surface: RoofSurfaceModel) => {
    if (all_area_building === 0) {
      all_area_building = surface.total_building
    }
    all_area_roof = parseFloat((all_area_roof + surface.total).toFixed(2))
    all_area_favorable = parseFloat(
      (all_area_favorable + surface.favorable).toFixed(2)
    )

    for (let i = 0; i < 4; i++) {
      all_values[i] += parseFloat(
        ((surface.values[i] * surface.total) / 100).toFixed(2)
      )
    }
  })

  // Sometimes the size of the building does not correspond to the sum of the sizes of the different roofs
  // It's related to the fact that some roofs don't have solar potential
  // To correct this, one must make the difference between all_area_building and all_area_roof and add this difference to the solar non-potential
  if (all_area_building != all_area_roof) {
    all_values[0] = all_values[0] + (all_area_building - all_area_roof)
  }
  for (let i = 0; i < 4; i++) {
    all_values[i] = (all_values[i] * 100) / all_area_building
  }

  return {
    total: all_area_building,
    favorable: all_area_favorable,
    values: all_values,
  }
}
