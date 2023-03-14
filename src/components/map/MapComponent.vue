<script setup lang="ts">
import { onMounted, inject } from 'vue'
import type { RennesApp } from '@/services/RennesApp'
import UiMap from '@/components/ui/UiMap.vue'
import {
  RENNES_LAYER,
  RENNES_LAYERNAMES,
  useLayersStore,
} from '@/stores/layers'
import type { Layer } from '@vcmap/core'
import NavigationButtons from '@/components/map/buttons/NavigationButtons.vue'
import { usePanelsStore, PANEL_WIDTH } from '@/stores/panels'
import { useSimulationStore } from '@/stores/simulations'
import { useAddressStore } from '@/stores/address'
import { buffer, point, squareGrid, bbox, FeatureCollection } from '@turf/turf'
import { GeoJSONLayer } from '@vcmap/core'
import { GeoJSON } from 'ol/format'
import type { Coordinate } from 'ol/coordinate'

const rennesApp = inject('rennesApp') as RennesApp
const layerStore = useLayersStore()
const panelStore = usePanelsStore()
const simulationStore = useSimulationStore()
const addressStore = useAddressStore()

onMounted(async () => {
  await rennesApp.initializeMap()
  await updateActiveMap()
  await updateLayersVisibility()
})

// onUnmounted(() => {
//   rennesApp.destroy()
// })

async function updateActiveMap() {
  await rennesApp.maps.setActiveMap('cesium')
}

async function updateLayersVisibility() {
  for (const layer of RENNES_LAYERNAMES) {
    await setLayerVisible(layer, layerStore.visibilities[layer])
  }
}

async function setLayerVisible(layerName: string, visible: boolean) {
  const layer: Layer = rennesApp.maps.layerCollection.getByKey(layerName)
  if (visible) {
    await layer?.activate()
  } else {
    layer?.deactivate()
  }
}

async function displayGridOnMap(geojson: FeatureCollection) {
  const gridLayer: GeoJSONLayer = rennesApp.layers.getByKey(
    RENNES_LAYER.roofSquaresArea
  ) as GeoJSONLayer
  const format = new GeoJSON()
  const marker = format.readFeatures(geojson)
  gridLayer.addFeatures(marker)
}
async function generateSquareGrid(geoloc: Coordinate) {
  console.log('Generate Square grid', point(geoloc))
  let buffered = buffer(point(geoloc), 500, { units: 'centimeters' })
  let bboxOnRoof = bbox(buffered)
  let grid = squareGrid(bboxOnRoof, 90, { units: 'centimeters' })
  await displayGridOnMap(grid)
}

simulationStore.$subscribe(async () => {
  if (simulationStore.currentStep === 2) {
    await rennesApp.maps.setActiveMap('ol')
    if (addressStore.geolocAddress !== null) {
      await generateSquareGrid(addressStore.geolocAddress)
      await layerStore.enableLayer(RENNES_LAYER.roofSquaresArea)
    }
  } else {
    await rennesApp.maps.setActiveMap('cesium')
  }
})

layerStore.$subscribe(async () => {
  await updateLayersVisibility()
})
</script>

<template>
  <UiMap></UiMap>
  <NavigationButtons />
</template>
