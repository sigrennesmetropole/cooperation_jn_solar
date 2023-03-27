export type RoofSurfaceModel = {
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
