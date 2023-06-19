<script lang="ts" setup>
import BoxStep from '@/components/simulation/BoxStep.vue'
import iconInstallation from '@/assets/icons/installation.svg'
</script>

<template>
  <Story title="BoxStep" group="simulation-step">
    <template #default>
      <BoxStep :activeButton="true">
        <template v-slot:nameOfStep>
          <span class="mt-6 font-dm-sans font-normal text-xs text-neutral-500">
            Étape 2
          </span>
        </template>
        <template v-slot:image>
          <img class="w-15 h-15 mt-2" :src="iconInstallation" alt="" />
        </template>
        <template v-slot:text>
          <span class="font-dm-sans font-bold text-lg text-center">
            Quelle production d’électricité <br />
            est envisageable ici ?
          </span>
        </template>
        <template v-slot:buttonContent>
          <span class="font-dm-sans text-white text-base font-medium">
            Simuler une installation photovoltaïque
          </span>
        </template>
      </BoxStep>
    </template>
  </Story>
</template>
