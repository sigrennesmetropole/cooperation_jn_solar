import type { GeoJSONFeature } from 'ol/format/GeoJSON'
import GeoJSON from 'ol/format/GeoJSON'
import type { Feature } from 'ol'
import type { Geometry } from 'ol/geom'

export type RoofSurfaceModel = {
  surface_id: string
  values: number[]
  favorable: number
  total: number
  orientation?: string
  azimuth?: number
  inclinaison: number
}

export type BuildingSurfaceModel = {
  total: number
  favorable: number
  values: number[]
}

function roundResult(num: number) {
  return parseInt(num.toFixed(2))
}

function calculateSurfaceFavorableOfRoofFeature(feature: Feature<Geometry>) {
  const percentageFavorable =
    feature.getProperty('rang_3') + feature.getProperty('rang_4')
  const total_surface = feature.getProperty('pan_area')
  return (percentageFavorable * total_surface) / 100
}

function azimuthToOrientation(azimuth: number) {
  if (azimuth > 315 || azimuth <= 45) {
    return 'NORD'
  } else if (azimuth > 45 && azimuth <= 135) {
    return 'EST'
  } else if (azimuth > 135 && azimuth <= 225) {
    return 'SUD'
  } else if (azimuth > 225 && azimuth <= 315) {
    return 'OUEST'
  }
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
  }
}
