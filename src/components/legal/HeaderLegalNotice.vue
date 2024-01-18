<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { UiHeaderFullScreen } from '@sigrennesmetropole/cooperation_jn_common_ui'
import { UiMidLegalNotice } from '@sigrennesmetropole/cooperation_jn_common_ui'
import logoRennes from '@/assets/illustrations/logoRennes.png'
import { legalList } from '@/constants/legalLinks'
import { useViewsStore } from '@/stores/views'

const router = useRouter()
const { params } = useRoute()
const viewStore = useViewsStore()
const routeParams = ref(params)
const legalLink = routeParams.value.legallink.toString()

function goTo(link: string) {
  router.push(link)
}

const close = () => {
  if (viewStore.currentView == 'legal-notice') {
    window.close()
  }
}
</script>

<template>
  <UiHeaderFullScreen @close-legal="close">
    <template v-slot:title-img>
      <img class="ml-8" :src="logoRennes" />
    </template>
    <template v-slot:mid-content>
      <UiMidLegalNotice
        :go-to="goTo"
        :legal-link="legalLink"
        :legal-list="legalList"
      >
      </UiMidLegalNotice>
    </template>
    <template v-slot:button-content>
      <span class="text-base font-medium">Fermer</span>
    </template>
  </UiHeaderFullScreen>
</template>
