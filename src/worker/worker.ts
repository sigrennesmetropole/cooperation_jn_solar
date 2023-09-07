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
  console.log('filterGrid', gridLandscapeRes)
  console.log('roofShape', roofShape)
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
  console.log('Grid landscape', gridLandscape)
  const gridLandscapeRes = centerAndFilterGrid(roofShape, gridLandscape)
  // const gridLandscapeRes = filterGrid(roofShape, gridLandscape)
  console.log('gridLandscapeRes', gridLandscapeRes)

  const gridPortrait = generateRectangleGrid(
    roofShape,
    roofSlope,
    bboxOnRoof,
    rectangleHeight,
    rectangleWidth,
    roofAzimuth
  )
  console.log('gridPortrait', gridPortrait)
  const gridPortraitRes = centerAndFilterGrid(roofShape, gridPortrait)
  // const gridPortraitRes = filterGrid(roofShape, gridPortrait)
  console.log('gridPortraitRes', gridPortraitRes)

  let biggestGrid
  if (
    gridPortrait.rows * gridPortrait.columns <
    gridLandscape.rows * gridLandscape.columns
  ) {
    biggestGrid = gridLandscapeRes
  } else {
    biggestGrid = gridPortraitRes
  }

  // Send the result back to the main thread
  return { grid: biggestGrid.grid, matrix: biggestGrid.matrix }
})
