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
} from '@turf/turf'

export function solarPanelPlacement(
  grid: FeatureCollection<Polygon, Properties>
) {
  console.log('solarPanelPlacement algorithm')
  console.log(grid)

  const allGrids = dissolve(grid)
  console.log(`Total area of grids: ${area(allGrids)}`)
}
