<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import UiHeaderFullScreen from '@/components/ui/UiHeaderFullScreen.vue'
import logoRennes from '@/assets/illustrations/logoRennes.png'
import { legalList } from '@/constants/legalLinks'

const router = useRouter()
const { params } = useRoute()
const routeParams = ref(params)
const legalLink = routeParams.value.legallink

function goTo(link: string) {
  router.push(link)
}
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
          <h4
            tabindex="0"
            class="text-[18px] leading-6 bold cursor-pointer"
            @click="goTo(item.link)"
            @keydown.enter="goTo(item.link)"
          >
            {{ item.name }}
          </h4>
        </div>
      </div>
    </template>
    <template v-slot:button-content>
      <span class="text-base font-medium">Fermer</span>
    </template>
  </UiHeaderFullScreen>
</template>
