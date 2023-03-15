import type { RoofSurfaceModel } from '@/model/roof.model'
import { roofSurfaceFixtures } from '@/model/roof.fixtures'

class ApiClientService {
  async fetchRoofSurfaceFixtures() {
    return new Promise<RoofSurfaceModel[]>((resolve) => {
      resolve(
        roofSurfaceFixtures().sort((a, b) =>
          a.favorable < b.favorable ? 1 : -1
        )
      )
    })
  }
}

export const apiClientService = new ApiClientService()
