import type { RoofSurfaceModel } from '@/model/roof.model'
import { roofSurfaceFixtures } from '@/model/roof.fixtures'

class ApiClientService {
  async fetchRoofSurfaceFixtures() {
    return new Promise<RoofSurfaceModel[]>((resolve) => {
      resolve(roofSurfaceFixtures())
    })
  }
}

export const apiClientService = new ApiClientService()
