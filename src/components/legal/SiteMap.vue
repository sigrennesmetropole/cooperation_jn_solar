<script setup lang="ts">
import { useConfigStore } from '@/stores/config'
import { UiSiteMap } from '@sigrennesmetropole/cooperation_jn_common_ui'

let configStore = useConfigStore()
</script>
<template>
  <UiSiteMap
    :coopterr_url="configStore.config?.common.links.coopterr_link!"
    :ondes_url="configStore.config?.common.links.ondes_link!"
    :solaire_url="configStore.config?.common.links.solar_link!"
    :trambus_url="configStore.config?.common.links.trambus_link!"
  >
  </UiSiteMap>
</template>
