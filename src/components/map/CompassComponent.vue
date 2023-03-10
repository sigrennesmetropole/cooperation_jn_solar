<script setup lang="ts">
import { Viewpoint, type VcsMap, type ViewpointOptions } from '@vcmap/core'
import { inject, ref } from 'vue'
import type { RennesApp } from '@/services/RennesApp'
import { UiCompass } from '@sigrennesmetropole/cooperation_jn_common_ui'
import { useMapStore } from '@/stores/map'

const rennesApp = inject('rennesApp') as RennesApp
const vpPitch = ref<number>(0)
const vpHeading = ref<number>(0)
const previousVp = ref<Viewpoint | null>(null)

const mapStore = useMapStore()

mapStore.$subscribe(async () => {
  if (mapStore.isInitializeMap) {
    syncCompass(rennesApp.get3DMap())
  }
})

function syncCompass(map: VcsMap) {
  map.postRender.addEventListener(({ map }) => {
    const vp = map.getViewpointSync()
    if (
      vp &&
      vp.isValid() &&
      (previousVp.value === null || !vp.equals(previousVp.value))
    ) {
      vpPitch.value = vp.pitch
      vpHeading.value = vp.heading
      previousVp.value = vp
    }
  })
}

const headingMap = async (event: { angle: number; animate: boolean }) => {
  const vp = await rennesApp.maps?.activeMap.getViewpoint()
  if (vp) {
    const vpJson: ViewpointOptions = vp?.toJSON() as ViewpointOptions
    vpJson.heading = event.angle
    vpJson.animate = event.animate
    vpJson.cameraPosition = undefined
    const newVp = new Viewpoint(vpJson)
    rennesApp.maps?.activeMap.gotoViewpoint(newVp)
  }
}

const tiltingMap = async (event: { tilt: number }) => {
  const vp = await rennesApp.maps?.activeMap.getViewpoint()
  if (vp && event.tilt) {
    const vpJson: ViewpointOptions = vp?.toJSON() as ViewpointOptions
    // Set the camera position to null to force its position recalculation
    vpJson.cameraPosition = undefined
    vpJson.pitch = event.tilt
    const newVp = new Viewpoint(vpJson)
    rennesApp.maps?.activeMap.gotoViewpoint(newVp)
  }
}
</script>

<template>
  <UiCompass
    :vpPitch="vpPitch"
    :vpHeading="vpHeading"
    @headingMap="headingMap($event)"
    @tiltingMap="tiltingMap($event)"
  />
</template>
