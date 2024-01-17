<script setup lang="ts">
import { useConfigStore } from '@/stores/config'
import { UiSiteMap } from '@sigrennesmetropole/cooperation_jn_common_ui'

let configStore = useConfigStore()
</script>
<template>
  <UiSiteMap
    :coopterr_url="configStore.config?.link.coopterr_link"
    :ondes_url="configStore.config?.link.ondes_link"
    :solaire_url="configStore.config?.link.solar_link"
    :trambus_url="configStore.config?.link.trambus_link"
  >
  </UiSiteMap>
</template>
