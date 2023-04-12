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
              Comprendre ses chiffres
            </span>
          </template>
          <template v-slot:contents>
            <div>
              <span class="font-dm-sans font-bold text-sm text-slate-900"
                >Qu’est-ce qu’une surface favorable ?</span
              >
              <p
                class="font-dm-sans font-medium text-sm text-slate-600 text-justify"
              >
                La surface favorable est celle recevant suffisamment
                d'ensoleillement pour accueillir des panneaux solaires soit dans
                notre simulation un ensoleillement supérieur à 1 000 kWh/m2/an.
              </p>
              <br />
              <span class="font-dm-sans font-bold text-sm text-slate-900"
                >Comment est calculé l’ensoleillement ?</span
              >
              <p
                class="font-dm-sans font-medium text-sm text-slate-600 text-justify"
              >
                L’ensoleillement ou irradiance est la quantité d’énergie solaire
                reçue par le toit chaque année (en kWh/m2/an). Pour son calcul,
                la course du soleil et l'ombrage, mais aussi les
                caractéristiques du toit (orientation, inclinaison, surface)
                sont pris en compte. Les obstacles comme les cheminées ne sont
                pas pris en compte à ce stade (sauf les gros obstacles).
              </p>
            </div>
          </template>
        </UiDisclosure>
      </div>
    </template>
  </Story>
</template>
