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
  Point,
  midpoint,
  polygon,
  featureEach,
  centroid,
  union,
  area,
  booleanWithin,
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

type SolarPanel = {
  solarPanel: Feature<Polygon | MultiPolygon, Properties>
  originalGridCentroid: Feature<Point, Properties>
  safe: boolean
}

function createSolarPanel(
  originalGrid: Feature<Polygon, Properties>,
  horizontal: boolean = true
) {
  //   console.log('originalGrid')
  //   console.log(originalGrid?.geometry.coordinates)

  //   console.log(`Horizontal: ${horizontal}`)

  const origin = originalGrid?.geometry.coordinates[0][0]
  //   console.log(`Origin: ${origin}`)

  const scaledGrid = transformScale(originalGrid as AllGeoJSON, 4, {
    origin: origin,
  })

  //   console.log('scaledGrid')
  //   console.log((scaledGrid as Feature<Polygon, Properties>).geometry.coordinates)

  // Divide the 4x4 into 2 parts
  const scaledGridCoordinates = (scaledGrid as Feature<Polygon, Properties>)
    .geometry.coordinates[0]

  let fullSolarPanel
  if (horizontal) {
    const midPoint1 = midpoint(
      scaledGridCoordinates[0],
      scaledGridCoordinates[1]
    )
    const midPoint2 = midpoint(
      scaledGridCoordinates[2],
      scaledGridCoordinates[3]
    )

    fullSolarPanel = polygon([
      [
        scaledGridCoordinates[0],
        midPoint1.geometry.coordinates,
        midPoint2.geometry.coordinates,
        scaledGridCoordinates[3],
        scaledGridCoordinates[0],
      ],
    ])
  } else {
    const midPoint1 = midpoint(
      scaledGridCoordinates[0],
      scaledGridCoordinates[3]
    )
    const midPoint2 = midpoint(
      scaledGridCoordinates[1],
      scaledGridCoordinates[2]
    )

    fullSolarPanel = polygon([
      [
        scaledGridCoordinates[0],
        scaledGridCoordinates[1],
        midPoint2.geometry.coordinates,
        midPoint1.geometry.coordinates,
        scaledGridCoordinates[0],
      ],
    ])
  }

  //   console.log('full solar panel')
  //   console.log(fullSolarPanel?.type)
  //   console.log(fullSolarPanel?.geometry.coordinates)

  return fullSolarPanel
}

export function solarPanelPlacement(
  grid: FeatureCollection<Polygon, Properties>
) {
  console.log('solarPanelPlacement algorithm')

  //   const normalGrid = transformRotate(grid, 90 + roofAzimuth)

  let allGrid: Feature<Polygon | MultiPolygon, Properties> | null =
    grid.features[0]!
  //   console.log('allGrid')
  //   console.log(`Total area of grid: ${area(allGrid)}`)

  const solarPanels: Record<number, SolarPanel> = {}
  featureEach(grid, (currentFeature, featureIndex) => {
    // console.log(featureIndex)
    // console.log(currentFeature)
    // TODO(IS): Add parameter for horizontal / vertical placement here
    const solarPanel = createSolarPanel(currentFeature)
    const originalGridCentroid = centroid(grid)
    solarPanels[featureIndex] = {
      solarPanel: solarPanel!,
      originalGridCentroid: originalGridCentroid,
      safe: true,
    }
    if (featureIndex > 0) {
      allGrid = union(allGrid!, currentFeature)
    }
  })
  writeFeature('./all.geojson', allGrid)

  let numFalse = 0
  for (const key in solarPanels) {
    if (booleanWithin(solarPanels[key].solarPanel, allGrid)) {
      solarPanels[key].safe = false
      numFalse = numFalse + 1
    }
  }
  console.log(numFalse)

  // Testing
  //   createSolarPanel(grid.features[35])
}
