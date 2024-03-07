<script setup lang="ts">
import { UiLegalNotice } from '@sigrennesmetropole/cooperation_jn_common_ui'

import { useConfigStore } from '@/stores/config'
let configStore = useConfigStore()
</script>

<template>
  <UiLegalNotice
    :contact_link="configStore.config?.common.links.contact_link!"
    :current_url="configStore.config?.common.links.solar_link!"
  >
  </UiLegalNotice>
</template>
