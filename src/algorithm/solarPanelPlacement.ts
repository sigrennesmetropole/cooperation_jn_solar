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
  dissolve,
  area,
  FeatureCollection,
  Polygon,
  Properties,
  featureEach,
  Feature,
  transformRotate,
  transformScale,
  AllGeoJSON,
  transformTranslate,
  featureCollection,
  union,
  flatten,
  Coord,
} from '@turf/turf'

function createSolarPanel(
  originalGrid: Feature<Polygon, Properties>,
  horizontal: boolean = true
) {
  console.log('originalGrid')
  console.log(originalGrid?.geometry.coordinates)

  const rotationAngle = horizontal ? -90 : 90
  console.log(`Horizontal: ${horizontal}, rotation angle: ${rotationAngle}`)

  const origin = originalGrid?.geometry.coordinates[0][0]
  console.log(`Origin: ${origin}`)

  const scaledGrid = transformScale(originalGrid as AllGeoJSON, 2, {
    origin: origin,
  })
  console.log('scaledGrid')
  console.log((scaledGrid as Feature<Polygon, Properties>).geometry.coordinates)

  const otherHalfSolarPanel = transformRotate(
    scaledGrid as AllGeoJSON,
    rotationAngle,
    {
      pivot: origin,
    }
  )

  console.log('otherHalfSolarPanel')
  console.log(
    (otherHalfSolarPanel as Feature<Polygon, Properties>).geometry.coordinates
  )

  const fullSolarPanel = union(
    scaledGrid as Feature<Polygon, Properties>,
    otherHalfSolarPanel as Feature<Polygon, Properties>
  )

  console.log('full solar panel')
  console.log(fullSolarPanel?.type)
  console.log(fullSolarPanel?.geometry.coordinates)

  return fullSolarPanel
}

export function solarPanelPlacement(
  grid: FeatureCollection<Polygon, Properties>,
  roofAzimuth = 90
) {
  console.log('solarPanelPlacement algorithm')
  //   console.log(grid)featureToGeoJSON

  // Normalize grid

  const normalGrid = transformRotate(grid, 90 + roofAzimuth)

  const allGrid = dissolve(normalGrid)
  console.log(`Total area of grid: ${area(allGrid)}`)

  const solarPanels = []
  //   featureEach(normalGrid, (currentFeature, featureIndex) => {
  //     console.log(featureIndex)
  //     console.log(currentFeature)
  //     createSolarPanel(currentFeature)
  //   })

  const originalGrid = normalGrid.features.at(35)
  createSolarPanel(originalGrid!, false)
}
