import { GeoJSON } from 'ol/format'
import type { RennesApp } from '@/services/RennesApp'
import { GeoJSONLayer, GlobalHider, Viewpoint } from '@vcmap/core'
import { RENNES_LAYER } from '@/stores/layers'
import type { SolarPanelModel } from '@/model/solarPanel.model'
import { cloneViewPointAndResetCameraPosition } from '@/helpers/viewPointHelper'
import solarPanel3D from '@/assets/3d/Solarmodul__LOW_Solarmodul_Dachmontage.glb'
import { SOLAR_PANEL_POWER } from '@/model/solarPanel.model'
import { useSolarPanelStore } from '@/stores/solarPanels'

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
      olcs_modelUrl: solarPanel3D,
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

export async function displaySolarPanel(
  rennesApp: RennesApp,
  solarPanels: SolarPanelModel[]
) {
  const solarPanel: GeoJSONLayer = await rennesApp.getLayerByKey(
    RENNES_LAYER.solarPanel
  )

  solarPanel.addFeatures(generateSolarPanel(solarPanels))
}

export function removeSolarPanel(rennesApp: RennesApp) {
  const solarPanel: GeoJSONLayer = rennesApp.layers.getByKey(
    RENNES_LAYER.solarPanel
  ) as GeoJSONLayer
  solarPanel.removeAllFeatures()
}

export async function zoomToSolarPanel(rennesApp: RennesApp) {
  const solarPanel: GeoJSONLayer = await rennesApp.getLayerByKey(
    RENNES_LAYER.solarPanel
  )
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
  const solarPanel: GeoJSONLayer = await rennesApp.getLayerByKey(
    RENNES_LAYER.solarPanel
  )
  solarPanel.setGlobalHider(new GlobalHider())
  solarPanel.featureVisibility.clearHiddenObjects()
  // Note(IS): We use 0-th index for the solar panel
  const featuresToHide = solarPanel
    .getFeatures()
    .filter((f) => f.getProperties()['index'] >= maxSolarPanel)
    .map((f) => f.getId()!)
  solarPanel.featureVisibility.hideObjects(featuresToHide)
}

export function getPeakPower() {
  const solarPanelStore = useSolarPanelStore()
  const peakPower = solarPanelStore.currentNumberSolarPanel * SOLAR_PANEL_POWER
  return Math.round(peakPower * 100) / 100
}
