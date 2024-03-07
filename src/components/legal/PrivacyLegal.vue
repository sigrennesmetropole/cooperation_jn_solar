<script setup lang="ts">
import { useConfigStore } from '@/stores/config'
import { UiPrivacyLegal } from '@sigrennesmetropole/cooperation_jn_common_ui'

let configStore = useConfigStore()
</script>

<template>
  <UiPrivacyLegal
    :current_url="configStore.config?.common.links.solar_link!"
    :contact_link="configStore.config?.common.links.contact_link!"
  >
  </UiPrivacyLegal>
</template>
