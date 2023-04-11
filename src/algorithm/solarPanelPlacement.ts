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
  rectangle: Feature<Polygon, Properties>,
  horizontal: boolean = true
) {
  console.log(rectangle.geometry.coordinates)
  if (horizontal) {
    console.log('horizontal')
  } else {
    console.log('vertical')
  }
  return ''
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

  const grid185 = normalGrid.features.at(185)
  console.log('grid185')
  console.log(grid185?.geometry.coordinates)
  const scaledGrid185 = transformScale(grid185 as AllGeoJSON, 2, {
    origin: 'nw',
  })
  console.log('scaledGrid185')
  console.log(
    (scaledGrid185 as Feature<Polygon, Properties>).geometry.coordinates
  )
  //   const rightSolarPanel185 = transformTranslate(
  //     scaledGrid185 as AllGeoJSON,
  //     95,
  //     90, // might be wrong direction
  //     {
  //       units: 'centimeters',
  //     }
  //   )
  const pivot = (scaledGrid185 as Feature<Polygon, Properties>).geometry
    .coordinates[0][2]
  console.log(`pivot: ${pivot}`)
  const rightSolarPanel185 = transformRotate(scaledGrid185 as AllGeoJSON, -90, {
    pivot: pivot,
  })
  console.log('rightSolarPanel185')
  console.log(
    (rightSolarPanel185 as Feature<Polygon, Properties>).geometry.coordinates
  )

  const solarPanelCollection = featureCollection([
    scaledGrid185 as Feature<Polygon, Properties>,
    rightSolarPanel185 as Feature<Polygon, Properties>,
  ])

  const fullSolarPanel = union(
    scaledGrid185 as Feature<Polygon, Properties>,
    rightSolarPanel185 as Feature<Polygon, Properties>
  )
  console.log('full solar panel')
  console.log(fullSolarPanel)
  console.log(fullSolarPanel?.geometry.coordinates)
}
