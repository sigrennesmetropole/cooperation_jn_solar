export type View =
  | '/'
  | 'home'
  | 'roof-selection'
  | 'roof-selected-information'
  | 'step-sunshine'
  | 'legal-notice'
  | 'end-simulation'
  | 'simulation-results'
  | 'redirection-enedis'

export const viewList: Record<View, View> = {
  '/': '/',
  home: 'home',
  'roof-selection': 'roof-selection',
  'roof-selected-information': 'roof-selected-information',
  'step-sunshine': 'step-sunshine',
  'legal-notice': 'legal-notice',
  'end-simulation': 'end-simulation',
  'simulation-results': 'simulation-results',
  'redirection-enedis': 'redirection-enedis',
}
