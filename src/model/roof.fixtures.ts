import type { RoofSurfaceModel } from './roof.model'

export const roofSurfaceFixtures = (): RoofSurfaceModel[] => [
  {
    surface_id: '1',
    values: [10, 20, 30, 40],
    favorable: 44,
    total: 90,
    orientation: 'Sud',
    inclinaison: 47.9,
  },
  {
    surface_id: '2',
    values: [40, 30, 20, 10],
    favorable: 30,
    total: 87,
    orientation: 'Nord',
    inclinaison: 49,
  },
]
