<script setup lang="ts">
import { Viewpoint, type VcsMap, type ViewpointOptions } from '@vcmap/core'
import { inject, onMounted, ref } from 'vue'
import type { RennesApp } from '@/services/RennesApp'
import IconCompass from '../ui/icons/IconCompass.vue'

const rennesApp = inject('rennesApp') as RennesApp

const compass = ref<HTMLDivElement | null>(null)
const arrow = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (rennesApp.get3DMap()) {
    syncCompass(rennesApp.get3DMap())
  }
})

function syncCompass(map: VcsMap) {
  map.postRender.addEventListener(({ map }) => {
    const vp = map.getViewpointSync()
    if (vp && vp.isValid()) {
      transformArrow(vp.pitch)
      transformNorthPoint(vp.heading)
    }
  })
}

const trackMouse = (
  // Dirty hack: eslint triggers a unused-vars false positive
  // eslint-disable-next-line no-unused-vars
  callback: (e: MouseEvent) => Promise<void>,
  endCallback: Function = () => {}
) => {
  document.body.addEventListener('mousemove', callback)
  document.body.addEventListener('mouseup', () => {
    document.body.removeEventListener('mousemove', callback)
    endCallback()
  })
}

function onNorthPointClick() {
  if (!compass.value || !arrow.value) return
  const timestamp = Date.now()
  const clickDuration = 100
  const { top, left, height, width } = compass.value.getBoundingClientRect()

  const compassPos = {
    x: left + width / 2,
    y: top + height / 2,
  }

  trackMouse(
    async (e) => {
      const angleRadians = Math.atan2(
        compassPos.x - e.clientX,
        compassPos.y - e.clientY
      )
      const angle = (180 / Math.PI) * angleRadians
      transformNorthPoint(angle)
      await headingMap(angle)
    },
    () => {
      if (Date.now() - timestamp < clickDuration) {
        headingMap(0, true)
      }
    }
  )
}

function onCompassClick() {
  if (!arrow.value) return
  const { top, height } = arrow.value.getBoundingClientRect()
  const yPos = top + height / 2

  trackMouse(async (e) => {
    const speed = 0.5
    const initialTilt = -90
    const maxTilt = -15 // arbitrary
    const tilt = (yPos - e.clientY) * speed + initialTilt
    if (tilt < initialTilt || tilt > maxTilt) {
      return
    }
    transformArrow(tilt)
    await tiltingMap(tilt)
  })
}

const headingMap = async (heading: number, animate = false) => {
  const vp = await rennesApp.maps?.activeMap.getViewpoint()
  if (vp) {
    vp.heading = heading
    vp.animate = animate
    rennesApp.maps?.activeMap.gotoViewpoint(vp)
  }
}

const tiltingMap = async (pitch: number) => {
  const vp = await rennesApp.maps?.activeMap.getViewpoint()
  if (vp) {
    const vpJson: ViewpointOptions = vp?.toJSON() as ViewpointOptions
    // Set the camera position to null to force its position recalculation
    vpJson.cameraPosition = undefined
    vpJson.pitch = pitch
    const newVp = new Viewpoint(vpJson)
    rennesApp.maps?.activeMap.gotoViewpoint(newVp)
  }
}

const transformNorthPoint = (angle: number) => {
  if (compass.value && arrow.value) {
    angle = Math.round(angle)
    compass.value.style.transform = `rotate(${-angle}deg)`
    const parentElement = arrow.value.parentNode as HTMLDivElement
    parentElement.style.transform = `rotate(${angle}deg)`
  }
}

const transformArrow = (tilt: number) => {
  if (arrow.value) {
    const initialTilt = -90
    tilt = Math.round(initialTilt - tilt)
    arrow.value.style.transform = `rotateX(${tilt}deg)`
  }
}
</script>

<template>
  <div
    ref="compass"
    class="orbit h-20 w-20 border-4 border-gray-300 rounded-full flex justify-center items-center absolute bottom-0 shadow-lg"
  >
    <div
      class="h-3 w-3 flex justify-center items-center text-[8px] bg-black text-white absolute bottom-[70px] cursor-pointer rounded"
      @mousedown="onNorthPointClick"
    >
      N
    </div>
    <div>
      <div
        ref="arrow"
        class="h-[54px] w-[54px] bg-white rounded-[100%] z-10 cursor-pointer flex justify-center items-center text-black text-xs shadow-md"
        @mousedown="onCompassClick"
      >
        <IconCompass />
      </div>
    </div>
  </div>
</template>

<style scoped>
.orbit {
  animation: compassInit 150ms;
  perspective: 1500px;
}

@keyframes compassInit {
  0% {
    height: 10px;
    width: 10px;
  }

  100% {
    height: 100px;
    width: 100px;
  }
}
</style>
