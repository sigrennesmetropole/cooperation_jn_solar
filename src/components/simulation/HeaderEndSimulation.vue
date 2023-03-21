<script setup lang="ts">
import UiSolarPanelLogo from '@/components/ui/UiSolarPanelLogo.vue'
import UiHeaderFullScreen from '@/components/ui/UiHeaderFullScreen.vue'
import iconHome from '@/assets/icons/icon-home.svg'
</script>

<template>
  <UiHeaderFullScreen :urlBack="'/step-sunshine'">
    <template v-slot:title-img>
      <div class="flex items-center p-0 gap-2.5 ml-5">
        <component
          :is="UiSolarPanelLogo"
          role="img"
          class="h-10 w-10"
        ></component>
        <h1 class="font-bold text-2xl text-center">Cadastre Solaire</h1>
      </div>
    </template>
    <template v-slot:button-content>
      <img :src="iconHome" />
      <span class="text-base font-medium">Retour à l'accueil</span>
    </template>
  </UiHeaderFullScreen>
</template>
