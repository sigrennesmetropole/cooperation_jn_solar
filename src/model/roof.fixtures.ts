import type { RoofSurfaceModel } from './roof.model'

export const roofSurfaceFixtures = (): RoofSurfaceModel[] => [
  {
    values: [10, 20, 30, 40],
    favorable: 44,
    total: 90,
    orientation: 'Sud',
    incliniasion: 47.9,
  },
  {
    values: [40, 30, 20, 10],
    favorable: 30,
    total: 87,
    orientation: 'Nord',
    incliniasion: 49,
  },
]
