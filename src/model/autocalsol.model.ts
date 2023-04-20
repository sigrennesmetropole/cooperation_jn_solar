export type AutocalsolData = {
  latitude: number
  longitude: number
  slope: number
  azimuth: number
  annual_consumption: number
  peak_power: number
}

export type AutocalsolResult = {
  prodByMonth: number[]
  consoByMonth: number[]
  prodByHour: [string, number | string][]
  consoByHour: [string, number | string][]
}

/**
 * The value for the azimuth is between -180 and 180 for autocalsol
 * With : East = -90, West = 90, South = 0
 */
export function azimuthForAutocalsol(azimuth: number) {
  if (azimuth <= 180) {
    return -azimuth
  } else {
    // azimuth > 180
    return azimuth - 180
  }
}
