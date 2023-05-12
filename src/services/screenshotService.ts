import { CesiumMap } from '@vcmap/core'
import type { RennesApp } from '@/services/RennesApp'
import { useAddressStore } from '@/stores/address'

/**
 * The code of this services come from this repositories:
 * https://github.com/virtualcitySYSTEMS/map-print
 * https://github.com/virtualcitySYSTEMS/map-print/blob/main/src/screenshot/screenshotCreator.js
 */

function prepareCesiumMap(map: CesiumMap, scale: number) {
  const viewer = map.getCesiumWidget()
  const { resolutionScale } = viewer
  viewer.resolutionScale = scale

  return function resetCesiumMap() {
    viewer.resolutionScale = resolutionScale
  }
}

async function getImageFromCesium(map: CesiumMap) {
  const { scene } = map.getCesiumWidget()

  return new Promise((resolve) => {
    const removePreListener = scene.preUpdate.addEventListener(() => {
      const { canvas } = scene
      const removePostListener = scene.postRender.addEventListener(() => {
        resolve(canvas)
        removePostListener()
      })
      removePreListener()
    })
  })
}

/**
 * Renders Screenshot of the currently active map with all active Layers in a given pixel width.
 * Height is calculated from current aspect ratio.
 */
export async function renderScreenshot(app: RennesApp, width: number) {
  let screenshotCanvas

  /**
   * Calculates the width and height of the screenshot.
   */
  function calcRenderSize(mapSize: number[], screenshotWidth: number) {
    const aspectRatio = mapSize[0] / mapSize[1]
    const renderSize = [screenshotWidth, screenshotWidth / aspectRatio]
    return renderSize
  }

  /**
   * Logs a warning if the total pixel count exceeds a threshold of chromium based browsers.
   */
  function checkChromeMaxPixel(renderSize: number[], threshold: number) {
    // TODO: show notification in UI for user
    // TODO: reevaluate chromium behaviour regarding max pixel count
    const totalPixelCount = renderSize[0] * renderSize[1]
    if (
      totalPixelCount > threshold &&
      // @ts-ignore
      window.chrome
    ) {
      console.log(`The created image might have black bars at some of the edges. This is due to a behavior of chromium based browsers
      that occurs when the total pixel count of the cesium map exceeds a threshold of thirty-three million pixels.
      In order to avoid this either reduce the resolution or switch to Mozilla Firefox browser.`)
    }
  }

  /**
   * Function for resetting map after screenshot processes finished.
   * @type {Function}
   */
  let resetMap
  const map = app.maps.activeMap

  if (map instanceof CesiumMap) {
    const mapSize = ['width', 'height'].map(
      // @ts-ignore
      (dimension) => map.getCesiumWidget().scene.canvas[dimension]
    )
    // check if render size is above chromium threshold
    checkChromeMaxPixel(calcRenderSize(mapSize, width), 33000000)
    const scale = width / mapSize[0]
    resetMap = prepareCesiumMap(map, scale)
    screenshotCanvas = await getImageFromCesium(map)
  } else {
    throw new Error('wrong Map')
  }
  resetMap()
  return screenshotCanvas
}

/**
 * Helps when ui freezes
 * @returns {Promise} Promise that is immediately resolved
 */
export async function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0)
  })
}

function jpgCreateFunction(
  // @ts-ignore
  canvas
) {
  return new Promise((resolve) => {
    canvas.toBlob(resolve, 'image/jpeg')
  })
}

/**
 * Function that creates a screenshot
 */
export async function createAndHandleBlob(app: RennesApp, width: number) {
  await sleep()
  const canvas = await renderScreenshot(app, width)
  const blob = await jpgCreateFunction(canvas)
  return blob
}

export async function saveScreenShot(app: RennesApp) {
  const blob = await createAndHandleBlob(app, 1000)
  const addressStore = useAddressStore()
  // @ts-ignore
  addressStore.screenshotAddress = blob
}
