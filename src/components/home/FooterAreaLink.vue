<script setup lang="ts">
import { FooterArea } from '@sigrennesmetropole/cooperation_jn_common_ui'
import { legalList } from '@/constants/legalLinks'
const openLink = (link: string) => {
  window.open(link, '_blank')
}
</script>

<template>
  <FooterArea
    class="mt-auto"
    @openLink="openLink($event)"
    :legalList="legalList"
  ></FooterArea>
</template>
