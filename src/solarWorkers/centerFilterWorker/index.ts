import PromiseWorker from 'promise-worker'
import CenterFilterGridWorker from '@/solarWorkers/centerFilterWorker?worker&inline'

const centerFilterGridWorker = new CenterFilterGridWorker()

const centerFilterGridPromiseWorker = new PromiseWorker(centerFilterGridWorker)

const sendCenterFilterGrid = (message: any) =>
  centerFilterGridPromiseWorker.postMessage({
    type: 'message',
    message,
  })

export default {
  sendCenterFilterGrid,
}
