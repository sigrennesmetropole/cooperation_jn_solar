export type View =
  | 'home'
  | 'map-pcaet'
  | 'roof-selection'
  | 'roof-selected-information'
  | 'step-sunshine'
  | 'legal-notice'
  | 'end-simulation'

export const viewList: Record<View, View> = {
  home: 'home',
  'map-pcaet': 'map-pcaet',
  'roof-selection': 'roof-selection',
  'roof-selected-information': 'roof-selected-information',
  'step-sunshine': 'step-sunshine',
  'legal-notice': 'legal-notice',
  'end-simulation': 'end-simulation',
}
