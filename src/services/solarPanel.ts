import { GeoJSON } from 'ol/format'
import type { RennesApp } from '@/services/RennesApp'
import { GeoJSONLayer, Viewpoint } from '@vcmap/core'
import { RENNES_LAYER } from '@/stores/layers'
import type { SolarPanelModel } from '@/model/solarPanel.model'
import { cloneViewPointAndResetCameraPosition } from '@/services/viewPointHelper'
import solarPanel3D from '@/assets/3d/Solarmodul__LOW_Solarmodul_Dachmontage.glb'
import { useSolarPanelStore } from '@/stores/solarPanels'
import type { SolarPanelGrid } from '@/algorithm/solarPanelPlacement'
import type { Matrix } from './roofInteractionHelper'
import { center, points } from '@turf/turf'
import { getNumberFromConfig } from '@/services/configService'
import type { Feature, Properties, Point, Position } from '@turf/turf'
import { useRoofsStore } from '@/stores/roof'

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
      // The size of the 3d model is 1900x1000, the real solar panel is 1900x950
      // We need to scale by 0.95 for the widht (y-axis)
      olcs_modelScaleY: 0.95,
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
  // @ts-ignore
  const peakPower =
    solarPanelStore.currentNumberSolarPanel *
    getNumberFromConfig('solar_panel.solar_panel_power')
  return Math.round(peakPower * 100) / 100
}

export async function solarPanelGridToSolarPanelModel(
  rennesApp: RennesApp,
  matrixGrid: Matrix,
  solarPanelGrids: SolarPanelGrid[],
  orientation: string,
  roofInclinaison: number = 45,
  roofAzimut: number = 0
) {
  const solarPanelModels: SolarPanelModel[] = []
  const positions: number[][] = []
  for (let i = 0; i < solarPanelGrids.length; i++) {
    const spg = solarPanelGrids[i]
    const index = i

    const center = getSolarPanelGridCenter(matrixGrid, spg)

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
      index: index,
      x: center.geometry.coordinates[0],
      y: center.geometry.coordinates[1],
      z: 40, // Will be replaced later, just for placeholder
      pitch: pitch,
      roll: roll,
      heading: heading,
    }
    solarPanelModels.push(solarPanelModel)
    positions.push([solarPanelModel.x, solarPanelModel.y])
  }

  let offset = HeightOffset
  if (isRoofFlat()) {
    offset += 0.2
  }
  for (let i = 0; i < solarPanelModels.length; i++) {
    const newHeight = await rennesApp.getHeight(
      solarPanelModels[i].x,
      solarPanelModels[i].y
    )
    solarPanelModels[i].z = newHeight + offset
  }

  return solarPanelModels
}

// Get the center of the SolarPanelGrid
function getSolarPanelGridCenter(
  gridMatrix: Matrix,
  solarPanelGrid: SolarPanelGrid
): Feature<Point, Properties> {
  const positions: Position[] = []
  solarPanelGrid.forEach((grid) => {
    const squareGrid = gridMatrix[grid[0]][grid[1]]
    positions.push(squareGrid.squareCenter.coordinates)
  })
  const features = points(positions)
  return center(features)
}

function isRoofFlat() {
  const roofsStore = useRoofsStore()
  const anamorphos = roofsStore.getAnamorphosOfSelectedRoof()
  if (!anamorphos) {
    return false
  }
  return anamorphos >= 99.5
}

export function getInclinaisonSolarPanel(selectedRoofInclinaison: number) {
  if (isRoofFlat()) {
    return getNumberFromConfig('solar_panel.inclinaison_on_flat_roof')
  }
  return selectedRoofInclinaison
}

export function getAzimuthSolarPanel(selectedRoofAzimuth: number) {
  if (isRoofFlat()) {
    return getNumberFromConfig('solar_panel.azimuth_on_flat_roof')
  }
  return selectedRoofAzimuth
}
