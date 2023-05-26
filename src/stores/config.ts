import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

type ConfigType = {
  statistics: {
    diduknow_year: number
    diduknow_more_energy: number
    diduknow_more_power: number
  }
}

export const useConfigStore = defineStore('configStore', () => {
  const config: Ref<ConfigType | null> = ref(null)

  function setConfig(newConfig: ConfigType | null) {
    config.value = newConfig
  }

  function setDefaultConfig() {
    config.value = {
      statistics: {
        diduknow_year: 2030,
        diduknow_more_energy: 3,
        diduknow_more_power: 6,
      },
    }
  }

  return {
    config,
    setConfig,
    setDefaultConfig,
  }
})
