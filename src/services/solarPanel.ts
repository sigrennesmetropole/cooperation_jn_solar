import { GeoJSON } from 'ol/format'
import type { RennesApp } from '@/services/RennesApp'
import { GeoJSONLayer, Viewpoint } from '@vcmap/core'
import { RENNES_LAYER } from '@/stores/layers'
import type { SolarPanelModel } from '@/model/solarPanel.model'
import { cloneViewPointAndResetCameraPosition } from '@/services/viewPointHelper'
import solarPanel3D from '@/assets/3d/panneau.glb'
import { useSolarPanelStore } from '@/stores/solarPanels'
import type { Matrix } from './roofInteractionHelper'
import type { Point } from 'ol/geom'
import { useConfigStore } from '@/stores/config'

const HeightOffset = 0.2

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
      olcs_altitudeMode: 'absolute',

      // The size of the 3d model is 1900x1000, the real solar panel is 1900x950
      // We need to scale by 0.95 for the widht (y-axis)
      olcs_modelScaleY: 0.88,
      olcs_modelScaleX: 0.99,
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
    solarPanelJSON.features.push(spObject as unknown as Point)
  })

  const geojsonFormat = new GeoJSON()
  return geojsonFormat.readFeatures(solarPanelJSON)
}

export async function initializeSolarPanelLayer(
  rennesApp: RennesApp,
  solarPanels: SolarPanelModel[]
) {
  const solarPanel: GeoJSONLayer = await rennesApp.getLayerByKey(
    RENNES_LAYER.solarPanel
  )
  solarPanel.removeAllFeatures()
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
    if (viewpoint) {
      const newExtent = cloneViewPointAndResetCameraPosition(viewpoint, 100)
      newExtent.pitch = -45
      await rennesApp.maps.activeMap!.gotoViewpoint(newExtent)
    }
  }
}

export async function filterSolarPanelByMaxSolarPanel(
  rennesApp: RennesApp,
  maxSolarPanel: number
) {
  const solarPanel: GeoJSONLayer = await rennesApp.getLayerByKey(
    RENNES_LAYER.solarPanel
  )
  if (solarPanel) {
    const hidden_indexes: (string | number)[] = []
    const shown_indexes: (string | number)[] = []
    solarPanel.getFeatures().forEach((f) => {
      const index = f.getProperties()['index']
      const fid = f.getId()
      if (fid != undefined) {
        if (index >= maxSolarPanel) {
          hidden_indexes.push(fid)
        } else {
          shown_indexes.push(fid)
        }
      }
    })
    solarPanel.featureVisibility.hideObjects(hidden_indexes)
    solarPanel.featureVisibility.showObjects(shown_indexes)
  }
}

export function getPeakPower() {
  const solarPanelStore = useSolarPanelStore()
  const configStore = useConfigStore()
  // @ts-ignore
  const peakPower =
    solarPanelStore.currentNumberSolarPanel *
    configStore.config?.solar.solar_panel.solar_panel_power!
  return Math.round(peakPower * 100) / 100
}

export async function solarPanelGridToSolarPanelModel(
  rennesApp: RennesApp,
  usableIds: Matrix,
  orientation: string,
  roofInclinaison: number = 45,
  roofAzimut: number = 0
) {
  const solarPanelModels: SolarPanelModel[] = []
  const positions: number[][] = []
  let index: number = 0
  const offset = HeightOffset

  for (let i = 0; i < usableIds.length; i++) {
    let pitch
    let roll
    let heading

    if (orientation === 'vertical') {
      pitch = 0
      roll = -roofInclinaison
      heading = roofAzimut
    } else {
      pitch = -roofInclinaison
      roll = 0
      heading = roofAzimut - 90
    }

    const solarPanelModel: SolarPanelModel = {
      index: index++,
      x: usableIds[i].squareCenter.coordinates[0],
      y: usableIds[i].squareCenter.coordinates[1],
      z: 40, // Will be replaced later, just for placeholder
      pitch: pitch,
      roll: roll,
      heading: heading,
    }
    const newHeight = await rennesApp.getHeight(
      solarPanelModel.x,
      solarPanelModel.y
    )
    solarPanelModel.z = newHeight + offset

    solarPanelModels.push(solarPanelModel)
    positions.push([solarPanelModel.x, solarPanelModel.y])
  }
  return solarPanelModels
}

export function getInclinaisonSolarPanel(selectedRoofInclinaison: number) {
  return selectedRoofInclinaison
}

export function getAzimuthSolarPanel(selectedRoofAzimuth: number) {
  // fix for angle reproj on the fly: average diff on Rennes between 3857-3948
  return selectedRoofAzimuth - 3.47
}
