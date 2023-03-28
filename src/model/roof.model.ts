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
