import { apiService } from '@/services/api'
import type { GeoJSONFeatureCollection } from 'ol/format/GeoJSON'

class ApiGridService {
  async getGrid(roofShape: GeoJSONFeatureCollection, roofSlope: number) {
    const data = await apiService.callApiPost(
      `/api/grid`,
      {
        roofShape: roofShape,
        roofSlope: roofSlope,
      },
      {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      }
    )
    return data
  }
}

export const apiGridService = new ApiGridService()
