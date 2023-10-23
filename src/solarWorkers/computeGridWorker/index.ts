import PromiseWorker from 'promise-worker'
import ComputeGridWorker from '@/solarWorkers/computeGridWorker?worker&inline'

const computeGridWorker = new ComputeGridWorker()

const computeGridPromiseWorker = new PromiseWorker(computeGridWorker)

const sendComputeGrid = (message: any) =>
  computeGridPromiseWorker.postMessage({
    type: 'message',
    message,
  })

export default {
  sendComputeGrid,
}
