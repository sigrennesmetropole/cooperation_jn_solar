import { Fill, Icon, Stroke, Style } from 'ol/style'
import { Select } from 'ol/interaction'
import { always, click } from 'ol/events/condition'
import {
  bbox,
  bboxPolygon,
  booleanEqual,
  booleanPointInPolygon,
  buffer,
  center,
  difference,
  feature,
  featureCollection,
  point,
  polygon,
  randomPolygon,
  square,
  transformRotate,
  transformScale,
  union,
} from '@turf/turf'
import type {
  AllGeoJSON,
  BBox,
  Feature,
  FeatureCollection,
  MultiPolygon,
  Point,
  Polygon as turfPolygon,
  Properties,
  GeometryCollection,
} from '@turf/helpers'
// @ts-ignore
import { rectangleGrid } from '@/helpers/rectangleGrid'
import type { Grid } from '@/helpers/rectangleGrid'
import type olFeature from 'ol/Feature'
import type olGeometry from 'ol/geom/Geometry'
import type { GeoJSONLayer, LayerOpenlayersImpl } from '@vcmap/core'
import { RENNES_LAYER } from '@/stores/layers'
import { GeoJSON } from 'ol/format'
import type { Coordinate } from 'ol/coordinate'
import type { RennesApp } from '@/services/RennesApp'
import type { GeoJSONFeatureCollection } from 'ol/format/GeoJSON'
import type { GeoJsonProperties, Geometry } from 'geojson'
import { useRoofsStore } from '@/stores/roof'
import type { Polygon } from 'ol/geom'

import checkIcon from '@/assets/icons/checkicon.png'

const selected = new Style({
  geometry: function (feature) {
    const geometry: Polygon = feature.getGeometry() as Polygon
    const geometryType = geometry.getType()
    return geometryType == 'Polygon'
      ? geometry.getInteriorPoint()
      : geometryType == 'MultiPolygon'
      ? geometry.getInteriorPoint()
      : geometry
  },
  image: new Icon({
    anchor: [0.5, 0.5],
    anchorXUnits: 'fraction',
    anchorYUnits: 'fraction',
    src: checkIcon,
  }),
})

const gridStyle = new Style({
  fill: new Fill({
    color: 'rgba(79, 70, 229, 0.2)',
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

export function bboxRoof(roofShape: GeoJSONFeatureCollection): BBox {
  const bboxRoofShape = bbox(roofShape)
  return bbox(transformScale(bboxPolygon(square(bboxRoofShape)), 1.5))
}
/**
 * Generate grid on the shape of the roof
 * create grid on all the bbox of the roof, then rotate
 * exclude squares which are not entirely inside the roof shape
 */
export function generateRectangleGrid(
  roofShape: GeoJSONFeatureCollection,
  bboxOnRoof: BBox
): Grid {
  const roofAzimut = roofShape.features[0].properties?.azimuth
  const squareSize = 475
  const roofSlope =
    useRoofsStore().getRoofSurfaceModelOfSelectedPanRoof()?.inclinaison
  const cellWidth = squareSize
  const cellHeight = squareSize * Math.cos(Number(roofSlope) * (Math.PI / 180))

  const { rows, columns, featureCollection } = rectangleGrid(
    bboxOnRoof,
    cellWidth,
    cellHeight,
    {
      units: 'millimeters',
    }
  )
  transformRotate(featureCollection, roofAzimut, { mutate: true })
  featureCollection.features.map(
    (f: Feature) => (f.properties!.center = center(f.geometry).geometry)
  )
  return { rows, columns, featureCollection: featureCollection }
}

export type Square = {
  usable: boolean
  squareCenter: Point
}

export type Matrix = Square[][]

export function filterGrid(roofShape: GeoJSONFeatureCollection, grid: Grid) {
  //TODO: remove featureArray, for test
  const featureArray: Feature[] = []
  let x = 0,
    y = 0
  const matrix: Matrix = []
  const arrFeatures: Array<Feature<Geometry, Properties>> = []
  // @ts-ignore
  grid.featureCollection.features.forEach((f, index: number) => {
    let isInside: boolean = false
    const centerGridCase = center(f as AllGeoJSON)
    if (x == 0) {
      matrix[y] = []
    }
    for (const roofShapeFeature of roofShape.features) {
      if (
        booleanPointInPolygon(
          centerGridCase,
          roofShapeFeature.geometry as turfPolygon
        )
      ) {
        isInside = true
      }
    }
    if (isInside) {
      arrFeatures.push(f as Feature<Geometry, Properties>)
    }
    featureArray[index] = feature(centerGridCase.geometry, {
      usable: isInside,
      rowIndex: y,
      colIndex: x,
    })
    matrix[y][x] = {
      usable: isInside,
      squareCenter: centerGridCase.geometry,
    }
    y = (y + 1) % grid.rows
    if (y == 0) {
      x = (x + 1) % grid.columns
    }
  })
  // @ts-ignore
  grid.featureCollection = featureCollection(arrFeatures)
  console.log(
    'Geojson Result (non filtered by box remove)',
    featureCollection(featureArray)
  )
  return { grid, matrix }
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
      // @ts-ignore
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

export function substractSelectedSquaresFromGrid(squareGrid: Matrix) {
  // @ts-ignore
  const selectedSquares = getSquaresOfInteraction()
  let x, y
  for (x = 0; x < squareGrid.length; x++) {
    for (y = 0; y < squareGrid[x].length; y++) {
      for (const selectedSquare of selectedSquares) {
        const center = selectedSquare.getProperty('center') as Point
        if (booleanEqual(center, squareGrid[x][y].squareCenter as Point)) {
          squareGrid[x][y].usable = false
          break
        }
      }
    }
  }
}

export function getSubstractedRoofArea(
  roofsPans: FeatureCollection<Geometry, GeoJsonProperties>
) {
  // @ts-ignore
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
