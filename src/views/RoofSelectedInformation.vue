<script setup lang="ts">
import { useViewsStore } from '@/stores/views'
import { onBeforeMount } from 'vue'
import { viewList } from '@/model/views.model'
import { UiButtonWithTooltip } from '@sigrennesmetropole/cooperation_jn_common_ui'
import UiDisclosure from '@/components/ui/UiDisclosure.vue'
import BoxStep from '@/components/simulation/BoxStep.vue'
import { usePanelsStore } from '@/stores/panels'
import SurfaceNumber from '@/components/roof_selection/SurfaceNumber.vue'
import iconInstallation from '@/assets/icons/installation.svg'
import { useRouter } from 'vue-router'
import { useRoofsStore } from '@/stores/roof'
import { useMapStore } from '@/stores/map'
import { createCustomViewpointFromExtent } from '@/services/viewpointHelper'

const viewStore = useViewsStore()
const panelsStore = usePanelsStore()
const roofStore = useRoofsStore()
const mapStore = useMapStore()

const router = useRouter()

onBeforeMount(async () => {
  viewStore.setCurrentView(viewList['roof-selected-information'])
  panelsStore.setTypePanelDisplay('left')
  panelsStore.isCompletelyHidden = false
  if (roofStore.roofsFeatures && roofStore.roofsFeatures.bbox) {
    mapStore.viewPoint = await createCustomViewpointFromExtent(
      roofStore.roofsFeatures.bbox
    )
  }
})

roofStore.$subscribe(async () => {
  if (roofStore.roofsFeatures && roofStore.roofsFeatures.bbox) {
    mapStore.viewPoint = await createCustomViewpointFromExtent(
      roofStore.roofsFeatures.bbox
    )
  }
})
</script>

<template>
  <div class="mt-12 bg-white border border-slate-100 rounded relative">
    <UiButtonWithTooltip
      widthButton="4"
      heightButton="4"
      text="La surface favorable correspond à un potentiel supérieur à 1200 kWh/m2/an."
      widthBoxText="w-[300px]"
    ></UiButtonWithTooltip>
    <SurfaceNumber></SurfaceNumber>
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

  <BoxStep @buttonBoxAction="router.push('/step-sunshine')">
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
