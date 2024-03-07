import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { ConfigType } from '@sigrennesmetropole/cooperation_jn_common_ui'

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
