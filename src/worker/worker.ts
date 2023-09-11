import type { GeoJSONFeatureCollection } from 'ol/format/GeoJSON'
import {
  bboxRoof,
  centerGrid,
  filterGrid,
  generateRectangleGrid,
} from '@/services/roofInteractionHelper'
import registerPromiseWorker from 'promise-worker/register'
import type { FeatureCollection } from '@turf/helpers'
import type { Grid } from '@/helpers/rectangleGrid'
import type { GeoJsonProperties, Geometry } from 'geojson'

function centerAndFilterGrid(
  roofShape: FeatureCollection<Geometry, GeoJsonProperties>,
  gridLandscape: Grid
) {
  const gridLandscapeRes = filterGrid(roofShape, gridLandscape)
  if (gridLandscapeRes.grid.featureCollection.features.length > 0) {
    centerGrid(roofShape, gridLandscapeRes.grid)
    return filterGrid(roofShape, gridLandscapeRes.grid)
  }
  return gridLandscapeRes
}

registerPromiseWorker(function ({ message }) {
  const roofShape = JSON.parse(message.roofShape) as GeoJSONFeatureCollection

  const roofSlope = message.roofSlope
  const bboxOnRoof = bboxRoof(roofShape)

  const rectangleHeight = message.rectangleHeight
  const rectangleWidth = message.rectangleWidth
  const roofAzimuth = message.roofAzimuth
  const gridLandscape = generateRectangleGrid(
    roofShape,
    roofSlope,
    bboxOnRoof,
    rectangleWidth,
    rectangleHeight,
    roofAzimuth
  )
  const gridLandscapeRes = centerAndFilterGrid(roofShape, gridLandscape)

  const gridPortrait = generateRectangleGrid(
    roofShape,
    roofSlope,
    bboxOnRoof,
    rectangleHeight,
    rectangleWidth,
    roofAzimuth
  )
  const gridPortraitRes = centerAndFilterGrid(roofShape, gridPortrait)
  let biggestGrid, ori
  if (
    gridPortrait.rows * gridPortrait.columns <
    gridLandscape.rows * gridLandscape.columns
  ) {
    biggestGrid = gridLandscapeRes
    ori = 'horizontal'
  } else {
    biggestGrid = gridPortraitRes
    ori = 'vertical'
  }

  // Send the result back to the main thread
  return { grid: biggestGrid.grid, usableIds: biggestGrid.usableIds, ori: ori }
})
