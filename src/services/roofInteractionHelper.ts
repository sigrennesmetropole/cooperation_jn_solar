import { Fill, Stroke, Style } from 'ol/style'
import { Select } from 'ol/interaction'
import { always, click } from 'ol/events/condition'
import {
  bbox,
  bboxPolygon,
  buffer,
  difference,
  point,
  polygon,
  randomPolygon,
  square,
  transformRotate,
  transformScale,
  union,
} from '@turf/turf'
import rectangleGrid from '@turf/rectangle-grid'
import type { Feature, FeatureCollection, Properties } from '@turf/helpers'
import type olFeature from 'ol/Feature'
import type olGeometry from 'ol/geom/Geometry'
import type { GeoJSONLayer } from '@vcmap/core'
import type { LayerOpenlayersImpl } from '@vcmap/core'
import { RENNES_LAYER } from '@/stores/layers'
import { GeoJSON } from 'ol/format'
import type { Coordinate } from 'ol/coordinate'
import type { RennesApp } from '@/services/RennesApp'
import type { GeoJSONFeatureCollection } from 'ol/format/GeoJSON'
import type { GeoJsonProperties, Geometry } from 'geojson'
import booleanIntersects from '@turf/boolean-intersects'
import type { MultiPolygon } from '@turf/helpers'
import { useRoofsStore } from '@/stores/roof'

const selected = new Style({
  fill: new Fill({
    color: 'rgba(255,0,0,0.43)',
  }),
  stroke: new Stroke({
    color: 'rgba(0,0,0,0.7)',
    width: 2,
  }),
})

const gridStyle = new Style({
  fill: new Fill({
    color: 'rgba(255,255,255,0.1)',
  }),
  stroke: new Stroke({
    color: 'rgba(255,255,255,0.7)',
    width: 0.5,
  }),
})
let selectClick: Select

/**
 * Mock of the future function, which will return the shape of the roof in the right format
 */
export function generateRandomRoofShape(geoloc: Coordinate) {
  const buffered = buffer(point(geoloc), 50, { units: 'centimeters' })
  const polygon = randomPolygon(1, {
    bbox: bbox(buffered),
    num_vertices: 8,
    max_radial_length: 0.00008,
  })
  return polygon.features[0]
}

/**
 * Generate grid on the shape of the roof
 * create grid on all the bbox of the roof, then rotate
 * exclude squares which are not entirely inside the roof shape
 */
export function generateRectangleGrid(roofShape: GeoJSONFeatureCollection) {
  const roofAzimut = roofShape.features[0].properties?.azimuth
  const squareSize = 475
  const roofSlope =
    useRoofsStore().getRoofSurfaceModelOfSelectedPanRoof()?.inclinaison
  const bboxRoofShape = bbox(roofShape)
  const bboxOnRoof = bbox(
    transformScale(bboxPolygon(square(bboxRoofShape)), 1.5)
  )
  let cellWidth, cellHeight
  if (roofAzimut < 180) {
    cellHeight = squareSize
    cellWidth = squareSize * Math.cos(Number(roofSlope) * (Math.PI / 180))
  } else {
    cellWidth = squareSize
    cellHeight = squareSize * Math.cos(Number(roofSlope) * (Math.PI / 180))
  }

  const grid = rectangleGrid(bboxOnRoof, cellWidth, cellHeight, {
    units: 'millimeters',
  })

  transformRotate(grid, -roofAzimut, { mutate: true })

  grid.features = grid.features.filter((f) => {
    let intersect = false
    for (const roofShapeFeature of roofShape.features) {
      if (booleanIntersects(roofShapeFeature, f)) {
        intersect = true
        break
      }
    }
    return intersect
  })
  return grid
}

export function displayGridOnMap(
  rennesApp: RennesApp,
  geojson: FeatureCollection
) {
  const gridLayer: GeoJSONLayer = rennesApp.layers.getByKey(
    RENNES_LAYER.roofSquaresArea
  ) as GeoJSONLayer
  const format = new GeoJSON()
  const marker = format.readFeatures(geojson)
  gridLayer.addFeatures(marker)
  gridLayer.setStyle(gridStyle)
}

export function displayRoofShape(
  rennesApp: RennesApp,
  geojson: GeoJSONFeatureCollection
) {
  const roofLayer: GeoJSONLayer = rennesApp.layers.getByKey(
    RENNES_LAYER.roofShape
  ) as GeoJSONLayer
  const format = new GeoJSON()
  const marker = format.readFeatures(geojson)
  roofLayer.addFeatures(marker)
}

export function addRoofInteractionOn2dMap(rennesApp: RennesApp) {
  const map = rennesApp.getOpenlayerMap()
  const olLayer: LayerOpenlayersImpl = rennesApp.layers
    .getByKey(RENNES_LAYER.roofSquaresArea)
    ?.getImplementationsForMap(rennesApp.get2DMap())[0] as LayerOpenlayersImpl
  selectClick = new Select({
    condition: click,
    toggleCondition: always,
    style: selected,
    layers: (layer) => layer == olLayer.olLayer,
  })
  map.addInteraction(selectClick)
}

export function removeRoofInteractionOn2dMap(rennesApp: RennesApp) {
  const map = rennesApp.getOpenlayerMap()
  map.removeInteraction(selectClick)
}

export function getSquaresOfInteraction() {
  const features: olFeature[] = []
  selectClick.getFeatures().forEach((selectFeature) => {
    const reprojFeature = selectFeature
    reprojFeature.setGeometry(
      selectFeature.getGeometry()?.transform('EPSG:3857', 'EPSG:4326')
    )
    features.push(reprojFeature)
  })
  return features
}

export function unionAllRoofPan(roofPans: GeoJSONFeatureCollection) {
  // @ts-ignore
  let res: Feature<Polygon | MultiPolygon, Properties> | null =
    roofPans.features[0]!
  roofPans.features.forEach((f, idx) => {
    if (res && idx > 0) {
      // @ts-ignore
      res = union(res, f.geometry)
    }
  })
  return res
}

export function substractSquareFromRoofPanUnion(roofPans: Feature<Geometry>) {
  // @ts-ignore
  let res: Feature<Polygon | MultiPolygon> | null = roofPans
  const squares = getSquaresOfInteraction()
  squares.forEach((square) => {
    const r = square.getGeometry()?.getCoordinates()!
    if (res) {
      res = difference(res, polygon(r))
    }
  })
  return res
}

export function substractSelectedSquares(squareGrid: olFeature<olGeometry>[]) {
  // @ts-ignore

  const selectedSquares = getSquaresOfInteraction()
  return squareGrid.filter((square) => !selectedSquares.includes(square))
}

export function getSubstractedRoofArea(
  roofsPans: FeatureCollection<Geometry, GeoJsonProperties>
) {
  const union: Feature<Geometry, Properties> | null = unionAllRoofPan(roofsPans)
  let res
  if (union) {
    res = substractSquareFromRoofPanUnion(union)
  }
  return res
}

export function removeRoofGrid(rennesApp: RennesApp) {
  const gridLayer: GeoJSONLayer = rennesApp.layers.getByKey(
    RENNES_LAYER.roofSquaresArea
  ) as GeoJSONLayer
  gridLayer.removeAllFeatures()
}

export function removeRoof2dShape(rennesApp: RennesApp) {
  const roofLayer: GeoJSONLayer = rennesApp.layers.getByKey(
    RENNES_LAYER.roofShape
  ) as GeoJSONLayer
  roofLayer.removeAllFeatures()
}
