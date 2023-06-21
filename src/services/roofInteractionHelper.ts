import { Fill, Icon, Stroke, Style } from 'ol/style'
import {
  bbox,
  bboxPolygon,
  booleanEqual,
  booleanPointInPolygon,
  buffer,
  center,
  difference,
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
import type { Geometry } from 'geojson'
import { useRoofsStore } from '@/stores/roof'
import type { Polygon } from 'ol/geom'
import checkIcon from '@/assets/icons/checkicon.png'
import { OlDragSquaresInteraction } from '@/interactions/olDragSquaresInteraction'
import type { Vector as VectorLayer } from 'ol/layer'
import type { Vector as VectorSource } from 'ol/source'

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
// let selectClick: Select
let dragSquaresInteraction: OlDragSquaresInteraction

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
  roofSlope: number,
  bboxOnRoof: BBox,
  squareSize: number,
  roofAzimuth: number
): Grid {
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
  transformRotate(featureCollection, roofAzimuth, { mutate: true })
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
  let x = 0,
    y = 0
  const matrix: Matrix = []
  const arrFeatures: Array<Feature<Geometry, Properties>> = []
  // @ts-ignore
  grid.featureCollection.features.forEach((f) => {
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

export function addRoofInteractionOn2dMap(
  rennesApp: RennesApp,
  previouslySelected: olFeature<olGeometry>[]
) {
  const map = rennesApp.getOpenlayerMap()
  const olLayer: LayerOpenlayersImpl = rennesApp.layers
    .getByKey(RENNES_LAYER.roofSquaresArea)
    ?.getImplementationsForMap(rennesApp.get2DMap())[0] as LayerOpenlayersImpl
  dragSquaresInteraction = new OlDragSquaresInteraction(
    olLayer.getOLLayer() as VectorLayer<VectorSource>,
    previouslySelected,
    selected
  )
  map.addInteraction(dragSquaresInteraction)
}

export function clearSquareInteractionOn2dMap(rennesApp: RennesApp) {
  const map = rennesApp.getOpenlayerMap()
  map.getInteractions().forEach((interaction) => {
    if (interaction instanceof OlDragSquaresInteraction) {
      interaction.unselectEverything()
    }
  })
}
export function removeRoofInteractionOn2dMap(rennesApp: RennesApp) {
  const map = rennesApp.getOpenlayerMap()
  map.getInteractions().forEach((interaction) => {
    if (interaction instanceof OlDragSquaresInteraction) {
      map.removeInteraction(interaction)
    }
  })
}

export function getSquaresOfInteraction() {
  const features: olFeature[] = []
  dragSquaresInteraction.getSelected().forEach((selectFeature) => {
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

export function substractSelectedSquaresFromGrid(squareGrid: Matrix) {
  // @ts-ignore
  const selectedSquares = getSquaresOfInteraction()
  const roofsStore = useRoofsStore()
  roofsStore.previouslySelected = selectedSquares

  let x, y
  for (x = 0; x < squareGrid.length; x++) {
    if (selectedSquares.length == 0) {
      break
    }
    for (y = 0; y < squareGrid[x].length; y++) {
      // Only check if the square is usable because we want to set the
      // usable to false if it equals
      if (squareGrid[x][y].usable) {
        for (const selectedSquare of selectedSquares) {
          const center = selectedSquare.getProperty('center') as Point
          if (booleanEqual(center, squareGrid[x][y].squareCenter as Point)) {
            squareGrid[x][y].usable = false
            // Remove the already equals to save some comparison
            const index = selectedSquares.indexOf(selectedSquare)
            selectedSquares.splice(index, 1)
            break
          }
        }
      }
    }
  }
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
