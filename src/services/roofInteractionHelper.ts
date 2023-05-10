import { Fill, Icon, Stroke, Style } from 'ol/style'
import {
  bbox,
  bboxPolygon,
  booleanPointInPolygon,
  buffer,
  center,
  difference,
  point,
  polygon,
  randomPolygon,
  square,
  transformRotate,
  transformScale,
  union,
} from '@turf/turf'
import type { Polygon as turfPolygon } from '@turf/helpers'
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
import type { MultiPolygon } from '@turf/helpers'
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
  const cellWidth = squareSize
  const cellHeight = squareSize * Math.cos(Number(roofSlope) * (Math.PI / 180))

  const grid = rectangleGrid(bboxOnRoof, cellWidth, cellHeight, {
    units: 'millimeters',
  })

  transformRotate(grid, roofAzimut, { mutate: true })
  grid.features = grid.features.filter((f) => {
    let intersect = false
    for (const roofShapeFeature of roofShape.features) {
      if (
        booleanPointInPolygon(
          center(f),
          roofShapeFeature.geometry as turfPolygon
        )
      ) {
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
  dragSquaresInteraction = new OlDragSquaresInteraction(
    olLayer.getOLLayer() as VectorLayer<VectorSource>,
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

export function substractSelectedSquares(squareGrid: olFeature<olGeometry>[]) {
  // @ts-ignore

  const selectedSquares = getSquaresOfInteraction()
  return squareGrid.filter((square) => !selectedSquares.includes(square))
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
