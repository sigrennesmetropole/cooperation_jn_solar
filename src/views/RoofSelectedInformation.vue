<script setup lang="ts">
import { useViewsStore } from '@/stores/views'
import { onBeforeMount } from 'vue'
import { viewList } from '@/model/views.model'
import { UiButtonWithTooltip } from '@sigrennesmetropole/cooperation_jn_common_ui'
import UiDisclosure from '@/components/ui/UiDisclosure.vue'
import BoxStep2 from '@/components/roof_selection/BoxStep2.vue'
import { usePanelsStore } from '@/stores/panels'
import SurfaceNumber from '@/components/roof_selection/SurfaceNumber.vue'
import type { RoofSurface } from '@/model/roof.mode'

const viewStore = useViewsStore()
const panelsStore = usePanelsStore()

onBeforeMount(async () => {
  viewStore.setCurrentView(viewList['roof-selected-information'])
  panelsStore.setTypePanelDisplay('left')
})

// TODO: obtain this RoofSurface from the current selected
const roofSurface: RoofSurface = {
  values: [35, 15, 5, 45],
  favorable: 44,
  total: 90,
}
</script>

<template>
  <div class="mt-12 bg-white border border-slate-100 rounded relative">
    <UiButtonWithTooltip
      widthButton="4"
      heightButton="4"
      text="La surface favorable correspond à un potentiel supérieur à 1200 kWh/m2/an."
      widthBoxText="w-[300px]"
    ></UiButtonWithTooltip>
    <SurfaceNumber :roofSurface="roofSurface"></SurfaceNumber>
  </div>

  <UiDisclosure>
    <template v-slot:title>
      <span class="font-dm-sans font-medium text-base color-black">
        Comment est calculé l’ensolleillement ?
      </span>
    </template>
    <template v-slot:contents>
      <span class="font-dm-sans font-medium text-sm color-black">
        L’ensoleillement (ou irradiance) est la quantité d’énergie solaire reçue
        par le toit chaque année (en kWh/m2/an). Pour son calcul, la course du
        soleil et l'ombrage, mais aussi les caractéristiques du toit (pente,
        cheminée, etc.) sont pris en compte.
      </span>
    </template>
  </UiDisclosure>

  <BoxStep2></BoxStep2>
</template>
