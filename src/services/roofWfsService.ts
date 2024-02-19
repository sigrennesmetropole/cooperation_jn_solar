import type { Feature, Geometry, GeoJsonProperties } from 'geojson'
import type { GeoJSONFeatureCollection } from 'ol/format/GeoJSON'
import { useRoofsStore } from '@/stores/roof'
import { useConfigStore } from '@/stores/config'
import { mapRoofSurfaceModel, type RoofSurfaceModel } from '@/model/roof.model'
import type { FeatureCollection } from '@turf/helpers'
import axios from 'axios'

class RoofWfsService {
  storeRoofsFeaturesGroupBySurfaceId(jsonResponse: GeoJSONFeatureCollection) {
    const roofStore = useRoofsStore()
    const configStore = useConfigStore()
    const removeDuplicateJsonResponse: Feature<Geometry, GeoJsonProperties>[] =
      []
    const surfaceIds: string[] = []
    jsonResponse.features.forEach((f) => {
      if (f.properties) {
        if (
          !surfaceIds.includes(
            f.properties[
              configStore.config?.solar.ogcServices.potentialSurfaceIdAttribute!
            ]
          )
        ) {
          removeDuplicateJsonResponse.push(f)
          surfaceIds.push(
            f.properties[
              configStore.config?.solar.ogcServices.potentialSurfaceIdAttribute!
            ]
          )
        }
      }
    })
    const res: RoofSurfaceModel[] = []
    removeDuplicateJsonResponse.forEach((feature) => {
      res.push(mapRoofSurfaceModel(feature))
    })
    roofStore.setRoofSurfacesList(res)
  }

  async fetchRoofs(buildingId: string): Promise<GeoJSONFeatureCollection> {
    const configStore = useConfigStore()
    const baseUrl = configStore.config?.common.ogcBaseUrl
    const layerPath = configStore.config?.solar.ogcServices.potentialLayer
    const filterOn =
      configStore.config?.solar.ogcServices.potentialFilterOnAttribute

    const baseParameters = `service=WFS&request=getFeature&typename=${layerPath}&outputFormat=application/json&srsName=EPSG:4326`
    const cqlFilter = `&cql_filter=${filterOn}='${buildingId}'`
    const response = await fetch(baseUrl + baseParameters + cqlFilter)
    const jsonResponse = (await response.json()) as GeoJSONFeatureCollection

    const roofStore = useRoofsStore()
    roofStore.setRoofsFeatures(jsonResponse)
    this.storeRoofsFeaturesGroupBySurfaceId(jsonResponse)

    return jsonResponse
  }

  async fetch2dRoofShapeFromWfs(
    surface_id: string
  ): Promise<FeatureCollection> {
    const configStore = useConfigStore()

    const baseUrl = configStore.config?.common.ogcBaseUrl
    const layerPath = configStore.config?.solar.ogcServices.roofLayer
    const filterOn = configStore.config?.solar.ogcServices.roofFilterOnAttribute
    const baseParameters = `service=WFS&request=getFeature&typename=${layerPath}&outputFormat=application/json&srsName=EPSG:4326`
    const cqlFilter = `&cql_filter=${filterOn}='${surface_id}'`

    const response = await axios.get(baseUrl + baseParameters + cqlFilter)
    return response.data as FeatureCollection
  }
}

export const roofWfsService = new RoofWfsService()
