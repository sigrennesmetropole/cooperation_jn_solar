export type View =
  | 'home'
  | 'map-pcaet'
  | 'roof-selection'
  | 'roof-selected-information'
  | 'step-sunshine'

export const viewList: Record<View, View> = {
  home: 'home',
  'map-pcaet': 'map-pcaet',
  'roof-selection': 'roof-selection',
  'roof-selected-information': 'roof-selected-information',
  'step-sunshine': 'step-sunshine',
}
