import type { Feature, Geometry, GeoJsonProperties } from 'geojson'
import type { GeoJSONFeatureCollection } from 'ol/format/GeoJSON'
import { useRoofsStore } from '@/stores/roof'
import { mapRoofSurfaceModel, type RoofSurfaceModel } from '@/model/roof.model'

class RoofWfsService {
  storeRoofsFeaturesGroupBySurfaceId(jsonResponse: GeoJSONFeatureCollection) {
    const roofStore = useRoofsStore()
    const removeDuplicateJsonResponse: Feature<Geometry, GeoJsonProperties>[] =
      []
    const surfaceIds: string[] = []
    jsonResponse.features.forEach((f) => {
      if (f.properties) {
        if (!surfaceIds.includes(f.properties['surface_id'])) {
          removeDuplicateJsonResponse.push(f)
          surfaceIds.push(f.properties['surface_id'])
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
    const baseUrl = 'https://public.sig.rennesmetropole.fr/geoserver/ows?'
    const baseParameters =
      'service=WFS&request=getFeature&typename=cli_climat:photovolta%C3%AFque_potentiel_classif_2021&outputFormat=application/json&srsName=EPSG:4326'
    const cqlFilter = "&cql_filter=buildingid='" + buildingId + "'"
    const response = await fetch(baseUrl + baseParameters + cqlFilter)
    const jsonResponse = (await response.json()) as GeoJSONFeatureCollection

    const roofStore = useRoofsStore()
    roofStore.setRoofsFeatures(jsonResponse)
    this.storeRoofsFeaturesGroupBySurfaceId(jsonResponse)

    return jsonResponse
  }
}

export const roofWfsService = new RoofWfsService()
