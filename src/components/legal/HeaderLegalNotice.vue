<script setup lang="ts">
// import UiRennesLogo from '@sigrennesmetropole/cooperation_jn_common_ui/lib/ui/UiRennesLogo.vue'

import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const { params } = useRoute()
const routeParams = ref(params)
const legalLink = routeParams.value.legallink

console.log(legalLink)
// const showTitle = (tab) => {}
</script>

<template>
  <div
    class="absolute top-0 left-0 flex flex-row gap-12 w-screen h-[72px] bg-white shadow"
  >
    <div>
      <!-- <UiRennesLogo></UiRennesLogo> -->
    </div>
    <div
      class="flex flex-row align-start gap-4 absolute h-12 w-[594px] left-[459px] top-8"
    >
      <div class="flex flex-row align-center pt-2 pb-4 px-2">
        <a href="/legalnotice/mentions-legales"
          ><h4 class="text-[18px] leading-6 bold">Mentions légales</h4></a
        >
      </div>
      <div class="flex flex-row align-center pt-2 pb-4 px-2">
        <a href="/legalnotice/confidentialite"
          ><h4 class="text-[18px] leading-6 bold">Confidentialité</h4></a
        >
      </div>
      <div class="flex flex-row align-center pt-2 pb-4 px-2">
        <a href="/legalnotice/plan-du-site"
          ><h4 class="text-[18px] leading-6 bold">Plan du site</h4></a
        >
      </div>
      <div class="flex flex-row align-center pt-2 pb-4 px-2">
        <a href="/legalnotice/accessibilite"
          ><h4 class="text-[18px] leading-6 bold">Accessibilité</h4></a
        >
      </div>
    </div>
    <button @click="router.push('/home')"></button>
  </div>
</template>
