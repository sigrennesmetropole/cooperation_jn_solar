// The algorithm for solar panel placement
// Input
//  - grid

// ALgorithm
// Create a multipolygon from all the grids, called it possible rectangle

// For each grid, create a rectangle that represent a solar panel which share the top-left corner with the grid
// Check if the solar panel is inside the _possible rectangle_
// If not, remove it
// If yes, store it as possible solar panel

// For each possible solar panel, get all intersected possible solar panel
// - If there is a solar panel that has 0 intersection, put it in the final solar panel

// OPTIONS 1
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
  feature: FeatureCollection | Feature
) {
  fs.writeFileSync(
    path.join(__dirname, outputFileName),
    JSON.stringify(feature)
  )
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

export function solarPanelPlacement(
  grid: FeatureCollection<Polygon, Properties>,
  horizontal: boolean = true
) {
  console.log('solarPanelPlacement algorithm')
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

  writeFeature(`./${prefix}allGrid.geojson`, allGrid)
  writeFeature(`./${prefix}solarPanelsFromGrid.geojson`, solarPanels)

  // Mark the solar panel that are not inside the selected roof / grid
  featureEach(solarPanels, (cf, _fi) => {
    cf.properties!['inside_valid_roof'] = booleanWithin(
      transformScale(cf, 0.9),
      allGrid!
    )
  })
  writeFeature(`./${prefix}solarPanelsInsideRoof.geojson`, solarPanels)

  // Mark solar panel that is not covered by other solar panel
  // Starting from the first solar panel first (brute force)
  featureEach(solarPanels, (cf, fi) => {
    if (cf.properties!['inside_valid_roof'] && cf.properties!['not_covered']) {
      featureEach(solarPanels, (cf2, fi2) => {
        if (fi < fi2) {
          if (booleanIntersects(transformScale(cf, 0.9), cf2)) {
            cf2.properties!['not_covered'] = false
          }
        }
      })
    }
  })
  writeFeature(`./${prefix}solarPanelsCheckCoverage.geojson`, solarPanels)
}
