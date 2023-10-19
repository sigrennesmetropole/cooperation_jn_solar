import PromiseWorker from 'promise-worker'
import CenterFilterGridWorker from './centerFilterWorker/centerFilterWorker?worker'
import ComputeGridWorker from './computeGridWorker/computeGridWorker?worker'

const centerFilterGridWorker = new CenterFilterGridWorker()
const computeGridWorker = new ComputeGridWorker()

const centerFilterGridPromiseWorker = new PromiseWorker(centerFilterGridWorker)
const computeGridPromiseWorker = new PromiseWorker(computeGridWorker)

const sendCenterFilterGrid = (message: any) =>
  centerFilterGridPromiseWorker.postMessage({
    type: 'message',
    message,
  })

const sendComputeGrid = (message: any) =>
  computeGridPromiseWorker.postMessage({
    type: 'message',
    message,
  })

export default {
  sendCenterFilterGrid,
  sendComputeGrid,
}
