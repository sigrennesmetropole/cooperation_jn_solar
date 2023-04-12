export type SolarPanelModel = {
  index: number
  x: number
  y: number
  z: number
  pitch: number // Rotation from left/right -> nose is up or down
  roll: number // Rotation from front/back -> wing is up or down
  heading: number // Rotation from top/bottom
}

export const SOLAR_PANEL_SURFACE = 1.8 // 1.8 m2 per solar panel
export const SOLAR_PANEL_POWER = 0.35 // 0.35 KwP per solar panel
