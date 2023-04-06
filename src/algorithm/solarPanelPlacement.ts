export type SolarPanelDimension = {
  length: number // in grid
  width: number // in grid
}

export type SolarPanelConfiguration = {
  starting_index: [number, number]
  configuration: boolean[][]
}

export class Grid {
  grid: boolean[][]
  length: number
  width: number

  constructor(grid: boolean[][]) {
    this.grid = grid
    this.length = grid.length
    this.width = grid[0].length
  }

  print() {
    console.log(this.grid)
  }

  checkAllTrue(
    starting_index: [number, number],
    length: number,
    width: number
  ) {
    console.log(`checking solar panel from ${starting_index}`)
    for (let i = starting_index[0]; i < length; i++) {
      for (let j = starting_index[1]; j < width; j++) {
        if (!this.grid[i][j]) {
          return false
        }
      }
    }
    return true
  }
}

function createSolarPanelConfiguration(
  starting_index: [number, number],
  numHorizontalSolarPanel: number,
  numVerticalSolarPanel: number
): SolarPanelConfiguration {
  const configuration: boolean[][] = []
  for (let i = 0; i < numHorizontalSolarPanel; i++) {
    configuration[i] = []
    for (let j = 0; j < numVerticalSolarPanel; j++) {
      configuration[i][j] = false
    }
  }
  return { starting_index: starting_index, configuration: configuration }
}

export function solarPanelPlacement(
  grid: Grid,
  solarPanelDimension: SolarPanelDimension,
  isHorizontal: boolean = true
) {
  console.log(solarPanelDimension)
  console.log(isHorizontal)
  grid.print()

  const solarPanelConfigurations: SolarPanelConfiguration[] = []

  for (let i = 0; i < solarPanelDimension.length; i++) {
    for (let j = 0; j < solarPanelDimension.width; j++) {
      // Cover the grid with solar panel here
      const numHorizontalSolarPanel = grid.length / solarPanelDimension.length
      const numVerticalSolarPanel = grid.length / solarPanelDimension.length
      const solarPanelConfiguration: SolarPanelConfiguration =
        createSolarPanelConfiguration(
          [i, j],
          numHorizontalSolarPanel,
          numVerticalSolarPanel
        )
      for (let m = 0; m < numHorizontalSolarPanel; m++) {
        for (let n = 0; n < numVerticalSolarPanel; n++) {
          // console.log(
          //   `${m}, ${n}, ${solarPanelConfiguration.configuration[m][n]}`
          // )
          if (i + m > grid.length || j + n > grid.width) {
            continue
          }
          solarPanelConfiguration.configuration[i][j] = grid.checkAllTrue(
            [i + m, j + n],
            solarPanelDimension.length,
            solarPanelDimension.width
          )
        }
      }
      console.log(solarPanelConfiguration)
      solarPanelConfigurations.push(solarPanelConfiguration)
    }
  }

  console.log(solarPanelConfigurations)
}
