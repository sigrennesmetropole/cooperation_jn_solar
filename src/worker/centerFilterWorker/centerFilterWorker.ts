import type { GeoJSONFeatureCollection } from 'ol/format/GeoJSON'
import { filterGridOnCenter, Matrix } from '@/services/roofInteractionHelper'
import registerPromiseWorker from 'promise-worker/register'

registerPromiseWorker(function ({ message }) {
  const roofFavorableArea = JSON.parse(
    message.roofFavorableArea
  ) as GeoJSONFeatureCollection
  const usableIds = JSON.parse(message.usableIds) as Matrix

  // Send the result back to the main thread
  return filterGridOnCenter(roofFavorableArea, usableIds)
})
