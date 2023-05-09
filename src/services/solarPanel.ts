import { GeoJSON } from 'ol/format'
import type { RennesApp } from '@/services/RennesApp'
import { GeoJSONLayer, GlobalHider, Viewpoint } from '@vcmap/core'
import { RENNES_LAYER } from '@/stores/layers'
import type { SolarPanelModel } from '@/model/solarPanel.model'
import { cloneViewPointAndResetCameraPosition } from '@/services/viewPointHelper'
import solarPanel3D from '@/assets/3d/Solarmodul__LOW_Solarmodul_Dachmontage.glb'
import { SOLAR_PANEL_POWER } from '@/model/solarPanel.model'
import { useSolarPanelStore } from '@/stores/solarPanels'
import type { SolarPanelGrid } from '@/algorithm/solarPanelPlacement'
import type { Matrix } from './roofInteractionHelper'
import { center, points } from '@turf/turf'

import type { Feature, Properties, Point, Position } from '@turf/turf'

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

export function solarPanelGridToSolarPanelModel(
  matrixGrid: Matrix,
  solarPanelGrids: SolarPanelGrid[],
  orientation: string,
  roofInclinaison: number = 45,
  roofAzimut: number = 0
): SolarPanelModel[] {
  const solarPanelModels: SolarPanelModel[] = []
  console.log(
    `roofInclinaison: ${roofInclinaison}, roofAzimut: ${roofAzimut}, orientation ${orientation}`
  )
  console.log(solarPanelGrids)
  solarPanelGrids.forEach((spg: SolarPanelGrid, index: number) => {
    // if (index > 5) {
    //   return
    // }
    const center = getSolarPanelGridCenter(matrixGrid, spg)
    const baseHeight = 45 // Hardcoded for now, we need to compute the height based on the solar panel index
    const heightIndex = getSolarPanelGridHeightIndex(spg)
    // sin(a) cos(a) = 0.5 * sin(2a)
    const height =
      baseHeight -
      heightIndex *
        0.5 *
        Math.sin(2 * Number(roofInclinaison) * (Math.PI / 180)) *
        0.475

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
    console.log(`Height: ${height}, heightIndex: ${heightIndex}`)
    const solarPanelModel: SolarPanelModel = {
      index: index,
      x: center.geometry.coordinates[0],
      y: center.geometry.coordinates[1],
      z: height,
      pitch: pitch,
      roll: roll,
      heading: heading,
    }
    solarPanelModels.push(solarPanelModel)
  })
  console.log(solarPanelModels)
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

function getSolarPanelGridHeightIndex(solarPanelGrid: SolarPanelGrid) {
  const heightIndexes: number[] = []
  solarPanelGrid.forEach((grid) => {
    heightIndexes.push(grid[0])
  })
  return Math.min(...heightIndexes)
}
