import PromiseWorker from 'promise-worker'
import SetupSolarWorker from './worker?worker'

const setupSolarWorker = new SetupSolarWorker()
const promiseWorker = new PromiseWorker(setupSolarWorker)

const send = (message: any) =>
  promiseWorker.postMessage({
    type: 'message',
    message,
  })

export default {
  send,
}
