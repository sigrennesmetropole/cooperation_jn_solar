import { GeoJSON } from 'ol/format'
import type { RennesApp } from '@/services/RennesApp'
import type { GeoJSONLayer } from '@vcmap/core'
import { RENNES_LAYER } from '@/stores/layers'

export function generateSolarPanel() {
  //   const solarPanelCoordinates = []

  const solarPanelDict = {
    type: 'FeatureCollection',
    vcsMeta: {
      altitudeMode: 'absolute',
      version: '2.0',
      baseUrl: 'https://service.virtualcityplanner.de/',
    },
    features: [
      {
        state: 'dynamic',
        featureType: 'simple',
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-1.72199905, 48.09093365, 55.41289708089893],
        },
        properties: {
          olcs_modelUrl:
            'https://service.virtualcityplanner.de/object-library/Vis-All/Solarmodul/Solarmodul__LOW_Solarmodul_Dachmontage.glb',
          olcs_modelPitch: -8,
          olcs_modelRoll: 26,
          olcs_modelHeading: 300,
        },
        vcsMeta: {},
      },
      {
        state: 'dynamic',
        featureType: 'simple',
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-1.72197905, 48.09093365, 55.41289708089893],
        },
        properties: {
          olcs_modelUrl:
            'https://service.virtualcityplanner.de/object-library/Vis-All/Solarmodul/Solarmodul__LOW_Solarmodul_Dachmontage.glb',
          olcs_modelPitch: -8,
          olcs_modelRoll: 26,
          olcs_modelHeading: 300,
        },
        vcsMeta: {},
      },
    ],
    featureType: 'simple',
  }

  const geojsonFormat = new GeoJSON()
  const geojson = geojsonFormat.readFeatures(solarPanelDict)

  return geojson
}

export function displaySolarPanel(rennesApp: RennesApp) {
  const solarPanelLayer: GeoJSONLayer = rennesApp.layers.getByKey(
    RENNES_LAYER.solarPanel
  ) as GeoJSONLayer

  solarPanelLayer.addFeatures(generateSolarPanel())
}

export function removeSolarPanel(rennesApp: RennesApp) {
  const solarPanel: GeoJSONLayer = rennesApp.layers.getByKey(
    RENNES_LAYER.solarPanel
  ) as GeoJSONLayer
  solarPanel.removeAllFeatures()
}
