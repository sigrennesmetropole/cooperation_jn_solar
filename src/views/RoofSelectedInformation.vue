<script setup lang="ts">
import { useViewsStore } from '@/stores/views'
import { onBeforeMount, inject, ref } from 'vue'
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
import { createCustomViewpointFromExtent } from '@/services/viewPointHelper'
import expand from '@/assets/icons/expand-small-bigger-retract-smaller-big.svg'
import { usePopUpStore } from '@/stores/popUpStore'
import TermsOfUsePopup from '@/components/home/TermsOfUsePopup.vue'
import { hiddePin } from '@/services/searchBarService'
import type { RennesApp } from '@/services/RennesApp'
import { getDataBuilding } from '@/model/roof.model'
import NoRoofOnBuilding from '@/components/roof_selection/NoRoofOnBuilding.vue'

const viewStore = useViewsStore()
const panelsStore = usePanelsStore()
const roofStore = useRoofsStore()
const mapStore = useMapStore()
const router = useRouter()
const popUpStore = usePopUpStore()

const rennesApp = inject('rennesApp') as RennesApp
const buildingData = ref(getDataBuilding())
const isEmptyData = ref(false)

function changeIsEmptuDataFromBuildingData() {
  if (buildingData.value.total === 0) {
    isEmptyData.value = true
  } else {
    isEmptyData.value = false
  }
}
changeIsEmptuDataFromBuildingData()

async function newViewPoint() {
  if (roofStore.roofsFeatures && roofStore.roofsFeatures.bbox) {
    mapStore.viewPoint = await createCustomViewpointFromExtent(
      roofStore.roofsFeatures.bbox
    )
  }
}

onBeforeMount(async () => {
  viewStore.setCurrentView(viewList['roof-selected-information'])
  panelsStore.setTypePanelDisplay('left')
  mapStore.activate3d()
  panelsStore.isCompletelyHidden = false
  newViewPoint()
  hiddePin(rennesApp)
})

roofStore.$subscribe(async () => {
  buildingData.value = getDataBuilding()
  changeIsEmptuDataFromBuildingData()
  newViewPoint()
})

function buttonBoxAction() {
  if (isEmptyData.value) {
    return
  }
  router.push('/step-sunshine')
}
</script>

<template>
  <div
    class="mt-12 bg-white border border-slate-100 rounded relative font-dm-sans"
    v-if="!isEmptyData"
  >
    <UiButtonWithTooltip
      widthButton="4"
      heightButton="4"
      zIndex="z-10"
      text="La surface favorable correspond à un potentiel supérieur à 1000 kWh/m2/an."
      widthBoxText="w-[300px]"
    ></UiButtonWithTooltip>
    <SurfaceNumber :buildingData="buildingData"></SurfaceNumber>
  </div>
  <NoRoofOnBuilding v-else></NoRoofOnBuilding>

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
        <p class="font-dm-sans font-medium text-sm text-slate-600 text-justify">
          La surface favorable est celle recevant suffisamment d'ensoleillement
          pour accueillir des panneaux solaires soit dans notre simulation un
          ensoleillement supérieur à 1 000 kWh/m2/an.
        </p>
        <br />
        <span class="font-dm-sans font-bold text-sm text-slate-900"
          >Comment est calculé l’ensoleillement ?</span
        >
        <p class="font-dm-sans font-medium text-sm text-slate-600 text-justify">
          L’ensoleillement ou irradiance est la quantité d’énergie solaire reçue
          par le toit chaque année (en kWh/m2/an). Pour son calcul, la course du
          soleil et l'ombrage, mais aussi les caractéristiques du toit
          (orientation, inclinaison, surface) sont pris en compte. Les obstacles
          comme les cheminées ne sont pas pris en compte à ce stade (sauf les
          gros obstacles).
          <a
            class="underline cursor-pointer"
            @click="popUpStore.displayTermsOfUse()"
          >
            Détails<img :src="expand" class="inline-block ml-1 w-2 h-2" />
          </a>
        </p>
      </div>
    </template>
  </UiDisclosure>

  <BoxStep @buttonBoxAction="buttonBoxAction()" :activeButton="!isEmptyData">
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
  <TermsOfUsePopup
    v-if="popUpStore.isDisplayTermsOfUse"
    @close="popUpStore.closeTermsOfUse()"
  />
</template>
