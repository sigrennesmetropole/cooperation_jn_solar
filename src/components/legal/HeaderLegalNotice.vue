<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import UiReturnButton from '../ui/UiReturnButton.vue'

const router = useRouter()

const { params } = useRoute()
const routeParams = ref(params)
const legalLink = routeParams.value.legallink

const legalList = [
  {
    link: '/legalnotice/mentions-legales',
    slug: 'mentions-legales',
    name: 'Mentions légales',
  },
  {
    link: '/legalnotice/confidentialite',
    slug: 'confidentialite',
    name: 'Confidentialité',
  },
  {
    link: '/legalnotice/plan-du-site',
    slug: 'plan-du-site',
    name: 'Plan du site',
  },
  {
    link: '/legalnotice/accessibilite',
    slug: 'accessibilite',
    name: 'Accessibilité',
  },
]
</script>

<template>
  <div
    class="absolute top-0 left-0 flex flex-row items-center justify-between px-9 gap-12 w-screen h-[72px] bg-white shadow"
  >
    <div class="flex flex-row items-center">
      <UiReturnButton
        class="shadow-md rounded-lg p-2 flex gap-2.5 shrink-0 grow-0"
        @click="router.push('/home')"
      >
        <img src="../../assets/icons/chevron-left.svg" />
      </UiReturnButton>
      <img class="ml-8" src="../../assets/illustrations/logoRennes.png" />
    </div>
    <div class="flex flex-row self-end gap-4">
      <div
        v-for="item in legalList"
        :key="item.name"
        class="flex flex-row align-center pt-2 pb-4 px-2"
        :class="legalLink == item.slug ? 'border-black border-b-2' : ''"
      >
        <a :href="item.link">
          <h4 class="text-[18px] leading-6 bold">{{ item.name }}</h4>
        </a>
      </div>
    </div>
    <button
      @click="router.push('/home')"
      class="bg-white border border-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
    >
      <img src="../../assets/icons/icon-multiply-black.svg" />
      <span class="text-base font-medium">Fermer</span>
    </button>
  </div>
</template>
