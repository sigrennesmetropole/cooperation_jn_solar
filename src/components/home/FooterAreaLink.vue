<script setup lang="ts">
import { FooterArea } from '@sigrennesmetropole/cooperation_jn_common_ui'

const openLink = (link: String) => {
  window.open('/legalnotice/' + link, '_blank')
}
</script>

<template>
  <FooterArea class="mt-auto" @openLink="openLink($event)"></FooterArea>
</template>
