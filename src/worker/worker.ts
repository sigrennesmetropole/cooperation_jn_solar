import type { GeoJSONFeatureCollection } from 'ol/format/GeoJSON'
import {
  bboxRoof,
  filterGrid,
  generateRectangleGrid,
} from '@/services/roofInteractionHelper'
import registerPromiseWorker from 'promise-worker/register'

registerPromiseWorker(function ({ message }) {
  const roofShape = JSON.parse(message.roofShape) as GeoJSONFeatureCollection
  const roofSlope = message.roofSlope
  const bboxOnRoof = bboxRoof(roofShape)
  const squareSize = message.squareSize
  const roofAzimuth = message.roofAzimuth
  const grid = generateRectangleGrid(
    roofShape,
    roofSlope,
    bboxOnRoof,
    squareSize,
    roofAzimuth
  )
  const { grid: filterGeomGrid, matrix: gridMatrix } = filterGrid(
    roofShape,
    grid
  )
  // Send the result back to the main thread
  return { grid: filterGeomGrid, matrix: gridMatrix }
})
