import type { GeoJSONFeatureCollection } from 'ol/format/GeoJSON'
import { filterGrid } from '@/services/roofInteractionHelper'
import registerPromiseWorker from 'promise-worker/register'
import type { Grid } from '@/helpers/rectangleGrid'

registerPromiseWorker(function ({ message }) {
  const grid = JSON.parse(message.grid) as Grid
  const roofFavorableArea = JSON.parse(
    message.roofFavorableArea
  ) as GeoJSONFeatureCollection
  const ori = message.ori

  console.log('Grid', grid)
  console.log('roofFavorableArea', roofFavorableArea)

  const gridFilterByFavorableArea = filterGrid(roofFavorableArea, grid)

  // Send the result back to the main thread
  return {
    grid: gridFilterByFavorableArea.grid,
    usableIds: gridFilterByFavorableArea.usableIds,
    ori: ori,
  }
})
