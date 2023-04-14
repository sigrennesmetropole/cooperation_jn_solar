<script setup lang="ts">
import { inject, computed, Ref, ref } from 'vue'
import { cloneViewPointAndResetCameraPosition } from '@/helpers/viewpointHelper'

import { IconHome } from '@sigrennesmetropole/cooperation_jn_common_ui'
import { IconPlus } from '@sigrennesmetropole/cooperation_jn_common_ui'
import { IconMinus } from '@sigrennesmetropole/cooperation_jn_common_ui'
import { UiIconButton } from '@sigrennesmetropole/cooperation_jn_common_ui'
import { UiDescribeButtonCompass } from '@sigrennesmetropole/cooperation_jn_common_ui'

import CompassComponent from '@/components/map/CompassComponent.vue'

import { useViewsStore } from '@/stores/views'
import { viewList } from '@/model/views.model'
import type { RennesApp } from '@/services/RennesApp'
import { useRouter } from 'vue-router'
import { usePanelsStore, PANEL_WIDTH } from '@/stores/panels'
import { useMapStore } from '@/stores/map'

const rennesApp = inject('rennesApp') as RennesApp
const viewStore = useViewsStore()
const router = useRouter()
const panelStore = usePanelsStore()
const mapStore = useMapStore()

async function zoom(out = false, zoomFactor = 2): Promise<void> {
  const activeMap = rennesApp.maps.activeMap
  const viewpoint = await activeMap?.getViewpoint()

  if (activeMap && viewpoint) {
    let distance = viewpoint.distance / zoomFactor
    if (out) {
      distance = viewpoint.distance * zoomFactor
    }

    const newVp = cloneViewPointAndResetCameraPosition(viewpoint, distance)
    await rennesApp.maps?.activeMap.gotoViewpoint(newVp)
  }
}

const shouldDisplayHomeButton = () => {
  return [
    viewList.home,
    viewList['roof-selection'],
    viewList['roof-selected-information'],
  ].includes(viewStore.currentView)
}

const heightClass = computed(() => {
  if (!shouldDisplayHomeButton()) {
    return ['h-[14rem]']
  } else {
    return ['h-[18rem]']
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
      title-button="Réinitialiser"
      ><IconHome />
    </UiIconButton>

    <b-button
      :disabled="false"
      class="relative shadow-lg w-12 h-12 bg-white flex items-center justify-center hover:bg-gray-100 focus:ring-2 focus:z-10 focus:ring-slate-400 focus:outline-none"
      data-title="data-title"
    >
      <IconHome />
    </b-button>

    <div class="flex flex-col zoom-buttons text-2xl [&>*]:p-2" role="group">
      <UiIconButton
        class="rounded-t-lg"
        @click="() => zoom(false)"
        ariaLabelButton="Zoom vers l'avant"
        title-button="Zoom vers l'avant"
        ><IconPlus />
      </UiIconButton>
      <UiIconButton
        class="rounded-b-lg"
        @click="() => zoom(true)"
        ariaLabelButton="Zoom vers l'arrière"
        title-button="Zoom vers l'arrière"
        ><IconMinus />
      </UiIconButton>
    </div>
    <CompassComponent v-if="mapStore.is3D()" />
  </div>

  <div
    class="absolute right-[130px] bottom-12"
    v-if="!panelStore.isRightPanel()"
  >
    <UiDescribeButtonCompass></UiDescribeButtonCompass>
  </div>
</template>

<style>
[data-title]:hover:after {
  opacity: 1;
  transition: all 0.1s ease 0.5s;
  visibility: visible;
}
[data-title]:after {
  content: attr(data-title);
  background-color: rgba(23, 23, 23, 0.8);
  border-radius: 8px;
  color: white;
  font-size: 14px;
  position: absolute;
  padding: 8px 24px;
  right: 40px;
  white-space: nowrap;
  z-index: 99999;
  visibility: hidden;
}
[data-title] {
  position: relative;
}
</style>
