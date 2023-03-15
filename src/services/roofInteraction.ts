import { Fill, Stroke, Style } from 'ol/style'
import { Select } from 'ol/interaction'
import { always, click } from 'ol/events/condition'
import { bbox, buffer, point, squareGrid } from '@turf/turf'
import type { FeatureCollection } from '@turf/helpers'
import type { GeoJSONLayer } from '@vcmap/core'
import { RENNES_LAYER } from '@/stores/layers'
import { GeoJSON } from 'ol/format'
import type { Coordinate } from 'ol/coordinate'
import type { RennesApp } from '@/services/RennesApp'

const selected = new Style({
  fill: new Fill({
    color: '#ff0000',
  }),
  stroke: new Stroke({
    color: 'rgba(0,0,0,0.7)',
    width: 2,
  }),
})

// select interaction working on "click"
const selectClick = new Select({
  condition: click,
  toggleCondition: always,
  style: selected,
})

export async function generateSquareGrid(
  rennesApp: RennesApp,
  geoloc: Coordinate
) {
  console.log('Generate Square grid', point(geoloc))
  const buffered = buffer(point(geoloc), 500, { units: 'centimeters' })
  const bboxOnRoof = bbox(buffered)
  const grid = squareGrid(bboxOnRoof, 90, { units: 'centimeters' })
  return grid
}
export async function displayGridOnMap(
  rennesApp: RennesApp,
  geojson: FeatureCollection
) {
  const gridLayer: GeoJSONLayer = rennesApp.layers.getByKey(
    RENNES_LAYER.roofSquaresArea
  ) as GeoJSONLayer
  const format = new GeoJSON()
  const marker = format.readFeatures(geojson)
  gridLayer.addFeatures(marker)
}

export async function addRoofInteractionOn2dMap(rennesApp: RennesApp) {
  const map = rennesApp.getOpenlayerMap()
  map.addInteraction(selectClick)
}

export async function removeRoofInteractionOn2dMap(rennesApp: RennesApp) {
  const map = rennesApp.getOpenlayerMap()
  map.removeInteraction(selectClick)
}
