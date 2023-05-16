import { afterAll, vi } from 'vitest'
import CanvasRenderingContext2D from 'jest-canvas-mock/lib/classes/CanvasRenderingContext2D.js'
import Path2D from 'jest-canvas-mock/lib/classes/Path2D.js'
import ResizeObserver from 'resize-observer-polyfill'
global.jest = vi

import getCanvasWindow from 'jest-canvas-mock/lib/window'
global.CanvasRenderingContext2D = CanvasRenderingContext2D
global.Path2D = Path2D
global.ResizeObserver = ResizeObserver

class Worker {
  constructor(stringUrl) {
    this.url = stringUrl
    this.onmessage = () => {}
  }

  postMessage(msg) {
    this.onmessage(msg)
  }

  addEventListener() {}
}

window.Worker = Worker

const canvasWindow = getCanvasWindow({ document: window.document })

const apis = [
  'Path2D',
  'CanvasGradient',
  'CanvasPattern',
  'CanvasRenderingContext2D',
  'DOMMatrix',
  'ImageData',
  'TextMetrics',
  'ImageBitmap',
  'createImageBitmap',
]

apis.forEach((api) => {
  global[api] = canvasWindow[api]
  global.window[api] = canvasWindow[api]
})
afterAll(() => {
  // @ts-expect-error: type
  delete global.jest
  // @ts-expect-error: type
  delete global.window.jest
})

import 'jest-canvas-mock'
