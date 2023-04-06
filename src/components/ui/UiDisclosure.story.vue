<script lang="ts" setup>
import UiDisclosure from '@/components/ui/UiDisclosure.vue'
</script>

<template>
  <Story title="UiDisclosure" group="ui-base">
    <template #default>
      <div class="flex flex-col px-6 py-8 bg-white gap-8 w-[450px]">
        <UiDisclosure>
          <template v-slot:title>
            <span class="font-dm-sans font-medium text-base color-black">
              Comment est calculé l’ensoleillement ?
            </span>
          </template>
          <template v-slot:contents>
            <span class="font-dm-sans font-medium text-sm color-black">
              L’ensoleillement (ou irradiance) est la quantité d’énergie solaire
              reçue par le toit chaque année (en kWh/m2/an). Pour son calcul, la
              course du soleil et l'ombrage, mais aussi les caractéristiques du
              toit (pente, cheminée, etc.) sont pris en compte.
            </span>
          </template>
        </UiDisclosure>
      </div>
    </template>
  </Story>
</template>
