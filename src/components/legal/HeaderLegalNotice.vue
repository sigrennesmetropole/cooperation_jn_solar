<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import UiHeaderFullScreen from '@/components/ui/UiHeaderFullScreen.vue'
import logoRennes from '@/assets/illustrations/logoRennes.png'
import iconMultiplyBlack from '@/assets/icons/icon-multiply-black.svg'

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
  <UiHeaderFullScreen :urlBack="'/home'">
    <template v-slot:title-img>
      <img class="ml-8" :src="logoRennes" />
    </template>
    <template v-slot:mid-content>
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
    </template>
    <template v-slot:button-content>
      <img :src="iconMultiplyBlack" />
      <span class="text-base font-medium">Fermer</span>
    </template>
  </UiHeaderFullScreen>
</template>
