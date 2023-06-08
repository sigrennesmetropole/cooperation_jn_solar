<script setup lang="ts">
import { inject, computed } from 'vue'
import { cloneViewPointAndResetCameraPosition } from '@/services/viewPointHelper'

import { IconHome } from '@sigrennesmetropole/cooperation_jn_common_ui'
import { IconPlus } from '@sigrennesmetropole/cooperation_jn_common_ui'
import { IconMinus } from '@sigrennesmetropole/cooperation_jn_common_ui'
import { IconSynchronize } from '@sigrennesmetropole/cooperation_jn_common_ui'

import { UiIconButton } from '@sigrennesmetropole/cooperation_jn_common_ui'
import { UiDescribeButtonCompass } from '@sigrennesmetropole/cooperation_jn_common_ui'

import CompassComponent from '@/components/map/CompassComponent.vue'

import { useViewsStore } from '@/stores/views'
import { viewList } from '@/model/views.model'
import type { RennesApp } from '@/services/RennesApp'
import { useRouter } from 'vue-router'
import { usePanelsStore, PANEL_WIDTH } from '@/stores/panels'
import { useMapStore } from '@/stores/map'
import type { Viewpoint } from '@vcmap/core'
import { useSimulationStore } from '@/stores/simulations'

const rennesApp = inject('rennesApp') as RennesApp
const viewStore = useViewsStore()
const router = useRouter()
const panelStore = usePanelsStore()
const mapStore = useMapStore()
const simulationStore = useSimulationStore()

async function zoom(out = false, zoomFactor = 2): Promise<void> {
  const activeMap = rennesApp.maps.activeMap
  const viewpoint = await activeMap?.getViewpoint()
  const maxZoom = rennesApp.get3DMap().getScene()
    .screenSpaceCameraController.maximumZoomDistance
  if (activeMap && viewpoint) {
    let distance = viewpoint.distance / zoomFactor
    if (out) {
      distance = Math.min(viewpoint.distance * zoomFactor, maxZoom)
    }

    const newVp = cloneViewPointAndResetCameraPosition(viewpoint, distance)
    await rennesApp.maps?.activeMap.gotoViewpoint(newVp)
  }
}

async function resetZoom() {
  let newVp
  if (
    [
      viewList['home'],
      viewList['roof-selection'],
      viewList['roof-selected-information'],
    ].includes(viewStore.currentView!)
  ) {
    newVp = rennesApp.getHomeViewpoint()
  } else {
    newVp = mapStore.viewPoint as Viewpoint
    if (mapStore.viewPointPrevious !== null && !newVp.groundPosition[2]) {
      newVp = mapStore.viewPointPrevious
    }
  }
  await rennesApp.maps?.activeMap.gotoViewpoint(newVp)
}

const shouldDisplayHomeButton = () => {
  return [viewList['roof-selected-information']].includes(
    viewStore.currentView!
  )
}

const heightClass = computed(() => {
  if (simulationStore.isSelectObstacleStep()) {
    return ['h-[10rem]']
  } else if (!shouldDisplayHomeButton()) {
    return ['h-[16rem]']
  } else {
    return ['h-[20rem]']
  }
})
</script>

<template>
  <div
    :class="heightClass"
    class="transition-[height] absolute right-2 bottom-10 flex flex-col [&>*]:m-2 text-gray-dark items-center w-32 select-none"
    :style="panelStore.isRightPanel() ? `margin-right: ${PANEL_WIDTH};` : ''"
  >
    <UiIconButton
      class="rounded-lg"
      @click="router.push('/roof-selection')"
      v-show="shouldDisplayHomeButton()"
      ariaLabelButton="Réinitialiser"
      titleButton="Réinitialiser"
      heightTitle="30"
      widthTitle="200"
      positionX="-210"
      positionY="12"
      ><IconHome />
    </UiIconButton>
    <div class="flex flex-col zoom-buttons text-2xl [&>*]:p-2" role="group">
      <UiIconButton
        class="rounded-t-lg"
        @click="() => zoom(false)"
        ariaLabelButton="Zoom vers l'avant"
        titleButton="Zoom vers l'avant"
        heightTitle="30"
        widthTitle="200"
        positionX="-210"
        positionY="12"
        ><IconPlus />
      </UiIconButton>
      <UiIconButton
        @click="() => zoom(true)"
        ariaLabelButton="Zoom vers l'arrière"
        titleButton="Zoom vers l'arrière"
        heightTitle="30"
        widthTitle="200"
        positionX="-210"
        positionY="12"
        ><IconMinus />
      </UiIconButton>
      <UiIconButton
        class="rounded-b-lg"
        @click="() => resetZoom()"
        ariaLabelButton="Réinitialiser le zoom"
        titleButton="Réinitialiser le zoom"
        heightTitle="30"
        widthTitle="200"
        positionX="-210"
        positionY="12"
      >
        <IconSynchronize />
      </UiIconButton>
    </div>
    <CompassComponent
      v-if="mapStore.is3D() && !simulationStore.isSelectObstacleStep()"
    />
  </div>

  <div
    class="absolute right-[130px] bottom-12"
    v-if="!panelStore.isRightPanel()"
  >
    <UiDescribeButtonCompass></UiDescribeButtonCompass>
  </div>
</template>
