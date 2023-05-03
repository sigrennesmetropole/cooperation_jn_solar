import intersect from '@turf/boolean-intersects'
import distance from '@turf/distance'
import type { BBox, FeatureCollection } from '@turf/helpers'

import { featureCollection, polygon } from '@turf/helpers'
export type Grid = {
  rows: number
  columns: number
  featureCollection: FeatureCollection
}

// come from https://www.npmjs.com/package/@turf/rectangle-grid
export function rectangleGrid(
  bbox: BBox,
  cellWidth: number,
  cellHeight: number,
  options: any
): Grid {
  if (options === void 0) {
    options = {}
  }
  // Containers
  const results = []
  const west = bbox[0]
  const south = bbox[1]
  const east = bbox[2]
  const north = bbox[3]
  const xFraction = cellWidth / distance([west, south], [east, south], options)
  const cellWidthDeg = xFraction * (east - west)
  const yFraction = cellHeight / distance([west, south], [west, north], options)
  const cellHeightDeg = yFraction * (north - south)
  // rows & columns
  const bboxWidth = east - west
  const bboxHeight = north - south
  const columns = Math.floor(bboxWidth / cellWidthDeg)
  const rows = Math.floor(bboxHeight / cellHeightDeg)
  // if the grid does not fill the bbox perfectly, center it.
  const deltaX = (bboxWidth - columns * cellWidthDeg) / 2
  const deltaY = (bboxHeight - rows * cellHeightDeg) / 2
  // iterate over columns & rows
  let currentX = west + deltaX
  for (let column = 0; column < columns; column++) {
    let currentY = south + deltaY
    for (let row = 0; row < rows; row++) {
      const cellPoly = polygon(
        [
          [
            [currentX, currentY],
            [currentX, currentY + cellHeightDeg],
            [currentX + cellWidthDeg, currentY + cellHeightDeg],
            [currentX + cellWidthDeg, currentY],
            [currentX, currentY],
          ],
        ],
        options.properties
      )
      if (options.mask) {
        if (intersect(options.mask, cellPoly)) {
          results.push(cellPoly)
        }
      } else {
        results.push(cellPoly)
      }
      currentY += cellHeightDeg
    }
    currentX += cellWidthDeg
  }
  return {
    rows: rows,
    columns: columns,
    featureCollection: featureCollection(results),
  }
}
