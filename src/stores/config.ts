import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

type ConfigType = {
  statistics: {
    diduknow_year: number
    diduknow_more_energy: number
    diduknow_more_power: number
  }
  autocalsol: {
    pr: number
    tech: string
    integration: string
    typeConsommateur: string
    typeCompteur: number
    tarifVente: number
  }
  solar_panel: {
    solar_panel_surface: number
    solar_panel_power: number
  }
  link: {
    photovoltaique_link: string
    solar_coop_link: string
    energies_link: string
    vilaine_link: string
  }
  address: {
    size_begin_search: number
    nb_addresses_rva: number
    nb_addresses_organization: number
    nb_addresses_communes: number
    nb_addresses_streets: number
  }
  distance: {
    distance_max_for_selection: number
  }
  consumption: {
    default_consumption: number
  }
}

export const useConfigStore = defineStore('configStore', () => {
  const config: Ref<ConfigType | null> = ref(null)

  function setConfig(newConfig: ConfigType | null) {
    config.value = newConfig
  }

  return {
    config,
    setConfig,
  }
})
