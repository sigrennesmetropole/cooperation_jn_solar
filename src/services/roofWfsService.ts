import type { GeoJSONFeatureCollection } from 'ol/format/GeoJSON'

class RoofWfsService {
  async fetchRoofs(buildingId: string): Promise<GeoJSONFeatureCollection> {
    const baseUrl = 'https://public.sig.rennesmetropole.fr/geoserver/ows?'
    const baseParameters =
      'service=WFS&request=getFeature&typename=cli_climat:photovolta%C3%AFque_potentiel_classif_2021&outputFormat=application/json&srsName=EPSG:4326'
    const cqlFilter = "&cql_filter=buildingid='" + buildingId + "'"
    const response = await fetch(baseUrl + baseParameters + cqlFilter)
    return await response.json()
  }
}

export const roofWfsService = new RoofWfsService()
