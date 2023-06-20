import { useConfigStore } from '@/stores/config'

export function getConfigFromKey(key: string) {
  const configStore = useConfigStore()
  const keys = key.split('.')
  if (configStore.config === null) {
    configStore.setConfig(DEFAULT_CONFIGURATION)
  }
  let obj = configStore.config
  for (let i = 0; i < keys.length; i++) {
    if (obj === null || !obj.hasOwnProperty(keys[i])) {
      throw new Error(`Key ${key} not found in config`)
    }
    // @ts-ignore
    obj = obj[keys[i]]
  }
  return obj
}

export function getStringFromConfig(key: string): string {
  const value = getConfigFromKey(key)
  if (typeof value === 'string') {
    return value
  } else {
    throw new Error(`Value at key ${key} is not a string`)
  }
}

export function getNumberFromConfig(key: string): number {
  const value = getConfigFromKey(key)
  if (typeof value === 'number') {
    return value
  } else {
    throw new Error(`Value at key ${key} is not a number`)
  }
}

const DEFAULT_CONFIGURATION = {
  statistics: {
    diduknow_year: 2030,
    diduknow_more_energy: 3,
    diduknow_more_power: 6,
  },
  autocalsol: {
    pr: 0.85,
    tech: 'crystSi',
    integration: 'free',
    typeConsommateur: 'res1',
    typeCompteur: 1,
    tarifVente: 0.15,
    date_prod_conso: '05-28',
  },
  solar_panel: {
    solar_panel_surface: 1.8,
    solar_panel_power: 0.35,
    inclinaison_on_flat_roof: 20,
    azimuth_on_flat_roof: 180,
  },
  link: {
    photovoltaique_link: 'https://www.photovoltaique.info/fr/',
    solar_coop_link: 'https://www.solarcoop.fr/',
    energies_link: 'https://energiesdupaysderennes.fr/',
    vilaine_link: 'https://soleilsurvilaine.centralesvillageoises.fr/',
    url_signe_qualite:
      'https://www.photovoltaique.info/fr/preparer-un-projet/quelles-demarches-realiser/choisir-son-installateur/#signes_de_qualite',
    choisir_modele_eco:
      'https://www.photovoltaique.info/fr/preparer-un-projet/quelles-demarches-realiser/choisir-son-modele-economique/',
  },
  address: {
    size_begin_search: 4,
    nb_addresses_rva: 5,
    nb_addresses_organization: 3,
    nb_addresses_communes: 2,
    nb_addresses_streets: 5,
  },
  distance: {
    distance_max_for_selection: 800,
  },
  consumption: {
    default_consumption: 0,
  },
}
