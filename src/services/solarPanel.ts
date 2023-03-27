import { GeoJSON } from 'ol/format'
import type { RennesApp } from '@/services/RennesApp'
import { GeoJSONLayer, GlobalHider, Viewpoint } from '@vcmap/core'
import { RENNES_LAYER } from '@/stores/layers'
import type { SolarPanelModel } from '@/model/solarPanel.model'
import { cloneViewPointAndResetCameraPosition } from '@/helpers/viewpointHelper'

function solarPanelModelToDict(solarPanel: SolarPanelModel) {
  return {
    state: 'dynamic',
    featureType: 'simple',
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [solarPanel.x, solarPanel.y, solarPanel.z],
    },
    properties: {
      index: solarPanel.index,
      olcs_modelUrl:
        'https://service.virtualcityplanner.de/object-library/Vis-All/Solarmodul/Solarmodul__LOW_Solarmodul_Dachmontage.glb',
      olcs_modelPitch: solarPanel.pitch,
      olcs_modelRoll: solarPanel.roll,
      olcs_modelHeading: solarPanel.heading,
    },
    vcsMeta: {},
  }
}

export function generateSolarPanel(solarPanels: SolarPanelModel[]) {
  const solarPanelJSON = {
    type: 'FeatureCollection',
    vcsMeta: {
      altitudeMode: 'absolute',
      version: '2.0',
    },
    features: [] as {}[],
    featureType: 'simple',
  }

  solarPanels.forEach((sp) => {
    const spObject = solarPanelModelToDict(sp)
    solarPanelJSON.features.push(spObject)
  })

  const geojsonFormat = new GeoJSON()
  const geojson = geojsonFormat.readFeatures(solarPanelJSON)

  return geojson
}

export function displaySolarPanel(
  rennesApp: RennesApp,
  solarPanels: SolarPanelModel[]
) {
  const solarPanelLayer: GeoJSONLayer = rennesApp.layers.getByKey(
    RENNES_LAYER.solarPanel
  ) as GeoJSONLayer

  solarPanelLayer.addFeatures(generateSolarPanel(solarPanels))
}

export function removeSolarPanel(rennesApp: RennesApp) {
  const solarPanel: GeoJSONLayer = rennesApp.layers.getByKey(
    RENNES_LAYER.solarPanel
  ) as GeoJSONLayer
  solarPanel.removeAllFeatures()
}

export function zoomToSolarPanel(rennesApp: RennesApp) {
  const solarPanel: GeoJSONLayer = rennesApp.layers.getByKey(
    RENNES_LAYER.solarPanel
  ) as GeoJSONLayer
  const extent = solarPanel.getZoomToExtent()
  if (extent) {
    const viewpoint = Viewpoint.createViewpointFromExtent(extent!)
    const newExtent = cloneViewPointAndResetCameraPosition(viewpoint, 100)
    newExtent.pitch = -45
    rennesApp.maps.activeMap.gotoViewpoint(newExtent)
  }
}

export async function filterSolarPanelByMaxSolarPanel(
  rennesApp: RennesApp,
  maxSolarPanel: number
) {
  const solarPanel: GeoJSONLayer = rennesApp.layers.getByKey(
    RENNES_LAYER.solarPanel
  ) as GeoJSONLayer
  solarPanel.setGlobalHider(new GlobalHider())
  const featuresToHide = solarPanel
    .getFeatures()
    .filter((f) => f.getProperties()['index'] >= maxSolarPanel)
    .map((f) => f.getId()!)
  console.log(`maxSolarPanel: ${maxSolarPanel}`)
  console.log(`features ids: ${solarPanel.getFeatures().map((f) => f.getId())}`)
  console.log(
    `features index: ${solarPanel
      .getFeatures()
      .map((f) => f.getProperties()['index'])}`
  )
  console.log(`featuresToHide: ${featuresToHide}`)

  solarPanel.featureVisibility.hideObjects(featuresToHide)
}
