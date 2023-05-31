export type SolarPanelModel = {
  index: number
  x: number
  y: number
  z: number
  pitch: number // Rotation from left/right -> nose is up or down
  roll: number // Rotation from front/back -> wing is up or down
  heading: number // Rotation from top/bottom
}
