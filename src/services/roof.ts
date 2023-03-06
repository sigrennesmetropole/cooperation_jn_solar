import type { RoofSurface } from '@/model/roof.model'
import { roofSurfaceFixtures } from '@/model/roof.fixtures'

class ApiClientService {
  async fetchRoofSurfaceFixtures() {
    return new Promise<RoofSurface[]>((resolve) => {
      resolve(roofSurfaceFixtures())
    })
  }
}

export const apiClientService = new ApiClientService()
