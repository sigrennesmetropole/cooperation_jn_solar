// The algorithm for solar panel placement
// Input
//  - grid

// ALgorithm
// Create a multipolygon from all the grids, called it allGrid

// For each grid, create a rectangle that represent a solar panel which share the top-left corner with the grid
// - Make the grid 4x bigger
// - Cut it by half, depending on whether it's vertical or horizontal
// - Add inside_valid_roof and not_covered properties, set them to True

// Check if the solar panel is inside the allGrid
// If not, remove it / update the inside_valid_roof to false
// If yes, update the inside_valid_roof to true

// OPTIONS 1 (current implementation)
// For each solar panel
// - if it's inside_valid_roof and not_covered, check to other solar panel
// - Mark all solar panel covered by this solar panel by set not_covered = False
// Get all solar panel that is not_covered and inside_valid_roof as the result

// OPTIONS 2
// Create a graph that represent the intersection between solar panel
// While the number of intersected possible solar panel > 0
// Remove the possible solar panel that has the biggest number of intersection
// Update the graph
// Update the number of intersection

import {
  FeatureCollection,
  Polygon,
  Properties,
  Feature,
  transformScale,
  AllGeoJSON,
  MultiPolygon,
  midpoint,
  polygon,
  featureEach,
  union,
  booleanWithin,
  featureCollection,
  booleanIntersects,
} from '@turf/turf'
import * as fs from 'fs'
import * as path from 'path'

// Helper function

function writeFeature(
  outputFileName: string,
  feature: FeatureCollection | Feature,
  debug: boolean = false
) {
  if (debug) {
    fs.writeFileSync(
      path.join(__dirname, outputFileName),
      JSON.stringify(feature)
    )
  }
}

function createSolarPanel(
  originalGrid: Feature<Polygon, Properties>,
  horizontal: boolean = true,
  index: number
) {
  const origin = originalGrid?.geometry.coordinates[0][0]

  const scaledGrid = transformScale(originalGrid as AllGeoJSON, 4, {
    origin: origin,
  })

  // Divide the 4x4 into 2 parts
  const scaledGridCoordinates = (scaledGrid as Feature<Polygon, Properties>)
    .geometry.coordinates[0]

  let fullSolarPanel
  const properties = {
    index: index,
    inside_valid_roof: true,
    not_covered: true,
  }
  if (horizontal) {
    const midPoint1 = midpoint(
      scaledGridCoordinates[0],
      scaledGridCoordinates[3]
    )
    const midPoint2 = midpoint(
      scaledGridCoordinates[1],
      scaledGridCoordinates[2]
    )

    fullSolarPanel = polygon(
      [
        [
          scaledGridCoordinates[0],
          scaledGridCoordinates[1],
          midPoint2.geometry.coordinates,
          midPoint1.geometry.coordinates,
          scaledGridCoordinates[0],
        ],
      ],
      properties
    )
  } else {
    const midPoint1 = midpoint(
      scaledGridCoordinates[0],
      scaledGridCoordinates[1]
    )
    const midPoint2 = midpoint(
      scaledGridCoordinates[2],
      scaledGridCoordinates[3]
    )

    fullSolarPanel = polygon(
      [
        [
          scaledGridCoordinates[0],
          midPoint1.geometry.coordinates,
          midPoint2.geometry.coordinates,
          scaledGridCoordinates[3],
          scaledGridCoordinates[0],
        ],
      ],
      properties
    )
  }

  return fullSolarPanel
}

export function solarPanelPlacementAlgorithm(
  grid: FeatureCollection<Polygon, Properties>,
  horizontal: boolean = true,
  debug: boolean = false
) {
  const prefix = horizontal ? 'h-' : 'v-'

  let allGrid: Feature<Polygon | MultiPolygon, Properties> | null =
    grid.features[0]!

  const solarPanels: FeatureCollection<Polygon, Properties> = featureCollection(
    []
  )

  featureEach(grid, (currentFeature, featureIndex) => {
    const solarPanel = createSolarPanel(
      currentFeature,
      horizontal,
      featureIndex
    )
    solarPanels.features.push(solarPanel)

    if (featureIndex > 0) {
      allGrid = union(allGrid!, currentFeature)
    }
  })

  writeFeature(`./${prefix}allGrid.geojson`, allGrid, debug)
  writeFeature(`./${prefix}solarPanelsFromGrid.geojson`, solarPanels, debug)

  // Mark the solar panel that are not inside the selected roof / grid
  // TODO (IS): Future improvement, remove the solar panel that is not inside the allGrid
  featureEach(solarPanels, (cf, _fi) => {
    cf.properties!['inside_valid_roof'] = booleanWithin(
      // TODO (IS): Future improvement, put the scaling when we create solarPanel
      transformScale(cf, 0.9),
      allGrid!
    )
  })
  writeFeature(`./${prefix}solarPanelsInsideRoof.geojson`, solarPanels, debug)

  // Mark solar panel that is not covered by other solar panel
  // Starting from the first solar panel first (greedy approach)
  featureEach(solarPanels, (cf, fi) => {
    if (cf.properties!['inside_valid_roof'] && cf.properties!['not_covered']) {
      // TODO (IS): Future improvement, do not use featureEach, but use filter (turf doesn't have this)
      featureEach(solarPanels, (cf2, fi2) => {
        if (fi < fi2) {
          if (booleanIntersects(transformScale(cf, 0.9), cf2)) {
            cf2.properties!['not_covered'] = false
          }
        }
      })
    }
  })
  writeFeature(
    `./${prefix}solarPanelsCheckCoverage.geojson`,
    solarPanels,
    debug
  )
  // TODO (IS): Future improvement, remove the unnecessary properties
  solarPanels.features = solarPanels.features.filter((f) => {
    return f.properties!['inside_valid_roof'] && f.properties!['not_covered']
  })

  writeFeature(`./${prefix}finalSolarPanels.geojson`, solarPanels, debug)

  return solarPanels
}

export function solarPanelPlacement(
  grid: FeatureCollection<Polygon, Properties>
) {
  const verticalSolarPanels = solarPanelPlacementAlgorithm(grid, false)
  const horizontalSolarPanels = solarPanelPlacementAlgorithm(grid, true)

  if (
    horizontalSolarPanels.features.length >= verticalSolarPanels.features.length
  ) {
    return {
      solarPanels: horizontalSolarPanels,
      orientation: 'horizontal',
    }
  } else {
    return { solarPanels: verticalSolarPanels, orientation: 'vertical' }
  }
}
